
// ── MATCH POPUP ───────────────────────────────────────────────────────
function MatchPopup({team,me,th,onChat,onClose}){
  return (
    <div style={{position:"fixed",inset:0,zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,.7)",backdropFilter:"blur(8px)"}}>
      <div style={{width:"100%",maxWidth:430,background:th.card,borderRadius:"28px 28px 0 0",padding:"24px 24px 36px",animation:"fadeUp .4s cubic-bezier(.175,.885,.32,1.275)"}}>
        <div style={{width:48,height:4,borderRadius:2,background:th.border3,margin:"0 auto 20px"}}/>
        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{fontSize:60,marginBottom:8,animation:"heartbeat 1s ease infinite"}}>{team.logo}</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,color:th.text,letterSpacing:2,marginBottom:4}}>EŞLEŞTİN! 🎉</div>
          <div style={{color:th.acc,fontSize:18,fontWeight:800,marginBottom:4}}>{team.name}</div>
          <div style={{color:th.text4,fontSize:13}}>📍 {team.city} · {team.district}</div>
        </div>
        <div style={{background:th.bg4,borderRadius:16,padding:"16px",marginBottom:16}}>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            {[["⭐",team.rating,"Puan"],["👥",`${team.players}`,"Oyuncu"],["🏆",team.wins,"Galibiyet"]].map(([ic,v,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontSize:18,marginBottom:4}}>{ic}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:th.text,letterSpacing:1}}>{v}</div>
                <div style={{color:th.text4,fontSize:10}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:"flex",gap:10}}>
          <button onClick={onClose} style={{flex:1,padding:"14px",borderRadius:14,border:`1px solid ${th.border3}`,background:"transparent",color:th.text2,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Daha Sonra</button>
          <button onClick={onChat} style={{flex:2,padding:"14px",borderRadius:14,border:"none",background:th.acc,color:th.accT,fontSize:14,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>💬 Mesaj Gönder →</button>
        </div>
      </div>
    </div>
  );
}

// ── PREMIUM MODAL ─────────────────────────────────────────────────────
function PremiumModal({th,onActivate,onClose}){
  return (
    <div style={{position:"fixed",inset:0,zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,.8)",backdropFilter:"blur(12px)"}}>
      <div style={{width:"100%",maxWidth:430,background:th.card,borderRadius:"28px 28px 0 0",padding:"24px 24px 40px",animation:"fadeUp .4s cubic-bezier(.175,.885,.32,1.275)"}}>
        <div style={{width:48,height:4,borderRadius:2,background:th.border3,margin:"0 auto 20px"}}/>
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{fontSize:52,marginBottom:8}}>⚡</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"#F5F234",letterSpacing:2,marginBottom:4}}>FUTMATCH PRO</div>
          <div style={{color:th.text3,fontSize:13,lineHeight:1.6}}>Sınırsız swipe, öncelikli eşleşme ve daha fazlası</div>
        </div>
        {[["♾️","Sınırsız Swipe","Günlük limit yok"],["⚡","Süper Beğeni","Her gün 5 süper beğeni"],["📊","Detaylı İstatistik","Gelişmiş analiz paneli"],["🏆","Turnuva Önceliği","Erken kayıt hakkı"]].map(([ic,t,s])=>(
          <div key={t} style={{display:"flex",gap:12,alignItems:"center",padding:"10px 0",borderBottom:`1px solid ${th.border}`}}>
            <span style={{fontSize:22,width:32,textAlign:"center"}}>{ic}</span>
            <div><div style={{color:th.text,fontSize:13,fontWeight:700}}>{t}</div><div style={{color:th.text4,fontSize:11}}>{s}</div></div>
          </div>
        ))}
        <div style={{marginTop:20,display:"flex",gap:10}}>
          <button onClick={onClose} style={{flex:1,padding:"14px",borderRadius:14,border:`1px solid ${th.border3}`,background:"transparent",color:th.text3,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>İptal</button>
          <button onClick={onActivate} style={{flex:2,padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#F5F234,#FFD700)",color:"#000",fontSize:14,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>⚡ ₺49/ay Başla</button>
        </div>
      </div>
    </div>
  );
}

// ── SWIPE CARD ────────────────────────────────────────────────────────
function SwipeCard({team,dir,th,dark}){
  const rnk=getRank(team.points);
  const anim=dir==="left"?"swipeLeft .4s ease forwards":dir==="right"?"swipeRight .4s ease forwards":"none";
  return (
    <div style={{position:"absolute",width:"100%",height:"100%",borderRadius:24,overflow:"hidden",background:th.card,border:`1px solid ${th.border}`,animation:anim,boxShadow:dark?"0 20px 60px rgba(0,0,0,.8)":"0 20px 60px rgba(0,0,0,.15)"}}>
      <div style={{height:"55%",background:dark?`linear-gradient(160deg,#111,#0a0a00)`:`linear-gradient(160deg,#f8f7ee,#fff)`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle at 50% 40%, ${th.acc}15 0%, transparent 65%)`,pointerEvents:"none"}}/>
        <div style={{textAlign:"center",position:"relative",zIndex:1}}>
          <div style={{fontSize:80,marginBottom:10,animation:"heartbeat 2s ease infinite"}}>{team.logo}</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,color:th.text,letterSpacing:2,lineHeight:1}}>{team.name}</div>
          <div style={{color:th.text4,fontSize:13,marginTop:4}}>📍 {team.city} · {team.district}</div>
        </div>
      </div>
      <div style={{padding:"16px 18px"}}>
        <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
          {[team.level,`${team.players} Oyuncu`,`${rnk.icon} ${rnk.label}`].map(t=>(
            <span key={t} style={{padding:"4px 12px",borderRadius:20,background:th.bg4,border:`1px solid ${th.border}`,color:th.text3,fontSize:11,fontWeight:600}}>{t}</span>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:12}}>
          {[["G",team.wins,"#4ade80"],["B",team.draws,th.text3],["M",team.losses,"#f87171"]].map(([l,v,c])=>(
            <div key={l} style={{textAlign:"center",background:th.bg4,borderRadius:12,padding:"10px 6px"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:c}}>{v}</div>
              <div style={{color:th.text4,fontSize:10,letterSpacing:1}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {(team.avail||[]).map(d=><span key={d} style={{padding:"3px 9px",borderRadius:20,background:`${th.acc}15`,border:`1px solid ${th.acc}44`,color:th.acc,fontSize:10,fontWeight:700}}>{d}</span>)}
        </div>
        {team.desc&&<div style={{color:th.text3,fontSize:12,lineHeight:1.6,marginTop:10,fontStyle:"italic"}}>"{team.desc}"</div>}
      </div>
    </div>
  );
}

// ── DISCOVER TAB ──────────────────────────────────────────────────────
function DiscoverTab({me,top,unswiped,swipeDir,doSwipe,rnk,prog,matches,setActiveChat,th,dark}){
  const [showDate,setShowDate]=React.useState(false);
  const [dateInput,setDateInput]=React.useState("");
  const [timeInput,setTimeInput]=React.useState("14:00");
  const [inviteTarget,setInviteTarget]=React.useState(null);

  function sendInvite(m){
    if(!dateInput){return;}
    const dt=new Date(`${dateInput}T${timeInput}`);
    setShowDate(false);
    // handled by parent
    if(inviteTarget&&inviteTarget.onSend){inviteTarget.onSend(dt.toISOString());}
    setDateInput("");setInviteTarget(null);
  }

  if(!top&&unswiped.length===0){
    return (
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:th.bg,padding:24}}>
        <div style={{fontSize:52,marginBottom:16}}>🏆</div>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,color:th.text,letterSpacing:2,marginBottom:8}}>HEPSİNİ GÖRDÜN!</div>
        <div style={{color:th.text4,fontSize:13,textAlign:"center",lineHeight:1.7}}>Şu an gösterilecek yeni takım yok. Maçlarını kontrol et!</div>
      </div>
    );
  }

  const chatMatches=matches.filter(m=>m.chatId);
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:th.bg,overflow:"hidden"}}>
      {/* Header */}
      <div style={{padding:"14px 16px 10px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${th.border}`,flexShrink:0}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:th.text,letterSpacing:2}}>KEŞFET</div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <span style={{color:th.text4,fontSize:12}}>{unswiped.length} takım</span>
          <span style={{padding:"3px 8px",borderRadius:8,background:`${th.acc}20`,border:`1px solid ${th.acc}44`,color:th.acc,fontSize:10,fontWeight:700}}>{rnk.icon} {rnk.label}</span>
        </div>
      </div>

      {/* Card area */}
      <div style={{flex:1,position:"relative",overflow:"hidden",padding:"12px 16px"}}>
        <div style={{position:"relative",width:"100%",height:"100%"}}>
          {unswiped.slice(0,3).reverse().map((t,i,arr)=>{
            const isTop=i===arr.length-1;
            const scale=1-((arr.length-1-i)*0.03);
            const translateY=(arr.length-1-i)*8;
            return (
              <div key={t.id} style={{position:"absolute",inset:0,transform:isTop?"none":`scale(${scale}) translateY(-${translateY}px)`,transformOrigin:"bottom center",transition:"transform .3s ease"}}>
                {isTop?<SwipeCard team={t} dir={swipeDir} th={th} dark={dark}/>:<SwipeCard team={t} dir={null} th={th} dark={dark}/>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{flexShrink:0,padding:"0 20px 12px"}}>
        <div style={{display:"flex",justifyContent:"center",gap:16,marginBottom:10}}>
          <button onClick={()=>doSwipe("left")} style={{width:58,height:58,borderRadius:29,border:`2px solid #f87171`,background:"transparent",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#f87171",transition:"all .15s"}}>✕</button>
          <button onClick={()=>doSwipe("super")} style={{width:52,height:52,borderRadius:26,border:`2px solid #F5F234`,background:"transparent",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s"}}>⭐</button>
          <button onClick={()=>doSwipe("right")} style={{width:58,height:58,borderRadius:29,border:`2px solid #4ade80`,background:"transparent",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#4ade80",transition:"all .15s"}}>♥</button>
        </div>
        <div style={{display:"flex",gap:6,justifyContent:"center"}}>
          <span style={{color:th.text5,fontSize:10}}>✕ Geç</span>
          <span style={{color:th.text5,fontSize:10}}>·</span>
          <span style={{color:th.text5,fontSize:10}}>⭐ Süper</span>
          <span style={{color:th.text5,fontSize:10}}>·</span>
          <span style={{color:th.text5,fontSize:10}}>♥ Beğen</span>
        </div>
      </div>

      {/* Active chats */}
      {chatMatches.length>0&&(
        <div style={{flexShrink:0,borderTop:`1px solid ${th.border}`,padding:"10px 16px 10px"}}>
          <div style={{color:th.text4,fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:8}}>SOHBETLER</div>
          <div style={{display:"flex",gap:10,overflowX:"auto"}}>
            {chatMatches.map(m=>(
              <button key={m.id} onClick={()=>setActiveChat(m.chatId)} style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer"}}>
                <div style={{width:44,height:44,borderRadius:14,background:th.bg4,border:`2px solid ${m.confirmed?"#4ade80":th.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{m.team.logo}</div>
                <span style={{color:th.text4,fontSize:9,maxWidth:44,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.team.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
