
const GEO = {
  "İstanbul":["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Fatih","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sarıyer","Şişli","Ümraniye","Üsküdar","Zeytinburnu"],
  "Ankara":["Altındağ","Çankaya","Etimesgut","Gölbaşı","Keçiören","Mamak","Pursaklar","Sincan","Yenimahalle"],
  "İzmir":["Balçova","Bayraklı","Bornova","Buca","Çiğli","Gaziemir","Karabağlar","Karşıyaka","Konak","Narlıdere"],
  "Bursa":["Gemlik","Gürsu","İnegöl","Nilüfer","Osmangazi","Yıldırım"],
  "Antalya":["Alanya","Kepez","Konyaaltı","Manavgat","Muratpaşa","Serik"],
  "Trabzon":["Akçaabat","Araklı","Of","Ortahisar","Sürmene","Yomra"],
};
const CITIES = Object.keys(GEO);
const DAYS = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
const LEVELS = ["Amatör","Orta","İleri","Profesyonel"];
const LOGOS = ["⚽","🦅","🌊","🦁","⚡","🔥","🐺","🐉","🦊","🦈","☀️","🏆","🌟","💥","🎯","🛡️","⚔️","🦋","🌪️","🐯"];

const TEAMS = [
  {id:1,name:"Kartal FC",city:"İstanbul",district:"Kadıköy",logo:"🦅",level:"Orta",players:8,wins:12,losses:3,draws:2,points:380,played:17,rating:4.7,avail:["Cumartesi","Pazar"],desc:"Kadıköy'ün köklü takımı. 2018'den beri her hafta sonu sahada. Fair-play önceliğimiz."},
  {id:2,name:"Boğaz United",city:"İstanbul",district:"Beşiktaş",logo:"🌊",level:"İleri",players:10,wins:20,losses:2,draws:1,points:720,played:23,rating:4.9,avail:["Çarşamba","Cuma","Cumartesi"],desc:"Profesyonel kadro, ciddi maçlar arıyoruz."},
  {id:3,name:"Anadolu Lions",city:"Ankara",district:"Çankaya",logo:"🦁",level:"Amatör",players:7,wins:5,losses:8,draws:3,points:180,played:16,rating:4.2,avail:["Salı","Perşembe","Pazar"],desc:"Gelişmeye açık, dostane bir ekibiz."},
  {id:4,name:"Ege Fırtınası",city:"İzmir",district:"Karşıyaka",logo:"⚡",level:"Orta",players:9,wins:9,losses:5,draws:4,points:310,played:18,rating:4.5,avail:["Cumartesi","Pazar"],desc:"İzmir'in en aktif halı saha camiasından."},
  {id:5,name:"Bosphorus Boys",city:"İstanbul",district:"Şişli",logo:"🔥",level:"Orta",players:8,wins:7,losses:6,draws:5,points:250,played:18,rating:4.3,avail:["Pazartesi","Çarşamba","Cuma"],desc:"Hafta içi aktif, 5v5 veya 6v6 formatında maç arıyoruz!"},
  {id:6,name:"Karadeniz SC",city:"Trabzon",district:"Ortahisar",logo:"🐺",level:"İleri",players:11,wins:18,losses:3,draws:2,points:650,played:23,rating:4.8,avail:["Cuma","Cumartesi","Pazar"],desc:"Her maça hazır, rakip bekliyoruz."},
  {id:7,name:"Ege Panthers",city:"İzmir",district:"Bornova",logo:"🐉",level:"Profesyonel",players:12,wins:25,losses:1,draws:2,points:950,played:28,rating:5.0,avail:["Salı","Perşembe","Cumartesi"],desc:"Ege'nin şampiyonu. Gerçek rakip arıyoruz."},
  {id:8,name:"Ankara Wolves",city:"Ankara",district:"Çankaya",logo:"🦊",level:"Orta",players:9,wins:8,losses:7,draws:3,points:295,played:18,rating:4.4,avail:["Pazartesi","Çarşamba","Pazar"],desc:"Başkentin en rekabetçi takımlarından."},
  {id:9,name:"Bursa Kartalları",city:"Bursa",district:"Osmangazi",logo:"🦈",level:"Orta",players:9,wins:10,losses:6,draws:3,points:330,played:19,rating:4.4,avail:["Cumartesi","Pazar"],desc:"Bursa'nın güçlü temsilcisi."},
  {id:10,name:"Antalya Güneşi",city:"Antalya",district:"Muratpaşa",logo:"☀️",level:"Amatör",players:7,wins:4,losses:9,draws:2,points:150,played:15,rating:3.9,avail:["Pazar"],desc:"Yeni kurulmuş bir ekibiz. Keyifli maçlar arıyoruz."},
];

