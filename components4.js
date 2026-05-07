
// ── PROFILE TAB ───────────────────────────────────────────────────────
function ProfileTab({me,rnk,prog,nextRnk,setShowPrem,updateMe,toggleDay,th,dark,setDark}){
  const [editing,setEditing]=React.useState(false);
  const [editName,setEditName]=React.useState(me.name);
  const [editDesc,setEditDesc]=React.useState(me.desc||"");
  function save(){updateMe({name:editName.trim()||me.name,desc:editDesc.trim()});setEditing(false);}
  const wr=me.played>0?Math.round(me.wins/me.played*100):0;
  return (
    <div style={{flex:1,overflowY:"auto",background:th.bg}}>
      <div style={{padding:"14px 16px 0"}}>
        {/* Hero */}
        <div style={{background:th.hGrad,border:`1px solid ${th.hBord}`,borderRadius:22,padding:"20px",marginBottom:14,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle at 80% 20%, ${th.acc}12 0%, transparent 60%)`,pointerEvents:"none"}}/>
          <div style={{display:"flex",gap:14,alignItems:"center",position:"relative"}}>
            <div style={{fontSize:52,width:70,height:70,borderRadius:18,background:th.bg4,border:`1px solid ${th.hBord}`,display:"flex",alignItems:"center",justifyContent:"center"}}>{me.logo}</div>
            <div style={{flex:1}}>
              {editing?(
                <input value={editName} onChange={e=>setEditName(e.target.value)} style={{...IStyle(th),padding:"8px 12px",fontSize:16,marginBottom:6}}/>
              ):(
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:24,color:th.text,letterSpacing:1,marginBottom:2}}>{me.name}</div>
              )}
              <div style={{color:th.text4,fontSize:12}}>📍 {me.city} · {me.district}</div>
              <div style={{display:"flex",gap:6,marginTop:6,flexWrap:"wrap"}}>
                <span style={{padding:"2px 8px",borderRadius:20,border:`1px solid ${rnk.color}`,color:rnk.color,fontSize:11}}>{rnk.icon} {rnk.label}</span>
                {me.isPremium&&<span style={{padding:"2px 8px",borderRadius:20,background:"rgba(245,242,52,.15)",border:"1px solid rgba(245,242,52,.4)",color:th.acc,fontSize:11}}>⚡ PRO</span>}
              </div>
            </div>
            <button onClick={()=>{if(editing)save();else setEditing(true);}} style={{padding:"8px 14px",borderRadius:10,border:`1px solid ${th.border}`,background:th.bg4,color:th.text3,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>
              {editing?"Kaydet":"Düzenle"}
            </button>
          </div>
          {editing&&<>
            <div style={{color:th.text4,fontSize:10,letterSpacing:1.5,fontWeight:700,margin:"12px 0 6px"}}>TAKIM TANITIMI</div>
            <textarea value={editDesc} onChange={e=>setEditDesc(e.target.value)} rows={2} maxLength={200} style={{...IStyle(th),resize:"none",lineHeight:1.5}}/>
          </>}
          {!editing&&me.desc&&<div style={{color:th.text3,fontSize:12,lineHeight:1.6,marginTop:10,fontStyle:"italic",position:"relative"}}>"{me.desc}"</div>}
          <div style={{marginTop:14}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
              <span style={{color:th.text4,fontSize:10}}>{me.points} PUAN</span>
              {nextRnk&&<span style={{color:th.text4,fontSize:10}}>→ {nextRnk.label} ({nextRnk.min})</span>}
            </div>
            <div style={{height:4,background:th.border,borderRadius:2,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${prog}%`,background:`linear-gradient(90deg,${th.acc},${dark?"#fff":"#222"})`,borderRadius:2}}/>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,marginBottom:14,overflow:"hidden"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
            {[["G",me.wins,"#4ade80"],["B",me.draws,th.text3],["M",me.losses,"#f87171"],["Oran",`%${wr}`,th.acc]].map(([l,v,c],i)=>(
              <div key={l} style={{padding:"14px 8px",textAlign:"center",borderRight:i<3?`1px solid ${th.border}`:""}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:24,color:c}}>{v}</div>
                <div style={{color:th.text4,fontSize:10,letterSpacing:1,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,padding:"16px",marginBottom:14}}>
          <SecTit th={th}>MÜSAİTLİK</SecTit>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {DAYS.map(d=>{const active=me.avail?.includes(d);return(
              <button key={d} onClick={()=>toggleDay(d)} style={{padding:"7px 14px",borderRadius:20,border:`1px solid ${active?th.acc:th.border2}`,color:active?th.acc:th.text4,fontSize:12,fontWeight:active?700:400,background:active?`${th.acc}12`:"transparent",cursor:"pointer",fontFamily:"inherit",transition:"all .18s"}}>{d}</button>
            );})}
          </div>
        </div>

        {/* Settings */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,padding:"16px",marginBottom:14}}>
          <SecTit th={th}>AYARLAR</SecTit>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${th.border}`}}>
            <span style={{color:th.text2,fontSize:14}}>🌙 Karanlık Mod</span>
            <button onClick={()=>setDark(d=>!d)} style={{width:46,height:26,borderRadius:13,border:"none",background:dark?th.acc:"#333",cursor:"pointer",position:"relative",transition:"background .3s"}}>
              <div style={{position:"absolute",top:3,left:dark?22:3,width:20,height:20,borderRadius:10,background:dark?"#000":"#888",transition:"left .3s"}}/>
            </button>
          </div>
          {!me.isPremium&&(
            <button onClick={()=>setShowPrem(true)} style={{width:"100%",marginTop:12,padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#F5F234,#FFD700)",color:"#000",fontSize:14,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>
              ⚡ Premium'a Geç — ₺49/ay
            </button>
          )}
        </div>
        <div style={{height:20}}/>
      </div>
    </div>
  );
}

// ── STATUS BADGE ──────────────────────────────────────────────────────
function StatusBadge({status,color}){
  const cfg={"Kayıt Açık":{bg:"rgba(74,222,128,.12)",border:"rgba(74,222,128,.4)",c:"#4ade80",dot:true},"Yakında":{bg:"rgba(251,191,36,.1)",border:"rgba(251,191,36,.4)",c:"#fbbf24",dot:false},"Özel Davet":{bg:"rgba(167,139,250,.12)",border:"rgba(167,139,250,.4)",c:"#a78bfa",dot:false},"Çok Yakında":{bg:"rgba(248,113,113,.1)",border:"rgba(248,113,113,.4)",c:"#f87171",dot:false}};
  const s=cfg[status]||{bg:"transparent",border:"#333",c:"#888",dot:false};
  return <span style={{padding:"3px 9px",borderRadius:20,background:s.bg,border:`1px solid ${s.border}`,color:s.c,fontSize:10,fontWeight:700,display:"inline-flex",alignItems:"center",gap:4}}>{s.dot&&<span style={{width:5,height:5,borderRadius:"50%",background:s.c,animation:"pulse 1.5s infinite"}}/>}{status}</span>;
}

// ── TOURNAMENTS TAB ───────────────────────────────────────────────────
function TournamentsTab({me,rnk,th,dark}){
  const [selected,setSelected]=React.useState(null);
  const myRankIdx=rankIndex(rnk.label);
  if(selected)return <TournamentDetail t={selected} me={me} myRankIdx={myRankIdx} th={th} dark={dark} onBack={()=>setSelected(null)}/>;
  return (
    <div style={{flex:1,overflowY:"auto",padding:"14px 14px 28px"}}>
      <div style={{background:dark?`linear-gradient(135deg,${rnk.color}18,transparent)`:`linear-gradient(135deg,${rnk.color}22,transparent)`,border:`1px solid ${rnk.color}44`,borderRadius:16,padding:"12px 16px",marginBottom:18,display:"flex",alignItems:"center",gap:12}}>
        <div style={{fontSize:32}}>{rnk.icon}</div>
        <div style={{flex:1}}>
          <div style={{color:rnk.color,fontWeight:800,fontSize:14}}>{rnk.label} Seviyesin</div>
          <div style={{color:th.text4,fontSize:11,marginTop:2}}>{me.points} puan · Uygun turnuvalar aşağıda</div>
        </div>
        <div style={{background:rnk.color,color:"#000",padding:"5px 10px",borderRadius:10,fontSize:10,fontWeight:900}}>{TOURNAMENTS.filter(t=>rankIndex(t.rankReq)<=myRankIdx).length} UYGUN</div>
      </div>
      {TOURNAMENTS.map((t,i)=>{
        const locked=rankIndex(t.rankReq)>myRankIdx;
        const reqRank=RANKS.find(r=>r.label===t.rankReq);
        const filled=t.participants.length/t.maxParticipants;
        return (
          <div key={t.id} onClick={()=>setSelected(t)} style={{marginBottom:12,borderRadius:20,overflow:"hidden",border:`1.5px solid ${locked?"#1c1c1c":t.color+"55"}`,cursor:"pointer",animation:"fadeUp .35s ease both",animationDelay:`${i*.07}s`,position:"relative"}}>
            <div style={{background:dark?`linear-gradient(135deg,${t.grad[0]},${t.grad[1]})`:"#fff",padding:"16px 16px 12px",position:"relative",overflow:"hidden",opacity:locked?0.6:1}}>
              <div style={{position:"absolute",top:-10,right:-10,fontSize:70,opacity:.06}}>{t.icon}</div>
              <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                <div style={{width:52,height:52,borderRadius:14,background:`${t.glow}.15)`,border:`1.5px solid ${t.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:locked?22:26,flexShrink:0}}>{locked?"🔒":t.icon}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:19,color:locked?"#555":t.color,letterSpacing:1.5,lineHeight:1}}>{t.name}</div>
                  <div style={{color:th.text4,fontSize:11,marginTop:3}}>{t.subtitle}</div>
                  <div style={{display:"flex",gap:6,marginTop:8,flexWrap:"wrap"}}>
                    {locked?<span style={{padding:"3px 9px",borderRadius:20,background:"rgba(248,113,113,.1)",border:"1px solid rgba(248,113,113,.3)",color:"#f87171",fontSize:10,fontWeight:700}}>🔒 {reqRank?.icon} {reqRank?.label} Gerekli</span>:<StatusBadge status={t.status} color={t.color}/>}
                    <span style={{padding:"3px 9px",borderRadius:20,border:`1px solid ${th.border}`,color:th.text4,fontSize:10}}>🗓 {t.startDate}</span>
                  </div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:locked?"#444":t.color,letterSpacing:1}}>{t.prize}</div>
                  <div style={{color:th.text5,fontSize:9,marginTop:1}}>ÖDÜL</div>
                </div>
              </div>
              {!locked&&<div style={{marginTop:12}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{color:th.text4,fontSize:10}}>Katılımcı: {t.participants.length}/{t.maxParticipants}</span>
                  <span style={{color:filled>=0.8?"#f97316":t.color,fontSize:10,fontWeight:700}}>{filled>=1?"✅ Dolu":filled>=0.8?"⚠️ Dolmak üzere":`${t.maxParticipants-t.participants.length} yer kaldı`}</span>
                </div>
                <div style={{height:4,background:"rgba(255,255,255,.08)",borderRadius:2,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${Math.min(100,filled*100)}%`,background:`linear-gradient(90deg,${t.color},${t.color}88)`,borderRadius:2}}/>
                </div>
              </div>}
              {locked&&<div style={{marginTop:12}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{color:"#555",fontSize:10}}>İlerleme: {me.points}/{reqRank?.min} puan</span>
                  <span style={{color:"#f87171",fontSize:10,fontWeight:700}}>{(reqRank?.min||0)-me.points} puan eksik</span>
                </div>
                <div style={{height:4,background:"#1a1a1a",borderRadius:2,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${Math.min(100,(me.points/(reqRank?.min||1))*100)}%`,background:"linear-gradient(90deg,#f97316,#f87171)",borderRadius:2}}/>
                </div>
              </div>}
            </div>
            <div style={{background:dark?"#080808":"#f8f8f4",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:`1px solid ${dark?"#111":"#eee"}`}}>
              <div style={{display:"flex"}}>
                {t.participants.slice(0,5).map((p,pi)=>(
                  <div key={pi} style={{width:26,height:26,borderRadius:8,background:dark?"#1a1a1a":"#fff",border:`1px solid ${t.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,marginLeft:pi>0?-6:0}}>{p.logo}</div>
                ))}
                {t.participants.length===0&&<span style={{color:th.text5,fontSize:11}}>Henüz kayıt yok</span>}
              </div>
              <div style={{color:locked?"#555":t.color,fontSize:11,fontWeight:700}}>{locked?`${(reqRank?.min||0)-me.points} puan eksik →`:"Detaylar →"}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── TOURNAMENT DETAIL ─────────────────────────────────────────────────
function TournamentDetail({t,me,myRankIdx,th,dark,onBack}){
  const [regDone,setRegDone]=React.useState(false);
  const locked=rankIndex(t.rankReq)>myRankIdx;
  const alreadyIn=t.participants.some(p=>p.name===me.name);
  const canReg=!locked&&!alreadyIn&&t.status==="Kayıt Açık";
  return (
    <div style={{flex:1,overflowY:"auto"}}>
      <div style={{background:dark?`linear-gradient(160deg,${t.grad[0]},${t.grad[1]})`:"#fff",padding:"20px 16px 16px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle at 70% 30%, ${t.glow}.12) 0%, transparent 60%)`,pointerEvents:"none"}}/>
        <button onClick={onBack} style={{background:"none",border:"none",color:t.color,fontSize:20,cursor:"pointer",marginBottom:16,padding:0,position:"relative"}}>← Geri</button>
        <div style={{textAlign:"center",position:"relative"}}>
          <div style={{fontSize:64,marginBottom:10,animation:"heartbeat 2s ease infinite"}}>{t.icon}</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:t.color,letterSpacing:2,lineHeight:1,marginBottom:4}}>{t.name}</div>
          <div style={{color:th.text4,fontSize:13,marginBottom:12}}>{t.subtitle}</div>
          <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
            <StatusBadge status={t.status} color={t.color}/>
            <span style={{padding:"3px 9px",borderRadius:20,border:`1px solid ${th.border}`,color:th.text4,fontSize:10}}>{t.format}</span>
            <span style={{padding:"3px 9px",borderRadius:20,border:`1px solid ${th.border}`,color:th.text4,fontSize:10}}>🗓 {t.startDate}</span>
          </div>
        </div>
      </div>
      <div style={{padding:"16px 16px 40px"}}>
        {/* Prize */}
        <div style={{background:dark?`${t.glow}.08)`:"#fffbe6",border:`1px solid ${t.color}33`,borderRadius:18,padding:"16px",marginBottom:14,textAlign:"center"}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:44,color:t.color,letterSpacing:2}}>{t.prize}</div>
          <div style={{color:th.text4,fontSize:12,marginTop:4}}>TOPLAM ÖDÜL HAVUZU</div>
          <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>
            {t.prizes.map((p,i)=><span key={i} style={{padding:"4px 10px",borderRadius:20,background:`${t.color}18`,border:`1px solid ${t.color}44`,color:t.color,fontSize:11,fontWeight:700}}>{p}</span>)}
          </div>
        </div>
        {/* Desc */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,padding:"16px",marginBottom:14}}>
          <div style={{color:th.text2,fontSize:13,lineHeight:1.7}}>{t.desc}</div>
        </div>
        {/* Schedule */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,padding:"16px",marginBottom:14}}>
          <SecTit th={th}>TAKVİM</SecTit>
          {t.schedule.map((s,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:i<t.schedule.length-1?`1px solid ${th.border}`:""}}>
              <div style={{width:8,height:8,borderRadius:4,background:t.color,flexShrink:0}}/>
              <div style={{flex:1,color:th.text,fontSize:13,fontWeight:600}}>{s.round}</div>
              <div style={{color:th.text4,fontSize:12}}>{s.date} · {s.time}</div>
            </div>
          ))}
        </div>
        {/* Participants */}
        <div style={{background:th.card,border:`1px solid ${th.border}`,borderRadius:18,padding:"16px",marginBottom:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <SecTit th={th}>KATILIMCILAR</SecTit>
            <span style={{color:t.color,fontSize:11,fontWeight:700}}>{t.participants.length}/{t.maxParticipants}</span>
          </div>
          <div style={{height:4,background:th.border,borderRadius:2,overflow:"hidden",marginBottom:12}}>
            <div style={{height:"100%",width:`${Math.min(100,(t.participants.length/t.maxParticipants)*100)}%`,background:`linear-gradient(90deg,${t.color},${t.color}88)`,borderRadius:2}}/>
          </div>
          {t.participants.map((p,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<t.participants.length-1?`1px solid ${th.border}`:""}}>
              <div style={{width:34,height:34,borderRadius:10,background:th.bg4,border:`1px solid ${t.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{p.logo}</div>
              <div style={{flex:1,color:th.text,fontSize:13,fontWeight:600}}>{p.name}</div>
              <div style={{color:th.text4,fontSize:11}}>{p.pts} puan</div>
            </div>
          ))}
          {t.participants.length===0&&<div style={{textAlign:"center",color:th.text4,fontSize:13,padding:"12px 0"}}>Henüz kayıt yok</div>}
        </div>
        {/* Register */}
        {!locked&&!regDone&&!alreadyIn&&(
          <button onClick={()=>{if(canReg)setRegDone(true);}} style={{width:"100%",padding:"16px",borderRadius:16,border:"none",background:canReg?`linear-gradient(135deg,${t.color},${t.color}aa)`:"#222",color:canReg?"#000":th.text4,fontSize:15,fontWeight:800,cursor:canReg?"pointer":"not-allowed",fontFamily:"inherit",marginBottom:8}}>
            {canReg?"⚽ Kayıt Ol":"Kayıt Kapalı"}
          </button>
        )}
        {(regDone||alreadyIn)&&<div style={{width:"100%",padding:"16px",borderRadius:16,background:`${t.color}18`,border:`1px solid ${t.color}44`,color:t.color,fontSize:14,fontWeight:700,textAlign:"center"}}>✅ Kayıt Tamamlandı!</div>}
        {locked&&<div style={{width:"100%",padding:"16px",borderRadius:16,background:"#111",border:"1px solid #222",color:"#555",fontSize:14,fontWeight:700,textAlign:"center"}}>🔒 Bu turnuvaya katılmak için {t.rankReq} seviyesi gerekli</div>}
      </div>
    </div>
  );
}
