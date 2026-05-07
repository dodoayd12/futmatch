
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