const RANKS = [
  {min:0,label:"Bronz",icon:"🥉",color:"#CD7F32"},
  {min:200,label:"Gümüş",icon:"🥈",color:"#C0C0C0"},
  {min:500,label:"Altın",icon:"🥇",color:"#FFD700"},
  {min:1000,label:"Platin",icon:"💎",color:"#7FFFD4"},
  {min:2000,label:"Elmas",icon:"👑",color:"#B39DDB"},
];

const TOURNAMENTS = [
  {id:"bronz",name:"FutMatch Bronz Ligi",subtitle:"Başlangıç Turnuvası",icon:"🥉",color:"#CD7F32",glow:"rgba(205,127,50,",grad:["#1a0e00","#2a1800"],rankReq:"Bronz",minPts:0,prize:"₺5.000",format:"8 Takım · Eleme",teams:8,status:"Kayıt Açık",startDate:"15 Haz 2025",deadline:"10 Haz 2025",desc:"Halı saha dünyasına ilk adımını at. Bronz seviyedeki tüm takımlara açık bu turnuva rekabetçi oyun için mükemmel bir başlangıç noktası.",prizes:["₺5.000","Bronz Kupa","Rozet"],participants:[{logo:"🦁",name:"Anadolu Lions",pts:180},{logo:"☀️",name:"Antalya Güneşi",pts:150}],maxParticipants:8,schedule:[{round:"Çeyrek Final",date:"15 Haz",time:"14:00"},{round:"Yarı Final",date:"22 Haz",time:"15:00"},{round:"Final",date:"29 Haz",time:"17:00"}]},
  {id:"gumus",name:"FutMatch Gümüş Cup",subtitle:"Orta Seviye Şampiyonası",icon:"🥈",color:"#C0C0C0",glow:"rgba(192,192,192,",grad:["#0e0e12","#1a1a22"],rankReq:"Gümüş",minPts:200,prize:"₺15.000",format:"16 Takım · Eleme",teams:16,status:"Kayıt Açık",startDate:"20 Haz 2025",deadline:"15 Haz 2025",desc:"Orta seviye takımlar için tasarlanmış bu turnuva rekabet seviyesini bir üst basamağa taşımak isteyenler için ideal platform.",prizes:["₺15.000","Gümüş Kupa","Özel Forma"],participants:[{logo:"🦅",name:"Kartal FC",pts:380},{logo:"⚡",name:"Ege Fırtınası",pts:310},{logo:"🔥",name:"Bosphorus Boys",pts:250},{logo:"🦊",name:"Ankara Wolves",pts:295},{logo:"🦈",name:"Bursa Kartalları",pts:330}],maxParticipants:16,schedule:[{round:"Grup Aşaması",date:"20 Haz",time:"10:00"},{round:"Son 8",date:"27 Haz",time:"14:00"},{round:"Yarı Final",date:"4 Tem",time:"15:00"},{round:"Final",date:"11 Tem",time:"17:00"}]},
  {id:"altin",name:"FutMatch Altın Şampiyonası",subtitle:"Elit Turnuva",icon:"🥇",color:"#FFD700",glow:"rgba(255,215,0,",grad:["#1a1400","#2a2000"],rankReq:"Altın",minPts:500,prize:"₺50.000",format:"16 Takım · Gruplar+Eleme",teams:16,status:"Yakında",startDate:"1 Tem 2025",deadline:"25 Haz 2025",desc:"Sadece Altın ve üzeri dereceye sahip takımlar başvurabilir. Türkiye'nin en prestijli halı saha turnuvası.",prizes:["₺50.000","Altın Kupa","Forma + Krampon"],participants:[{logo:"🌊",name:"Boğaz United",pts:720},{logo:"🐺",name:"Karadeniz SC",pts:650}],maxParticipants:16,schedule:[{round:"Grup Aşaması",date:"1 Tem",time:"10:00"},{round:"Son 8",date:"8 Tem",time:"14:00"},{round:"Yarı Final",date:"15 Tem",time:"15:00"},{round:"Final",date:"22 Tem",time:"18:00"}]},
  {id:"platin",name:"FutMatch Platin Elite",subtitle:"Şampiyonlar Turnuvası",icon:"💎",color:"#7FFFD4",glow:"rgba(127,255,212,",grad:["#001a14","#002a1e"],rankReq:"Platin",minPts:1000,prize:"₺150.000",format:"8 Takım · Özel Davet",teams:8,status:"Özel Davet",startDate:"15 Tem 2025",deadline:"10 Tem 2025",desc:"Sadece Platin seviye ve üzeri takımlar davet edilir. Türkiye'nin en iyi 8 halı saha takımının kapıştığı yılın en büyük organizasyonu.",prizes:["₺150.000","Platin Kupa","Profesyonel Kadro Desteği"],participants:[{logo:"🐉",name:"Ege Panthers",pts:950}],maxParticipants:8,schedule:[{round:"Yarı Final",date:"15 Tem",time:"15:00"},{round:"Final",date:"22 Tem",time:"18:00"}]},
  {id:"elmas",name:"FutMatch Grand Masters",subtitle:"Türkiye Şampiyonası",icon:"👑",color:"#B39DDB",glow:"rgba(179,157,219,",grad:["#0e0014","#1a0028"],rankReq:"Elmas",minPts:2000,prize:"₺500.000",format:"İnvitasyon Only",teams:4,status:"Çok Yakında",startDate:"1 Ağu 2025",deadline:"25 Tem 2025",desc:"Elmas seviyeye ulaşmış efsanevi takımların mücadelesi. Türkiye'nin en iyi 4 takımı tarihi bir final için buluşuyor.",prizes:["₺500.000","Şampiyona Kupası","Milli Takım Maçı Daveti"],participants:[],maxParticipants:4,schedule:[{round:"Yarı Final",date:"1 Ağu",time:"17:00"},{round:"Final",date:"8 Ağu",time:"19:00"}]},
];

