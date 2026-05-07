
// ── HOME TAB ──────────────────────────────────────────────────────────
function HomeTab({me,rnk,prog,nextRnk,matches,setTab,setActiveChat,setShowPrem,toggleDay,th,dark,tourneyRank,tourneyQualified,allBoard}){
  const [infoIdx,setInfoIdx]=React.useState(0);
  const [homeTab,setHomeTab]=React.useState("main");
  const wr=me.played>0?Math.round(me.wins/me.played*100):0;
  const upcoming=matches.filter(m=>m.confirmed&&!m.result);
  const pending=matches.filter(m=>!m.confirmed);
  const card=INFO_CARDS[infoIdx];
  const top8=allBoard.slice(0,8);
  const medals=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣"];
  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",background:th.bg}}>
      <div style={{display:"flex",borderBottom:`1px solid ${th.border}`,flexShrink:0,background:th.bg}}>
        {[["main","🏠 Ana Sayfa"],["tournaments","🏆 Turnuvalar"]].map(([key,label])=>(
          <button key={key} onClick={()=>setHomeTab(key)} style={{flex:1,padding:"13px 8px",background:"none",border:"none",borderBottom:`2.5px solid ${homeTab===key?th.acc:"transparent"}`,color:homeTab===key?th.acc:th.text4,fontSize:12,fontWeight:homeTab===key?800:500,cursor:"pointer",fontFamily:"inherit",letterSpacing:.5,transition:"all .2s"}}>{label}</button>
        ))}
      </div>
      {homeTab==="tournaments"&&<TournamentsTab me={me} rnk={rnk} th={th} dark={dark}/>}
      {homeTab==="main"&&<div style={{flex:1,overflowY:"auto"}}>
        {/* Hero card */}
        <div style={{margin:"14px 14px 0",background:th.hGrad,borderRadius:22,border:`1px solid ${th.hBord}`,overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle at 80% 20%, ${th.acc}18 0%, transparent 60%)`,pointerEvents:"none"}}/>
          <div style={{padding:"18px 18px 14px",position:"relative"}}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{width:70,height:70,borderRadius:18,background:th.bg4,border:`1px solid ${th.hBord}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,flexShrink:0}}>{me.logo}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:th.text,letterSpacing:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{me.name}</div>
                  {me.isPremium&&<span style={{background:"rgba(245,242,52,.15)",border:"1px solid rgba(245,242,52,.4)",borderRadius:6,padding:"1px 6px",color:th.acc,fontSize:10,fontWeight:700}}>PRO</span>}
                </div>
                <div style={{color:th.text3,fontSize:12,marginBottom:8}}>📍 {me.city} · {me.district}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                  <span style={{padding:"3px 10px",borderRadius:20,border:`1px solid ${th.border}`,color:th.text3,fontSize:11}}>{me.level}</span>
                  <span style={{padding:"3px 10px",borderRadius:20,border:`1px solid ${th.border}`,color:th.text3,fontSize:11}}>{me.players} kişi</span>
                  <span style={{padding:"3px 10px",borderRadius:20,border:`1px solid ${rnk.color}`,color:rnk.color,fontSize:11}}>{rnk.icon} {rnk.label}</span>
                </div>
              </div>
            </div>
            <div style={{marginTop:13}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{color:th.text4,fontSize:10,letterSpacing:1}}>{me.points} PUAN</span>
                {nextRnk&&<span style={{color:th.text4,fontSize:10}}>→ {nextRnk.label} ({nextRnk.min})</span>}
              </div>
              <div style={{height:4,background:th.border,borderRadius:2,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${prog}%`,background:`linear-gradient(90deg,${th.acc},${dark?"#fff":"#222"})`,borderRadius:2,transition:"width .6s"}}/>
              </div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderTop:`1px solid ${th.hBord}`}}>
            {[["G",me.wins,"#4ade80"],["B",me.draws,th.text3],["M",me.losses,"#f87171"],["Oran",`%${wr}`,th.acc]].map(([l,v,c])=>(
              <div key={l} style={{padding:"11px 8px",textAlign:"center",borderRight:`1px solid ${th.hBord}`}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:21,color:c,letterSpacing:1}}>{v}</div>
                <div style={{color:th.text4,fontSize:9,letterSpacing:2,marginTop:1}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Info card */}
        <div style={{padding:"14px 14px 0"}}>
          <div style={{background:dark?"rgba(0,0,0,.4)":"rgba(255,255,255,.8)",border:`1px solid ${card.color}44`,borderRadius:18,padding:"14px 16px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-16,right:-10,fontSize:60,opacity:.07,pointerEvents:"none"}}>{card.icon}</div>
            <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8}}>
              <span style={{fontSize:20,flexShrink:0}}>{card.icon}</span>
              <div style={{color:card.color,fontSize:11,fontWeight:800,letterSpacing:1,textTransform:"uppercase",lineHeight:1.4}}>{card.title}</div>
            </div>
            <div style={{color:th.text2,fontSize:12,lineHeight:1.75}}>{card.body}</div>
            <div style={{display:"flex",gap:5,marginTop:12,alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",gap:5}}>
                {INFO_CARDS.map((_,i)=><div key={i} onClick={()=>setInfoIdx(i)} style={{width:i===infoIdx?18:6,height:6,borderRadius:3,background:i===infoIdx?card.color:th.border3,cursor:"pointer",transition:"all .25s"}}/>)}
              </div>
              <button onClick={()=>setInfoIdx(i=>(i+1)%INFO_CARDS.length)} style={{background:"transparent",border:`1px solid ${card.color}66`,borderRadius:8,padding:"4px 10px",color:card.color,fontSize:11,fontWeight:700,cursor:"pointer"}}>Sonraki →</button>
            </div>
          </div>
        </div>
        {/* Upcoming */}
        {upcoming.length>0&&<div style={{padding:"14px 14px 0"}}>
          <SecTit th={th}>YAKLAŞAN MAÇLAR</SecTit>
          {upcoming.map(m=>(
            <div key={m.id} onClick={()=>{setActiveChat(m.chatId);setTab("discover");}} style={{background:dark?"#0e1a0e":"#f0fff4",border:`1px solid ${dark?"#1a3a1a":"#bbf7d0"}`,borderRadius:16,padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"center",cursor:"pointer"}}>
              <div style={{fontSize:26}}>{m.team.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:th.text,fontWeight:700,fontSize:14}}>{m.team.name}</div>
                {m.scheduledTime&&<div style={{color:"#4ade80",fontSize:12,marginTop:2}}>🗓 {new Date(m.scheduledTime).toLocaleString("tr-TR",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</div>}
              </div>
              <span style={{color:"#4ade80"}}>›</span>
            </div>
          ))}
        </div>}
        {/* Pending */}
        {pending.length>0&&<div style={{padding:"14px 14px 0"}}>
          <SecTit th={th}>ONAY BEKLİYOR</SecTit>
          {pending.map(m=>(
            <div key={m.id} onClick={()=>{setActiveChat(m.chatId);setTab("discover");}} style={{background:dark?"#1a0e0e":"#fff8f5",border:`1px solid ${dark?"#2a1a1a":"#fecaca"}`,borderRadius:16,padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"center",cursor:"pointer"}}>
              <div style={{fontSize:26}}>{m.team.logo}</div>
              <div style={{flex:1}}>
                <div style={{color:th.text,fontWeight:600,fontSize:14}}>{m.team.name}</div>
                <div style={{color:"#f87171",fontSize:12,marginTop:2}}>💬 Maç daveti bekliyor</div>
              </div>
              <div style={{width:8,height:8,borderRadius:4,background:th.acc,animation:"pulse 1.5s infinite"}}/>
            </div>
          ))}
        </div>}
        {/* Empty */}
        {upcoming.length===0&&pending.length===0&&<div style={{padding:"14px 14px 0"}}>
          <div style={{background:dark?"#0a0a0a":"#f8f8f4",border:`1px solid ${th.border}`,borderRadius:18,padding:"24px",textAlign:"center"}}>
            <div style={{fontSize:36,marginBottom:12}}>🔍</div>
            <div style={{color:th.text2,fontWeight:700,fontSize:15,marginBottom:8}}>Henüz eşleşme yok</div>
            <div style={{color:th.text4,fontSize:12,lineHeight:1.7,marginBottom:16}}>Keşfet ekranına geç ve rakip takımları swipe'la!</div>
            <button onClick={()=>setTab("discover")} style={{padding:"10px 24px",borderRadius:12,border:"none",background:th.acc,color:th.accT,fontSize:13,fontWeight:700,cursor:"pointer"}}>⚽ Keşfetmeye Başla</button>
          </div>
        </div>}
        {/* Availability */}
        <div style={{padding:"14px 14px 0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <SecTit th={th}>MÜSAİTLİK</SecTit>
            <span style={{color:th.text4,fontSize:10}}>Tıkla düzenle</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {DAYS.map(d=>{const active=me.avail?.includes(d);return(
              <button key={d} onClick={()=>toggleDay(d)} style={{padding:"7px 14px",borderRadius:20,border:`1px solid ${active?th.acc:th.border2}`,color:active?th.acc:th.text4,fontSize:12,fontWeight:active?700:400,background:active?`${th.acc}15`:"transparent",cursor:"pointer",fontFamily:"inherit",transition:"all .18s"}}>{d}</button>
            );})}
          </div>
        </div>
        {/* Tournament widget */}
        <div style={{padding:"14px 14px 0"}}>
          <div style={{background:dark?"linear-gradient(135deg,#0d0d00,#1a1500)":"linear-gradient(135deg,#fffbeb,#fff8d0)",border:`1.5px solid ${th.acc}`,borderRadius:20,overflow:"hidden"}}>
            <div style={{padding:"14px 16px 0",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:46,height:46,borderRadius:14,background:"rgba(245,242,52,.12)",border:"1px solid rgba(245,242,52,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🏆</div>
              <div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:th.acc,letterSpacing:2,lineHeight:1}}>FUTMATCH TURNUVASI</div>
                <div style={{color:th.text4,fontSize:10,letterSpacing:1,marginTop:2}}>Sezon Sonu · İlk 8 Takım</div>
              </div>
            </div>
            <div style={{padding:"10px 14px"}}>
              <div style={{padding:"10px 12px",borderRadius:12,background:tourneyQualified?"rgba(74,222,128,.1)":"rgba(248,113,113,.08)",border:`1px solid ${tourneyQualified?"rgba(74,222,128,.35)":"rgba(248,113,113,.3)"}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:18}}>{tourneyQualified?"✅":"⏳"}</span>
                  <div>
                    <div style={{color:tourneyQualified?"#4ade80":"#f87171",fontSize:12,fontWeight:800}}>{tourneyQualified?`Katılım hakkı kazandın — #${tourneyRank}. sıradasın`:`Şu an #${tourneyRank}. sıradasın — maç kazan!`}</div>
                    <div style={{color:th.text4,fontSize:10,marginTop:2}}>İlk 8 turnuvaya katılır</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{padding:"0 16px 4px"}}>
              <div style={{color:th.text4,fontSize:10,letterSpacing:1.5,fontWeight:700,marginBottom:8}}>MEVCUT TABLO</div>
              {top8.map((t,i)=>{const isMe=t.id===me.id;const tRnk=getRank(t.points);return(
                <div key={t.id||i} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 6px",borderBottom:i<7?`1px solid ${th.border}`:"",background:isMe?`${th.acc}08`:"transparent",borderRadius:isMe?8:0}}>
                  <span style={{fontSize:13,width:20,textAlign:"center"}}>{medals[i]}</span>
                  <span style={{fontSize:17}}>{t.logo}</span>
                  <span style={{flex:1,color:isMe?th.acc:th.text,fontSize:12,fontWeight:isMe?800:600}}>{t.name||"Takımım"}{isMe?" (Sen)":""}</span>
                  <span style={{color:tRnk.color,fontSize:10}}>{tRnk.icon}</span>
                  <span style={{color:th.text3,fontSize:12,fontWeight:700,minWidth:30,textAlign:"right"}}>{t.points}</span>
                </div>
              );})}
            </div>
            <div style={{padding:"12px 16px 14px",display:"flex",gap:8}}>
              {[["⚽","8 Takım","Eleme"],["🥊","Çeyrek","4 Maç"],["🏅","Final","Tek Maç"]].map(([ic,t,s])=>(
                <div key={t} style={{flex:1,textAlign:"center",background:dark?"rgba(255,255,255,.03)":"rgba(0,0,0,.03)",borderRadius:10,padding:"8px 4px",border:`1px solid ${th.border}`}}>
                  <div style={{fontSize:17,marginBottom:4}}>{ic}</div>
                  <div style={{color:th.text,fontSize:10,fontWeight:700}}>{t}</div>
                  <div style={{color:th.text4,fontSize:9,marginTop:2}}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{padding:"14px 14px 28px"}}>
          {!me.isPremium&&<button onClick={()=>setShowPrem(true)} style={{width:"100%",padding:"13px",borderRadius:14,border:`1px solid ${th.border3}`,background:"transparent",color:th.text2,fontSize:13,fontWeight:600,cursor:"pointer"}}>⚡ Premium'a Geç</button>}
        </div>
      </div>}
    </div>
  );
}
