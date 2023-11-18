import { TdtChannelDto } from "src/app/model/dto/tdt-channel-dto.interface";

export const OTHER_CHANNELS_LIST: TdtChannelDto[] = [
    {
        name: 'VH1 Italia',
        logo: 'https://i.imgur.com/5ONlZGS.png',
        epg_id: 'VH1Italia.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://content.uplynk.com/channel/36953f5b6546464590d2fcd954bc89cf.m3u8'
          }
        ]
      },{
        name: 'RadioItaliaTV',
        logo: 'https://i.imgur.com/4VCEJuJ.png',
        epg_id: 'RadioItaliaTV.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://radioitaliatv.akamaized.net/hls/live/2093117/RadioitaliaTV/master.m3u8'
          }
        ]
      },{
        name: 'RTV Noord',
        logo: 'https://i.imgur.com/pO5Mexa.png',
        epg_id: 'RTVNoord.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://media.rtvnoord.nl/live/rtvnoord/tv/3e8fe3c1-0868-49b0-b2f3-7dd6eb30651f/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Flevoland',
        logo: 'https://i.imgur.com/d1CmTcI.png',
        epg_id: 'OmroepFlevolandTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'https://d5ms27yy6exnf.cloudfront.net/live/omroepflevoland/tv/index.m3u8'
          }
        ]
      },{
        name: 'Omroep Brabant',
        logo: 'https://i.imgur.com/Jv7IjHJ.png',
        epg_id: 'OmroepBrabantTV.nl',
        country: 'nl',
        options: [
          {
            format: 'm3u8',
            url: 'http://d3slqp9xhts6qb.cloudfront.net/live/omroepbrabant/tv/index.m3u8'
          }
        ]
      },{
        name: 'Expressen TV',
        logo: 'https://i.imgur.com/8EjMSr7.png',
        epg_id: 'ExpressenTV.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn0-03837-liveedge0.dna.ip-only.net/03837-liveedge0/smil:03837-tx2/playlist.m3u8'
          }
        ]
      },{
        name: 'Kanal 10 Sverige',
        logo: 'https://i.imgur.com/vlh699v.png',
        epg_id: 'Kanal10.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://rrr.sz.xlcdn.com/?account=cn_kanal10media&file=live_transcoded&type=live&service=wowza&protocol=https&output=playlist.m3u8'
          }
        ]
      },{
        name: 'Di TV',
        logo: 'https://i.imgur.com/zApTDWn.png',
        epg_id: 'DiTV.se',
        country: 'se',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn0-03837-liveedge0.dna.ip-only.net/03837-liveedge0/smil:03837-tx4/playlist.m3u8'
          }
        ]
      },{
        name: 'Stories – Rakuten TV Italia',
        logo: 'https://i.imgur.com/tMcUvjI.jpg',
        epg_id: 'rakuten-stories.it',
        country: 'it',
        options: [
          {
            format: 'm3u8',
            url: 'https://rakuten-spotlight-6-eu.rakuten.wurl.tv/playlist.m3u8'
          }
        ]
      },{
        name: 'Andorra TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Logo_Andorra_Televisi%C3%B3.png',
        epg_id: 'AndorraTV.ad',
        country: 'ad',
        options: [
          {
            format: 'm3u8',
            url: 'https://videos.rtva.ad/live/rtva/playlist.m3u8'
          }
        ]
      },{
        name: 'TN Todo Noticias',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TN_todo_noticias_logo.svg/200px-TN_todo_noticias_logo.svg.png',
        epg_id: 'TodoNoticias.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-01-01-tn.vodgc.net/TN24/index.m3u8'
          }
        ]
      },{
        name: 'Tec TV',
        logo: 'https://i.imgur.com/EGCq1wc.png',
        epg_id: 'TECTV.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv.initium.net.ar:3939/live/tectvmainlive.m3u8'
          }
        ]
      },{
        name: 'Net TV',
        logo: 'https://i.imgur.com/EWmshtx.png',
        epg_id: 'NETTV.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://unlimited1-us.dps.live/nettv/nettv.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'TV Universidad',
        logo: 'https://i.imgur.com/tvLHiAT.png',
        epg_id: 'TVUniversidad.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://stratus.stream.cespi.unlp.edu.ar/hls/tvunlp.m3u8'
          }
        ]
      },{
        name: 'El Trece',
        logo: 'https://i.imgur.com/ZK7AQFg.png',
        epg_id: 'ElTrece.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://live-01-02-eltrece.vodgc.net/eltrecetv/index.m3u8'
          }
        ]
      },{
        name: 'El Nueve',
        logo: 'https://i.imgur.com/EtcVSm4.png',
        epg_id: 'ElNueve.ar',
        country: 'ar',
        options: [
          {
            format: 'm3u8',
            url: 'https://octubre-live.cdn.vustreams.com/live/channel09/live.isml/live.m3u8'
          }
        ]
      },{
        name: 'ABC News Australia',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/ABC_News_Channel.svg/640px-ABC_News_Channel.svg.png',
        epg_id: 'ABCNews.au',
        country: 'au',
        options: [
          {
            format: 'm3u8',
            url: 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8'
          }
        ]
      },{
        name: 'OE24',
        logo: 'https://i.imgur.com/8UTkcPn.png',
        epg_id: 'Oe24TV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://varoe24live.sf.apa.at/oe24-live1/oe24.smil/chunklist_b1900000.m3u8'
          }
        ]
      },{
        name: 'W24',
        logo: 'https://i.imgur.com/PGb4wYw.png',
        epg_id: 'W24.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms01.w24.at/W24/smil:liveevent.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'RTV',
        logo: 'https://i.imgur.com/oD7GQxT.pn',
        epg_id: 'RTV.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'http://iptv.rtv-ooe.at/stream.m3u8'
          }
        ]
      },{
        name: 'R9',
        logo: 'https://i.imgur.com/2fxVYsL.jpg',
        epg_id: 'R9.at',
        country: 'at',
        options: [
          {
            format: 'm3u8',
            url: 'https://ms01.w24.at/R9/smil:liveeventR9.smil/playlist.m3u8'
          }
        ]
      },{
        name: 'Belros',
        logo: 'https://i.imgur.com/HWqxjGl.png',
        epg_id: 'BelRos.ru',
        country: 'ru',
        options: [
          {
            format: 'm3u8',
            url: 'https://live2.mediacdn.ru/sr1/tro/playlist.m3u8'
          }
        ]
      },{
        name: 'Vitebsk Telekanal',
        logo: 'https://i.imgur.com/FXAqELU.jpg',
        epg_id: 'Vitebsk.by',
        country: 'by',
        options: [
          {
            format: 'm3u8',
            url: 'https://flu.vtv.by/tvt-non-by/tracks-v1a1/mono.m3u8'
          }
        ]
      },{
        name: 'BX1',
        logo: 'https://i.imgur.com/YjKqWru.png',
        epg_id: 'BX1.be',
        country: 'be',
        options: [
          {
            format: 'm3u8',
            url: 'https://59959724487e3.streamlock.net/stream/live/playlist.m3u8'
          }
        ]
      },{
        name: 'ALL Sports Brasil',
        logo: 'https://i.imgur.com/wULpnYR.png',
        epg_id: 'AllSports.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/chunklist.m3u8'
          }
        ]
      },{
        name: 'SBT',
        logo: 'https://logodownload.org/wp-content/uploads/2013/12/sbt-logo.png',
        epg_id: 'SBTNacional.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://wz4.dnip.com.br/bemtv/bemtv.sdp/playlist.m3u8'
          }
        ]
      },{
        name: 'AgroBrasil TV',
        logo: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Logo_AgroBrasilTV.jpg',
        epg_id: 'AgroBrasilTV.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://45.162.230.234:1935/agrobrasiltv/agrobrasiltv/playlist.m3u8'
          }
        ]
      },{
        name: 'RBC',
        logo: 'https://portal.rbc1.com.br/public/portal/img/layout/logorbc.png',
        epg_id: 'rbc.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://rbc.directradios.com:1935/rbc/rbc/live.m3u8'
          }
        ]
      },{
        name: 'TV Câmara',
        logo: 'https://i.imgur.com/UpV2PRk.png',
        epg_id: 'TVCamara.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream3.camara.gov.br/tv1/manifest.m3u8'
          }
        ]
      },{
        name: 'TVE RS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Logotipo_da_TVE_RS.png',
        epg_id: 'tvers.br',
        country: 'br',
        options: [
          {
            format: 'm3u8',
            url: 'http://selpro1348.procergs.com.br:1935/tve/stve/playlist.m3u8'
          }
        ]
      },{
        name: 'TV1 Bulgaria',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Tv1-new.png',
        epg_id: 'TV1.bg',
        country: 'bg',
        options: [
          {
            format: 'm3u8',
            url: 'https://tv1.cloudcdn.bg/temp/livestream.m3u8'
          }
        ]
      },{
        name: 'CPAC',
        logo: 'https://i.imgur.com/AbdFD0S.png',
        epg_id: 'CPACEnglish.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://d7z3qjdsxbwoq.cloudfront.net/groupa/live/f9809cea-1e07-47cd-a94d-2ddd3e1351db/live.isml/.m3u8'
          }
        ]
      },{
        name: 'ICI RDI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/ICI_RDI_logo.svg/640px-ICI_RDI_logo.svg.png',
        epg_id: 'IciRDI.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8'
          }
        ]
      },{
        name: 'Télé Québec',
        logo: 'https://i.imgur.com/8grBWK9.png',
        epg_id: 'CIVMDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://bcovlive-a.akamaihd.net/575d86160eb143458d51f7ab187a4e68/us-east-1/6101674910001/playlist.m3u8'
          }
        ]
      },{
        name: 'Savoir Média',
        logo: 'https://i.imgur.com/pa4wOVY.png',
        epg_id: 'CFTUDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://hls.savoir.media/live/stream.m3u8'
          }
        ]
      },{
        name: 'ICI Montreal',
        logo: 'https://i.imgur.com/Z1b2TJD.png',
        epg_id: 'CBFTDT.ca',
        country: 'ca',
        options: [
          {
            format: 'm3u8',
            url: 'https://amdici.akamaized.net/hls/live/873426/ICI-Live-Stream/master.m3u8'
          }
        ]
      },{
        name: 'Canal 1',
        logo: 'https://cloudfront-us-east-1.images.arcpublishing.com/gruponacion/2XI5OC6MQZFXXBDGMRRDOZSL2Q.jpg',
        epg_id: 'Canal1.cr',
        country: 'cr',
        options: [
          {
            format: 'm3u8',
            url: 'https://video20.klm99.com:3993/live/canal1crlive.m3u8'
          }
        ]
      },{
        name: '88 Stereo',
        logo: 'http://www.88stereo.com/wp-content/uploads/2017/05/88Stereo-logoweb.png',
        epg_id: '88stereo.cr',
        country: 'cr',
        options: [
          {
            format: 'm3u8',
            url: 'http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8'
          }
        ]
      },{
        name: 'CMC TV',
        logo: 'https://i.imgur.com/Fh2vawT.png',
        epg_id: 'CMCTV.hr',
        country: 'hr',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8'
          }
        ]
      },{
        name: 'RIK Sat',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_RIK_Sat_2017.svg/640px-Logo_RIK_Sat_2017.svg.png',
        epg_id: 'RIKSat.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://l3.cloudskep.com/cybcsat/abr/playlist.m3u8'
          }
        ]
      },{
        name: 'BRT 1',
        logo: 'https://i.imgur.com/gOPAi2c.png',
        epg_id: 'BRT1.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://sc-kuzeykibrissmarttv.ercdn.net/brt1hd/bant1/playlist.m3u8'
          }
        ]
      },{
        name: 'BRT 2',
        logo: 'https://i.imgur.com/t5kbIuj.png" tvg-id="BRT2.cy',
        epg_id: 'BRT2.cy',
        country: 'cy',
        options: [
          {
            format: 'm3u8',
            url: 'https://sc-kuzeykibrissmarttv.ercdn.net/brt2hd/bant1/playlist.m3u8'
          }
        ]
      },{
        name: 'JOJ Family',
        logo: 'https://i.imgur.com/IZHIAAj.png',
        epg_id: 'JojFamily.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.cdn.joj.sk/live/hls/family-540.m3u8'
          }
        ]
      },{
        name: 'Óčko',
        logo: 'https://i.imgur.com/iPmpsnN.png',
        epg_id: 'Ocko.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko/playlist.m3u8'
          }
        ]
      },{
        name: 'Óčko Star',
        logo: 'https://i.imgur.com/tGzQFWw.png',
        epg_id: 'OckoStar.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8'
          }
        ]
      },{
        name: 'Óčko Expres',
        logo: 'https://i.imgur.com/e731JNS.png',
        epg_id: 'OckoExpres.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8'
          }
        ]
      },{
        name: 'Praha TV',
        logo: 'https://www.praga2018.cz/wp-content/uploads/logo-prahatv.png',
        epg_id: 'PrahaTV.cz',
        country: 'cz',
        options: [
          {
            format: 'm3u8',
            url: 'https://stream.polar.cz/prahatv/prahatvlive-1/playlist.m3u8'
          }
        ]
      },{
        name: 'Folketinget TV',
        logo: 'https://i.imgur.com/RqQDUzX.png',
        epg_id: 'TVfromtheDanishParliament.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdnapi.kaltura.com/p/2158211/sp/327418300/playManifest/entryId/1_24gfa7qq/protocol/https/format/applehttp/a.m3u8'
          }
        ]
      },{
        name: 'TV Sy',
        logo: 'https://i.imgur.com/k2jf591.png',
        epg_id: 'TVSYD.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvsyd.dk/env/cluster-1-e.live.nvp1/live/hls/p/1956351/e/0_e9slj9wh/tl/main/st/0/t/rFEtaqAbdhUFGef_BNF4WQ/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Fyn',
        logo: 'https://i.imgur.com/4L6AIMH.png',
        epg_id: 'TV2Fyn.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2fyn.dk/env/cluster-1-e.live.nvp1/live/hls/p/1966291/e/0_vsfrv0zm/tl/main/st/0/t/EgP1FA1D39taZFVewCa42w/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Øst',
        logo: 'https://i.imgur.com/H9l6Ulw.png',
        epg_id: 'TV2Ost.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tveast.dk/env/cluster-1-e.live.nvp1/live/hls/p/1953381/e/0_zphj9q61/tl/main/st/0/t/THUB80e-ZMufZCE4pDhO0g/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2/Nord',
        logo: 'https://i.imgur.com/tEJ22UW.png',
        epg_id: 'TV2Nord.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2nord.dk/env/cluster-1-e.live.nvp1/live/hls/p/1956931/e/1_h9yfe7h2/tl/main/st/1/t/_FUn1YHQ6_P6lES4U6mmsA/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV 2 Kosmopol',
        logo: 'https://i.imgur.com/oVmCoKY.png',
        epg_id: 'TV2Kosmopol.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tv2lorry.dk/env/cluster-1-d.live.nvp1/live/hls/p/2045321/e/1_grusx1zd/tl/main/st/0/t/rCct87c-v2SFFCvQK1BBOg/index-s32.m3u8'
          }
        ]
      },{
        name: 'TV/Midt-Vest',
        logo: 'https://i.imgur.com/OU7xIVa.png',
        epg_id: 'TVMidtvest.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvmidtvest.dk/env/cluster-1-d.live.frp1/live/hls/p/1953371/e/1_9x5lzos9/tl/main/st/0/t/9MTEhotxVwKuatx1EVXdGg/index-s34.m3u8'
          }
        ]
      },{
        name: 'TV 2/Østjylland',
        logo: 'https://i.imgur.com/qEUXjHp.png',
        epg_id: 'TV2Ostjylland.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://cdn-lt-live.tvmidtvest.dk/env/cluster-1-d.live.frp1/live/hls/p/1953371/e/1_9x5lzos9/tl/main/st/0/t/9MTEhotxVwKuatx1EVXdGg/index-s34.m3u8'
          }
        ]
      },{
        name: 'TV 2/Bornholm',
        logo: 'https://i.imgur.com/cEOpXU6.png',
        epg_id: 'TV2Bornholm.dk',
        country: 'dk',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.tv2bornholm.dk/stream/live/playlist.m3u8'
          }
        ]
      },{
        name: '+1',
        logo: '',
        epg_id: '',
        country: '',
        options: [
          {
            format: 'm3u8',
            url: 'https://live.tv2bornholm.dk/stream/live/playlist.m3u8'
          }
        ]
      }
];