const INFO_CARDS = [
  {icon:"📋",title:"Maç Sonucu Nasıl Kaydedilir?",color:"#60a5fa",body:"Maç bittikten sonra sohbet ekranında sonuç kartı otomatik açılır. Rakip kaptanla birlikte aynı sonucu işaretleyin — iki taraf da onaylarsa istatistikler güncellenir."},
  {icon:"⚖️",title:"İki Taraf Anlaşamazsa Ne Olur?",color:"#f97316",body:"Galibiyet/mağlubiyet oylamasında farklı seçim yapılırsa sonuç 'İtirazda' olarak işaretlenir. FutMatch hakemi incelemeye alır, fair-play puanınız etkilenebilir."},
  {icon:"🏆",title:"FutMatch Turnuvası Nedir?",color:"#F5F234",body:"Genel sıralamada ilk 8'e giren takımlar sezon sonu FutMatch Turnuvası'na katılım hakkı kazanır. Eleme usulü format, maç başı ödüller ve şampiyon kupası!"},
  {icon:"⚡",title:"Puan Nasıl Kazanılır?",color:"#a78bfa",body:"Eşleşme +35 · Süper beğeni +60 · Maç onayı +100 · Galibiyet +200 · Beraberlik +50 · Mağlubiyet +20. Aktif olmak seni sıralamada yukarı taşır!"},
];

