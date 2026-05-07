
// ── CHAT SCREEN ───────────────────────────────────────────────────────
function ChatScreen({chatId,matches,chats,sendMsg,acceptInvite,rejectInvite,voteResult,onBack,th,dark}){
  const [text,setText]=React.useState("");
  const [showInvite,setShowInvite]=React.useState(false);
  const [dateInput,setDateInput]=React.useState("");
  const [timeInput,setTimeInput]=React.useState("14:00");
  const match=matches.find(m=>m.chatId===chatId);
  const msgs=chats[chatId]||[];
  const endRef=React.useRef(null);
  React.useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  function send(){
    if(!text.trim())return;
    sendMsg(chatId,text.trim());
    setText("");
  }
  function sendInvite(){
    if(!dateInput)return;
    const dt=new Date(`${dateInput}T${timeInput}`);
    sendMsg(chatId,`📅 Maç Daveti: ${dt.toLocaleString("tr-TR",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`,"match_invite",{datetime:dt.toISOString(),accepted:false,rejected:false});
    setShowInvite(false);setDateInput("");
  }
  const team=match?.team;
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:th.bg,height:"100%"}}>
      {/* Header */}
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${th.border}`,display:"flex",alignItems:"center",gap:12,flexShrink:0,background:th.nav}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:th.acc,fontSize:20,cursor:"pointer",padding:0,lineHeight:1}}>←</button>
        {team&&<><div style={{fontSize:26}}>{team.logo}</div>
        <div style={{flex:1}}>
          <div style={{color:th.text,fontWeight:800,fontSize:15}}>{team.name}</div>
          <div style={{color:match?.confirmed?"#4ade80":"#f97316",fontSize:11,fontWeight:600}}>{match?.confirmed?"✅ Maç Onaylandı":"⏳ Onay Bekleniyor"}</div>
        </div></>}
      </div>
      {/* Messages */}
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px",display:"flex",flexDirection:"column",gap:10}}>
        {msgs.map(msg=>{
          const isMe=msg.from==="me";
          if(msg.type==="result_request"){
            return (
              <div key={msg.id} style={{background:dark?"#0d1a0d":"#f0fff4",border:"1px solid #4ade8044",borderRadius:18,padding:"16px",margin:"8px 0"}}>
                <div style={{color:"#4ade80",fontWeight:800,fontSize:14,marginBottom:8}}>⚽ Maç Sonucu</div>
                <div style={{color:th.text3,fontSize:12,marginBottom:12}}>Maç sona erdi. Sonucu kaydedin.</div>
                {msg.myVote?(
                  <div style={{textAlign:"center"}}>
                    {msg.confirmed?<div style={{color:"#4ade80",fontWeight:700}}>✅ Sonuç onaylandı!</div>:<div style={{color:th.text4,fontSize:12,animation:"pulse 1.5s infinite"}}>Rakip onayı bekleniyor…</div>}
                  </div>
                ):(
                  <div style={{display:"flex",gap:8}}>
                    {[["🏆","Kazandık","win","#4ade80"],["🤝","Beraberlik","draw",th.text3],["😞","Kaybettik","loss","#f87171"]].map(([ic,lb,v,c])=>(
                      <button key={v} onClick={()=>voteResult(chatId,msg.id,msg.matchId,v)} style={{flex:1,padding:"10px 4px",borderRadius:12,border:`1px solid ${c}44`,background:`${c}12`,color:c,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                        <div style={{fontSize:20,marginBottom:4}}>{ic}</div>{lb}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          if(msg.type==="match_invite"){
            const p=msg.payload;
            return (
              <div key={msg.id} style={{alignSelf:"flex-start",maxWidth:"85%"}}>
                <div style={{background:dark?"#0d1400":"#fffbe6",border:"1px solid #F5F23444",borderRadius:18,padding:"14px"}}>
                  <div style={{color:"#F5F234",fontWeight:800,fontSize:13,marginBottom:6}}>📅 Maç Daveti</div>
                  <div style={{color:th.text2,fontSize:13,marginBottom:10}}>{msg.text.replace("📅 Maç Daveti: ","")}</div>
                  {!p.accepted&&!p.rejected&&!isMe&&(
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={()=>acceptInvite(chatId,msg.id,p)} style={{flex:1,padding:"8px",borderRadius:10,border:"none",background:"#4ade80",color:"#000",fontSize:12,fontWeight:700,cursor:"pointer"}}>✅ Kabul</button>
                      <button onClick={()=>rejectInvite(chatId,msg.id)} style={{flex:1,padding:"8px",borderRadius:10,border:"1px solid #f87171",background:"transparent",color:"#f87171",fontSize:12,fontWeight:700,cursor:"pointer"}}>❌ Reddet</button>
                    </div>
                  )}
                  {p.accepted&&<div style={{color:"#4ade80",fontSize:12,fontWeight:700}}>✅ Kabul edildi!</div>}
                  {p.rejected&&<div style={{color:"#f87171",fontSize:12,fontWeight:700}}>❌ Reddedildi</div>}
                </div>
              </div>
            );
          }
          return (
            <div key={msg.id} style={{display:"flex",justifyContent:isMe?"flex-end":"flex-start"}}>
              <div style={{maxWidth:"75%",padding:"10px 14px",borderRadius:isMe?"18px 18px 4px 18px":"18px 18px 18px 4px",background:isMe?th.acc:th.card,color:isMe?th.accT:th.text,fontSize:14,border:isMe?"none":`1px solid ${th.border}`,fontWeight:isMe?600:400}}>
                {msg.text}
              </div>
            </div>
          );
        })}
        <div ref={endRef}/>
      </div>
      {/* Invite panel */}
      {showInvite&&(
        <div style={{flexShrink:0,padding:"12px 16px",borderTop:`1px solid ${th.border}`,background:th.bg4}}>
          <div style={{color:th.text,fontWeight:700,fontSize:13,marginBottom:10}}>📅 Maç Tarihi Belirle</div>
          <div style={{display:"flex",gap:8,marginBottom:10}}>
            <input type="date" value={dateInput} onChange={e=>setDateInput(e.target.value)} style={{flex:1,...IStyle(th),padding:"10px 12px"}}/>
            <input type="time" value={timeInput} onChange={e=>setTimeInput(e.target.value)} style={{flex:1,...IStyle(th),padding:"10px 12px"}}/>
          </div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setShowInvite(false)} style={{flex:1,padding:"10px",borderRadius:12,border:`1px solid ${th.border3}`,background:"transparent",color:th.text3,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>İptal</button>
            <button onClick={sendInvite} style={{flex:2,padding:"10px",borderRadius:12,border:"none",background:th.acc,color:th.accT,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>📨 Davet Gönder</button>
          </div>
        </div>
      )}
      {/* Input */}
      <div style={{flexShrink:0,padding:"10px 12px",borderTop:`1px solid ${th.border}`,background:th.nav,display:"flex",gap:8,alignItems:"center"}}>
        {!match?.confirmed&&<button onClick={()=>setShowInvite(v=>!v)} style={{padding:"0 12px",height:44,borderRadius:12,border:`1px solid ${th.border}`,background:th.bg4,color:th.acc,fontSize:18,cursor:"pointer"}}>📅</button>}
        <input value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Mesaj yaz…" style={{flex:1,...IStyle(th),padding:"10px 14px"}}/>
        <button onClick={send} disabled={!text.trim()} style={{padding:"0 16px",height:44,borderRadius:12,border:"none",background:text.trim()?th.acc:"#1a1a1a",color:text.trim()?th.accT:th.text4,fontSize:15,fontWeight:700,cursor:text.trim()?"pointer":"default",fontFamily:"inherit",transition:"all .2s"}}>→</button>
      </div>
    </div>
  );
}

// ── MATCHES TAB ───────────────────────────────────────────────────────
function MatchesTab({matches,onChat,th}){
  const upcoming=matches.filter(m=>m.confirmed&&!m.result);
  const pending=matches.filter(m=>!m.confirmed);
  const finished=matches.filter(m=>m.result);
  const resColor={win:"#4ade80",loss:"#f87171",draw:th.text3};
  const resLabel={win:"🏆 Galibiyet",loss:"😞 Mağlubiyet",draw:"🤝 Beraberlik"};
  return (
    <div style={{flex:1,overflowY:"auto",background:th.bg}}>
      <div style={{padding:"14px 16px 0"}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,color:th.text,letterSpacing:2,marginBottom:14}}>MAÇLARIM</div>
        {upcoming.length>0&&<><SecTit th={th}>YAKLAŞAN ({upcoming.length})</SecTit>
          {upcoming.map(m=>(
            <div key={m.id} onClick={()=>onChat(m.chatId)} style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:16,padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"center",cursor:"pointer",animation:"fadeUp .3s ease"}}>
              <div style={{fontSize:26}}>{m.team.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:th.text,fontWeight:700,fontSize:14}}>{m.team.name}</div>
                {m.scheduledTime&&<div style={{color:"#4ade80",fontSize:12,marginTop:2}}>🗓 {new Date(m.scheduledTime).toLocaleString("tr-TR",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</div>}
              </div>
              <span style={{color:th.acc}}>›</span>
            </div>
          ))}</>}
        {pending.length>0&&<><SecTit th={th}>ONAY BEKLİYOR ({pending.length})</SecTit>
          {pending.map(m=>(
            <div key={m.id} onClick={()=>onChat(m.chatId)} style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:16,padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"center",cursor:"pointer"}}>
              <div style={{fontSize:26}}>{m.team.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:th.text,fontWeight:600,fontSize:14}}>{m.team.name}</div>
                <div style={{color:"#f97316",fontSize:12,marginTop:2}}>⏳ Tarih belirlenmedi</div>
              </div>
              <div style={{width:8,height:8,borderRadius:4,background:"#f97316",animation:"pulse 1.5s infinite"}}/>
            </div>
          ))}</>}
        {finished.length>0&&<><SecTit th={th}>TAMAMLANAN ({finished.length})</SecTit>
          {finished.map(m=>(
            <div key={m.id} style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:16,padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"center"}}>
              <div style={{fontSize:26}}>{m.team.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:th.text,fontWeight:600,fontSize:14}}>{m.team.name}</div>
                <div style={{color:resColor[m.result],fontSize:12,marginTop:2,fontWeight:700}}>{resLabel[m.result]}</div>
              </div>
            </div>
          ))}</>}
        {matches.length===0&&(
          <div style={{textAlign:"center",paddingTop:60}}>
            <div style={{fontSize:48,marginBottom:16}}>📅</div>
            <div style={{color:th.text2,fontWeight:700,fontSize:16,marginBottom:8}}>Henüz maç yok</div>
            <div style={{color:th.text4,fontSize:13}}>Keşfet ekranından takım beğen!</div>
          </div>
        )}
        <div style={{height:20}}/>
      </div>
    </div>
  );
}

// ── LEADERBOARD ───────────────────────────────────────────────────────
function LeaderTab({me,all,th,dark}){
  const medals=["🥇","🥈","🥉"];
  return (
    <div style={{flex:1,overflowY:"auto",background:th.bg}}>
      <div style={{padding:"14px 16px 0"}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,color:th.text,letterSpacing:2,marginBottom:14}}>SIRALAMAM</div>
        {all.map((t,i)=>{
          const isMe=t.id===me.id;
          const rnk=getRank(t.points);
          return (
            <div key={t.id||i} style={{display:"flex",alignItems:"center",gap:10,padding:"12px",borderRadius:14,marginBottom:6,background:isMe?`${th.acc}12`:th.card,border:`1px solid ${isMe?th.acc:th.border}`,animation:"fadeUp .3s ease",animationDelay:`${i*.03}s`}}>
              <div style={{width:28,textAlign:"center",fontFamily:"'Bebas Neue',sans-serif",fontSize:16,color:i<3?th.acc:th.text4}}>{i<3?medals[i]:`#${i+1}`}</div>
              <div style={{fontSize:24}}>{t.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:isMe?th.acc:th.text,fontWeight:isMe?800:600,fontSize:13}}>{t.name||"Takımım"}{isMe?" (Sen)":""}</div>
                <div style={{color:th.text4,fontSize:10,marginTop:1}}>📍 {t.city} · {t.district}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{color:rnk.color,fontSize:12}}>{rnk.icon}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:18,color:th.text,letterSpacing:1}}>{t.points}</div>
              </div>
            </div>
          );
        })}
        <div style={{height:20}}/>
      </div>
    </div>
  );
}
