
// ── APP ROOT ──────────────────────────────────────────────────────────
function App(){
  const [screen,setScreen]=React.useState("splash");
  const [dark,setDark]=React.useState(true);
  const [me,setMe]=React.useState(null);
  const [tab,setTab]=React.useState("home");
  const [teamList,setTeamList]=React.useState(TEAMS.map(t=>({...t,swiped:false})));
  const [matches,setMatches]=React.useState([]);
  const [chats,setChats]=React.useState({});
  const [activeChat,setActiveChat]=React.useState(null);
  const [popup,setPopup]=React.useState(null);
  const [showPrem,setShowPrem]=React.useState(false);
  const [toastMsg,setToastMsg]=React.useState(null);
  const [swipeDir,setSwipeDir]=React.useState(null);
  const [floatPts,setFloatPts]=React.useState(null);
  const injectedRef=React.useRef(new Set());
  const th=mkTheme(dark);

  React.useEffect(()=>{setTimeout(()=>setScreen(me?"home":"onboard"),2400);},[]);
  React.useEffect(()=>{
    const iv=setInterval(()=>{
      const now=Date.now();
      setMatches(ms=>ms.map(m=>{
        if(m.confirmed&&m.scheduledTime&&!m.resultAsked&&!m.result){
          if(now>=new Date(m.scheduledTime).getTime()+60000)return{...m,resultAsked:true};
        }
        return m;
      }));
    },5000);
    return ()=>clearInterval(iv);
  },[]);
  React.useEffect(()=>{
    matches.forEach(m=>{
      if(m.resultAsked&&!m.result&&!injectedRef.current.has(m.id)){
        injectedRef.current.add(m.id);
        const req={id:Date.now()+Math.random(),from:"system",type:"result_request",matchId:m.id,chatId:m.chatId,ts:new Date(),myVote:null,opVote:null,confirmed:false};
        setChats(c=>({...c,[m.chatId]:[...(c[m.chatId]||[]),req]}));
      }
    });
  },[matches]);

  function toast(msg,type="info"){setToastMsg({msg,type});setTimeout(()=>setToastMsg(null),3000);}
  function addPts(n){setMe(m=>({...m,points:m.points+n}));setFloatPts(n);setTimeout(()=>setFloatPts(null),1500);}
  function toggleDay(d){setMe(m=>{const a=m.avail||[];return{...m,avail:a.includes(d)?a.filter(x=>x!==d):[...a,d]};});}
  function updateMe(f){setMe(m=>({...m,...f}));}

  const unswiped=teamList.filter(t=>!t.swiped);
  const top=unswiped[0];
  const myInitiated=matches.filter(m=>!m.incoming).length;

  function doSwipe(dir){
    if(!top)return;
    const like=dir==="right"||dir==="super";
    if(like&&myInitiated>=1&&!me?.isPremium){setShowPrem(true);return;}
    setSwipeDir(dir==="super"?"right":dir);
    setTimeout(()=>{
      setSwipeDir(null);
      setTeamList(ts=>ts.map(t=>t.id===top.id?{...t,swiped:true}:t));
      if(like){
        if(Math.random()>0.3){
          const m={team:top,id:Date.now(),confirmed:false,result:null,chatId:top.id,scheduledTime:null,resultAsked:false,incoming:false,myResult:null,opResult:null,resultConfirmed:false};
          setMatches(ms=>[...ms,m]);
          setChats(c=>({...c,[top.id]:[]}));
          setPopup(top);
          addPts(dir==="super"?60:35);
        }else{toast("Henüz eşleşme yok…");addPts(5);}
      }
    },400);
  }

  function sendMsg(chatId,text,type,payload){
    const msg={id:Date.now(),from:"me",text,type:type||"text",payload:payload||null,ts:new Date()};
    setChats(c=>({...c,[chatId]:[...(c[chatId]||[]),msg]}));
    if(type==="match_invite")return;
    setTimeout(()=>{
      const autos=["Ne zaman uygunuz?","Saha bizde olabilir.","Cumartesi nasıl?","Tamam! 💪","Kaçar kişisiniz?"];
      const auto=autos[Math.floor(Math.random()*5)];
      setChats(c=>({...c,[chatId]:[...(c[chatId]||[]),{id:Date.now()+1,from:"them",text:auto,type:"text",ts:new Date()}]}));
    },1200);
  }

  function acceptInvite(chatId,msgId,payload){
    setChats(c=>({...c,[chatId]:(c[chatId]||[]).map(m=>m.id===msgId?{...m,payload:{...m.payload,accepted:true,rejected:false}}:m)}));
    const idx=matches.findIndex(m=>m.chatId===chatId);
    if(idx>=0){
      setMatches(ms=>ms.map((m,i)=>i===idx?{...m,confirmed:true,scheduledTime:payload.datetime}:m));
      addPts(100);toast("✅ Maç onaylandı! +100 puan","success");
      setChats(c=>({...c,[chatId]:[...(c[chatId]||[]),{id:Date.now()+10,from:"them",text:"✅ Harika! Sahada görüşürüz!",type:"text",ts:new Date()}]}));
    }
  }

  function rejectInvite(chatId,msgId){
    setChats(c=>({...c,[chatId]:(c[chatId]||[]).map(m=>m.id===msgId?{...m,payload:{...m.payload,rejected:true,accepted:false}}:m)}));
    setChats(c=>({...c,[chatId]:[...(c[chatId]||[]),{id:Date.now()+11,from:"me",text:"❌ Bu tarihe müsait değiliz. Başka tarih önerir misiniz?",type:"text",ts:new Date()}]}));
    setTimeout(()=>{setChats(c=>({...c,[chatId]:[...(c[chatId]||[]),{id:Date.now()+20,from:"them",text:"Tabii, pazar günü nasıl olur?",type:"text",ts:new Date()}]}));},1500);
  }

  function voteResult(chatId,msgId,matchId,vote){
    setChats(c=>({...c,[chatId]:(c[chatId]||[]).map(msg=>msg.id===msgId?{...msg,myVote:vote}:msg)}));
    setTimeout(()=>{
      const opVote=vote==="win"?"loss":vote==="loss"?"win":"draw";
      setChats(c=>({...c,[chatId]:(c[chatId]||[]).map(msg=>msg.id===msgId?{...msg,opVote,confirmed:true}:msg)}));
      setMatches(ms=>ms.map(m=>m.id===matchId?{...m,result:vote,myResult:vote,opResult:opVote,resultConfirmed:true}:m));
      if(vote==="win"){setMe(m=>({...m,wins:m.wins+1,played:m.played+1}));addPts(200);toast("🏆 Galibiyet! +200","success");}
      else if(vote==="draw"){setMe(m=>({...m,draws:m.draws+1,played:m.played+1}));addPts(50);toast("🤝 Beraberlik +50","success");}
      else{setMe(m=>({...m,losses:m.losses+1,played:m.played+1}));addPts(20);toast("Mağlubiyet +20","info");}
    },2500);
  }

  if(screen==="splash")return <Splash/>;
  if(screen==="onboard"||!me)return <Onboarding th={th} onComplete={profile=>{setMe(profile);setScreen("home");}}/>;

  const rnk=getRank(me.points);
  const nextRnk=RANKS.find(l=>l.min>me.points);
  const prog=nextRnk?Math.min(100,((me.points-rnk.min)/(nextRnk.min-rnk.min))*100):100;
  const pendingBadge=matches.filter(m=>!m.confirmed).length;
  const allBoard=[...TEAMS,{...me,id:0}].sort((a,b)=>b.points-a.points);
  const myRankGlobal=allBoard.findIndex(t=>t.id===me.id)+1;
  const tourneyQualified=myRankGlobal>=1&&myRankGlobal<=8;

  return (
    <div style={{width:"100%",maxWidth:430,height:"100dvh",margin:"0 auto",display:"flex",flexDirection:"column",overflow:"hidden",position:"relative",background:th.bg,color:th.text}}>
      {toastMsg&&<Toast msg={toastMsg.msg} type={toastMsg.type} th={th}/>}
      {floatPts&&<div style={{position:"fixed",top:"36%",left:"50%",zIndex:400,fontFamily:"'Bebas Neue',sans-serif",fontSize:44,color:th.acc,pointerEvents:"none",animation:"floatUp 1.2s ease forwards",letterSpacing:2}}>+{floatPts}</div>}
      {popup&&<MatchPopup team={popup} me={me} th={th} onChat={()=>{setPopup(null);setActiveChat(popup.id);setTab("discover");}} onClose={()=>setPopup(null)}/>}
      {showPrem&&<PremiumModal th={th} onActivate={()=>{setMe(m=>({...m,isPremium:true}));setShowPrem(false);toast("⚡ Premium aktif!","success");}} onClose={()=>setShowPrem(false)}/>}
      <div style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:0}}>
        {tab==="home"&&<HomeTab me={me} rnk={rnk} prog={prog} nextRnk={nextRnk} matches={matches} setTab={setTab} setActiveChat={setActiveChat} setShowPrem={setShowPrem} toggleDay={toggleDay} th={th} dark={dark} tourneyRank={myRankGlobal} tourneyQualified={tourneyQualified} allBoard={allBoard}/>}
        {tab==="discover"&&(activeChat!=null
          ?<ChatScreen chatId={activeChat} matches={matches} chats={chats} sendMsg={sendMsg} acceptInvite={acceptInvite} rejectInvite={rejectInvite} voteResult={voteResult} onBack={()=>setActiveChat(null)} th={th} dark={dark}/>
          :<DiscoverTab me={me} top={top} unswiped={unswiped} swipeDir={swipeDir} doSwipe={doSwipe} rnk={rnk} prog={prog} matches={matches} setActiveChat={setActiveChat} th={th} dark={dark}/>
        )}
        {tab==="matches"&&<MatchesTab matches={matches} onChat={id=>{setActiveChat(id);setTab("discover");}} th={th}/>}
        {tab==="leaderboard"&&<LeaderTab me={me} all={allBoard} th={th} dark={dark}/>}
        {tab==="profile"&&<ProfileTab me={me} rnk={rnk} prog={prog} nextRnk={nextRnk} setShowPrem={setShowPrem} updateMe={updateMe} toggleDay={toggleDay} th={th} dark={dark} setDark={setDark}/>}
      </div>
      <BotNav tab={tab} setTab={t=>{if(t!=="discover")setActiveChat(null);setTab(t);}} badge={pendingBadge} th={th}/>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