const RANK_ORDER = ["Bronz","Gümüş","Altın","Platin","Elmas"];
function getRank(pts){let r=RANKS[0];for(const l of RANKS)if(pts>=l.min)r=l;return r;}
function rankIndex(label){return RANK_ORDER.indexOf(label);}
function mkTheme(dark){
  if(dark)return{bg:"#000",bg2:"#080808",bg4:"#141414",border:"#1c1c1c",border2:"#252525",border3:"#333",text:"#fff",text2:"#ccc",text3:"#999",text4:"#555",text5:"#2e2e2e",card:"#0d0d0d",nav:"#050505",inp:"#0d0d0d",acc:"#F5F234",accT:"#000",hGrad:"linear-gradient(135deg,#111 0%,#1a1a0a 50%,#111 100%)",hBord:"#2a2a1a"};
  return{bg:"#f4f3ee",bg2:"#eceae3",bg4:"#e8e6df",border:"#ddd",border2:"#ccc",border3:"#bbb",text:"#111",text2:"#333",text3:"#555",text4:"#888",text5:"#ccc",card:"#fff",nav:"#fff",inp:"#ede9e0",acc:"#1a1a1a",accT:"#fff",hGrad:"linear-gradient(135deg,#fff 0%,#f8f7ee 50%,#fff 100%)",hBord:"#e0ddd0"};
}
function IStyle(th){return{width:"100%",padding:"14px 16px",borderRadius:12,border:`1px solid ${th?th.border2:"#252525"}`,background:th?th.inp:"#0d0d0d",color:th?th.text:"#fff",fontSize:14,outline:"none",fontFamily:"inherit"};}
function SecTit({th,children}){return <div style={{color:th.text4,fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:10}}>{children}</div>;}

// ── SPLASH ────────────────────────────────────────────────────────────
function Splash(){
  return (
    <div style={{width:"100%",maxWidth:430,height:"100dvh",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 50% 50%, rgba(245,242,52,.07) 0%, transparent 70%)",pointerEvents:"none"}}/>
      <div style={{textAlign:"center",animation:"fadeUp .8s ease both"}}>
        <div style={{fontSize:66,marginBottom:8,animation:"heartbeat 1.5s ease infinite"}}>⚽</div>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:74,lineHeight:1,letterSpacing:6,color:"#fff"}}>FUT</div>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:74,lineHeight:1,letterSpacing:6,color:"#F5F234",marginTop:-4}}>MATCH</div>
        <div style={{width:60,height:2,background:"linear-gradient(90deg,transparent,#F5F234,transparent)",margin:"18px auto"}}/>
        <div style={{color:"#555",fontSize:11,letterSpacing:5,textTransform:"uppercase",fontWeight:600}}>Rakibini Bul · Sahaya Çık</div>
      </div>
      <div style={{position:"absolute",bottom:52,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8}}>
        {[0,1,2].map(i=><div key={i} style={{width:6,height:6,borderRadius:3,background:i===0?"#F5F234":"#333",animation:`pulse 1.4s ${i*.25}s infinite`}}/>)}
      </div>
    </div>
  );
}

// ── TOAST ─────────────────────────────────────────────────────────────
function Toast({msg,type,th}){
  const c = type==="success"?"#4ade80":type==="error"?"#f87171":"#F5F234";
  return (
    <div style={{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:999,background:th.card,border:`1px solid ${c}55`,borderRadius:12,padding:"10px 18px",color:th.text,fontSize:13,fontWeight:700,boxShadow:"0 8px 32px rgba(0,0,0,.4)",animation:"slideDown .3s ease",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:8}}>
      <span style={{color:c,fontSize:16}}>●</span>{msg}
    </div>
  );
}

// ── BOTTOM NAV ────────────────────────────────────────────────────────
function BotNav({tab,setTab,badge,th}){
  const items=[
    {k:"home",ic:"🏠",lb:"Ana Sayfa"},
    {k:"discover",ic:"⚽",lb:"Keşfet"},
    {k:"matches",ic:"📅",lb:"Maçlar"},
    {k:"leaderboard",ic:"🏆",lb:"Sıralama"},
    {k:"profile",ic:"👤",lb:"Profil"},
  ];
  return (
    <div style={{flexShrink:0,display:"flex",borderTop:`1px solid ${th.border}`,background:th.nav,paddingBottom:"env(safe-area-inset-bottom,0px)"}}>
      {items.map(({k,ic,lb})=>(
        <button key={k} onClick={()=>setTab(k)} style={{flex:1,padding:"10px 4px 8px",border:"none",background:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",position:"relative"}}>
          <span style={{fontSize:20,filter:tab===k?"none":"grayscale(1) opacity(.5)"}}>{ic}</span>
          <span style={{fontSize:9,color:tab===k?th.acc:th.text4,fontWeight:tab===k?800:400,letterSpacing:.5}}>{lb}</span>
          {k==="matches"&&badge>0&&<span style={{position:"absolute",top:8,right:"50%",transform:"translateX(12px)",background:"#f87171",color:"#fff",fontSize:9,fontWeight:700,borderRadius:8,padding:"1px 5px",minWidth:14,textAlign:"center"}}>{badge}</span>}
          {tab===k&&<div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:24,height:2.5,borderRadius:2,background:th.acc}}/>}
        </button>
      ))}
    </div>
  );
}

// ── ONBOARDING ────────────────────────────────────────────────────────
function Onboarding({th,onComplete}){
  const [step,setStep]=React.useState(0);
  const [data,setData]=React.useState({name:"",logo:"⚽",city:"",district:"",level:"Orta",players:"8",avail:[],desc:""});
  const [err,setErr]=React.useState("");
  const dists=GEO[data.city]||[];
  function next(){
    if(step===0&&!data.name.trim()){setErr("Takım adı zorunlu");return;}
    if(step===1&&!data.city){setErr("Şehir seçmelisin");return;}
    if(step===1&&!data.district){setErr("İlçe seçmelisin");return;}
    if(step===2&&data.avail.length===0){setErr("En az bir gün seçmelisin");return;}
    setErr("");
    if(step<3)setStep(s=>s+1);
    else onComplete({id:0,name:data.name.trim(),city:data.city,district:data.district,logo:data.logo,level:data.level,players:data.players,avail:data.avail,desc:data.desc.trim(),wins:0,losses:0,draws:0,points:0,played:0,rating:0,isPremium:false});
  }
  function toggleDay(d){setData(p=>({...p,avail:p.avail.includes(d)?p.avail.filter(x=>x!==d):[...p.avail,d]}));}
  const steps=["Takım Adı","Konum","Müsaitlik","Hazır!"];
  const prog=(step/(steps.length-1))*100;
  const S={background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:12,padding:"14px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"inherit",width:"100%"};
  return (
    <div style={{width:"100%",maxWidth:430,height:"100dvh",margin:"0 auto",background:"#000",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"20px 20px 0",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",marginBottom:20}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,letterSpacing:3,color:"#fff"}}>FUT<span style={{color:"#F5F234"}}>MATCH</span></div>
          <div style={{flex:1}}/>
          <div style={{color:"#555",fontSize:12}}>{step+1}/{steps.length}</div>
        </div>
        <div style={{height:3,background:"#1a1a1a",borderRadius:2,marginBottom:6}}>
          <div style={{height:"100%",width:`${prog}%`,background:"linear-gradient(90deg,#F5F234,#fff)",borderRadius:2,transition:"width .4s ease"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:0}}>
          {steps.map((s,i)=><div key={s} style={{fontSize:9,color:i<=step?"#F5F234":"#333",fontWeight:700,letterSpacing:1}}>{s.toUpperCase()}</div>)}
        </div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"24px 20px 20px"}}>
        {step===0&&(
          <div style={{animation:"fadeUp .4s ease"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:40,color:"#fff",lineHeight:1,marginBottom:6}}>TAKIM OLUŞTUR</div>
            <div style={{color:"#555",fontSize:13,marginBottom:28}}>Takımını tanıt. Bu bilgiler rakiplerine görünür.</div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:10}}>TAKIM ADI</div>
            <input value={data.name} onChange={e=>setData(p=>({...p,name:e.target.value}))} placeholder="örn. Kadıköy Lions FC" maxLength={30} style={{...S,marginBottom:4}} autoFocus/>
            <div style={{color:"#333",fontSize:10,textAlign:"right",marginBottom:24}}>{data.name.length}/30</div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:12}}>TAKIM LOGOSU</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:24}}>
              {LOGOS.map(l=><button key={l} onClick={()=>setData(p=>({...p,logo:l}))} style={{width:48,height:48,borderRadius:12,border:`2px solid ${data.logo===l?"#F5F234":"#1a1a1a"}`,background:data.logo===l?"rgba(245,242,52,.12)":"#0d0d0d",fontSize:24,cursor:"pointer",transition:"all .15s"}}>{l}</button>)}
            </div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:10}}>SEVİYE</div>
            <div style={{display:"flex",gap:8,marginBottom:24}}>
              {LEVELS.map(l=><button key={l} onClick={()=>setData(p=>({...p,level:l}))} style={{flex:1,padding:"10px 4px",borderRadius:12,border:`1px solid ${data.level===l?"#F5F234":"#1a1a1a"}`,background:data.level===l?"rgba(245,242,52,.1)":"#0d0d0d",color:data.level===l?"#F5F234":"#555",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>)}
            </div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:10}}>OYUNCU SAYISI</div>
            <div style={{display:"flex",gap:6,marginBottom:24}}>
              {["6","7","8","9","10","11","12"].map(n=><button key={n} onClick={()=>setData(p=>({...p,players:n}))} style={{flex:1,padding:"10px 4px",borderRadius:10,border:`1px solid ${data.players===n?"#F5F234":"#1a1a1a"}`,background:data.players===n?"rgba(245,242,52,.1)":"#0d0d0d",color:data.players===n?"#F5F234":"#555",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{n}</button>)}
            </div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:10}}>TAKIM TANITIMI <span style={{color:"#333"}}>(İsteğe Bağlı)</span></div>
            <textarea value={data.desc} onChange={e=>setData(p=>({...p,desc:e.target.value}))} placeholder="Takımınızı kısaca tanıtın..." maxLength={200} rows={3} style={{...S,resize:"none",lineHeight:1.6}}/>
            <div style={{color:"#333",fontSize:10,textAlign:"right",marginTop:4}}>{data.desc.length}/200</div>
          </div>
        )}
        {step===1&&(
          <div style={{animation:"fadeUp .4s ease"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:40,color:"#fff",lineHeight:1,marginBottom:6}}>KONUM</div>
            <div style={{color:"#555",fontSize:13,marginBottom:28}}>Hangi şehir ve ilçede oynuyorsunuz?</div>
            <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:12}}>ŞEHİR</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:24}}>
              {CITIES.map(c=><button key={c} onClick={()=>setData(p=>({...p,city:c,district:""}))} style={{padding:"9px 16px",borderRadius:20,border:`1px solid ${data.city===c?"#F5F234":"#1a1a1a"}`,background:data.city===c?"rgba(245,242,52,.1)":"#0d0d0d",color:data.city===c?"#F5F234":"#555",fontSize:13,fontWeight:data.city===c?700:400,cursor:"pointer",fontFamily:"inherit",transition:"all .15s"}}>{c}</button>)}
            </div>
            {data.city&&(<>
              <div style={{color:"#888",fontSize:10,letterSpacing:2,fontWeight:700,marginBottom:12}}>İLÇE</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {dists.map(di=><button key={di} onClick={()=>setData(p=>({...p,district:di}))} style={{padding:"8px 14px",borderRadius:20,border:`1px solid ${data.district===di?"#F5F234":"#1a1a1a"}`,background:data.district===di?"rgba(245,242,52,.1)":"#0d0d0d",color:data.district===di?"#F5F234":"#555",fontSize:12,fontWeight:data.district===di?700:400,cursor:"pointer",fontFamily:"inherit",transition:"all .15s"}}>{di}</button>)}
              </div>
            </>)}
          </div>
        )}
        {step===2&&(
          <div style={{animation:"fadeUp .4s ease"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:40,color:"#fff",lineHeight:1,marginBottom:6}}>MÜSAİTLİK</div>
            <div style={{color:"#555",fontSize:13,marginBottom:28}}>Hangi günler sahaya çıkabilirsiniz?</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {DAYS.map(d=>{const active=data.avail.includes(d);return(
                <button key={d} onClick={()=>toggleDay(d)} style={{padding:"16px 20px",borderRadius:14,border:`1.5px solid ${active?"#F5F234":"#1a1a1a"}`,background:active?"rgba(245,242,52,.08)":"#0d0d0d",color:active?"#F5F234":"#555",fontSize:14,fontWeight:active?700:400,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .18s"}}>
                  {d}<span style={{fontSize:18,opacity:active?1:0,transition:"opacity .15s"}}>✓</span>
                </button>
              );})}
            </div>
          </div>
        )}
        {step===3&&(
          <div style={{animation:"popIn .5s cubic-bezier(.175,.885,.32,1.275)",textAlign:"center",paddingTop:20}}>
            <div style={{fontSize:72,marginBottom:16,animation:"heartbeat 1.5s ease infinite"}}>{data.logo}</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:44,color:"#fff",lineHeight:1,letterSpacing:2,marginBottom:4}}>{data.name}</div>
            <div style={{color:"#555",fontSize:13,marginBottom:32}}>📍 {data.city} · {data.district}</div>
            <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:18,padding:"20px",marginBottom:24,textAlign:"left"}}>
              {[["Seviye",data.level],["Oyuncu",`${data.players} kişi`],["Müsaitlik",data.avail.length>0?data.avail.join(", "):"—"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #1a1a1a"}}>
                  <span style={{color:"#555",fontSize:13}}>{l}</span><span style={{color:"#fff",fontSize:13,fontWeight:700}}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{background:"rgba(245,242,52,.05)",border:"1px solid rgba(245,242,52,.2)",borderRadius:14,padding:"14px 16px",textAlign:"left"}}>
              <div style={{color:"#F5F234",fontSize:12,fontWeight:700,marginBottom:6}}>⚡ Başlangıç Bonusu</div>
              <div style={{color:"#555",fontSize:12,lineHeight:1.7}}>Kayıt tamamlandıktan sonra keşfet ekranında takımları görmeye başlayacaksın. İlk eşleşme +35 puan!</div>
            </div>
          </div>
        )}
      </div>
      <div style={{padding:"0 20px 24px",flexShrink:0}}>
        {err&&<div style={{color:"#f87171",fontSize:12,marginBottom:10,textAlign:"center",fontWeight:600}}>⚠️ {err}</div>}
        <button onClick={next} style={{width:"100%",padding:"16px",borderRadius:14,border:"none",background:"#F5F234",color:"#000",fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>
          {step===3?"⚽ Sahaya Çık →":"Devam Et →"}
        </button>
        {step>0&&<button onClick={()=>{setStep(s=>s-1);setErr("");}} style={{width:"100%",padding:"12px",marginTop:8,borderRadius:14,border:"1px solid #1a1a1a",background:"transparent",color:"#555",fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>← Geri</button>}
      </div>
    </div>
  );
}
