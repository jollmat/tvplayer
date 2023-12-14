import { TdtChannelsDto } from "src/app/model/dto/tdt-channels-response-dto.interface";
import { ContentTypesEnum } from "src/app/model/enum/content-types.enum";

export const TDT_CHANNELS: TdtChannelsDto = {
    "license": {
      "source": "https://github.com/LaQuay/TDTChannels",
      "url": "https://www.tdtchannels.com/avisolegal"
    },
    "epg": {
      "xml": "https://www.tdtchannels.com/epg/TV.xml",
      "xml.gz": "https://www.tdtchannels.com/epg/TV.xml.gz",
      "json": "https://www.tdtchannels.com/epg/TV.json"
    },
    "countries": [
      {
        "name": "Spain",
        "ambits": [
          {
            "name": "Generalistas",
            "channels": [
              {
                "name": "La 1",
                "web": "https://www.rtve.es/play/videos/directo/la-1/",
                "logo": "https://pbs.twimg.com/profile_images/899385012801470464/akSvNCqE_200x200.jpg",
                "epg_id": "La1.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/1688877.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La 2",
                "web": "https://www.rtve.es/play/videos/directo/la-2/",
                "logo": "https://graph.facebook.com/la2detve/picture?width=200&height=200",
                "epg_id": "La2.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/1688885.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/la2/la2_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Antena 3",
                "web": "https://www.atresplayer.com/directos/antena3/",
                "logo": "https://graph.facebook.com/antena3/picture?width=200&height=200",
                "epg_id": "Antena3.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Cuatro",
                "web": "https://www.mitele.es/directo/cuatro",
                "logo": "https://graph.facebook.com/cuatro/picture?width=200&height=200",
                "epg_id": "Cuatro.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Telecinco",
                "web": "https://www.mitele.es/directo/telecinco",
                "logo": "https://graph.facebook.com/tele5/picture?width=200&height=200",
                "epg_id": "Telecinco.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "laSexta",
                "web": "https://www.atresplayer.com/directos/lasexta/",
                "logo": "https://graph.facebook.com/laSexta/picture?width=200&height=200",
                "epg_id": "LaSexta.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Neox",
                "web": "https://www.atresplayer.com/directos/neox/",
                "logo": "https://graph.facebook.com/neox/picture?width=200&height=200",
                "epg_id": "Neox.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Nova",
                "web": "https://www.atresplayer.com/directos/nova/",
                "logo": "https://graph.facebook.com/novatdt/picture?width=200&height=200",
                "epg_id": "Nova.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Mega",
                "web": "https://www.atresplayer.com/directos/mega/",
                "logo": "https://graph.facebook.com/megaTDT/picture?width=200&height=200",
                "epg_id": "Mega.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Atreseries",
                "web": "https://www.atresplayer.com/directos/atreseries/",
                "logo": "https://graph.facebook.com/atreseries/picture?width=200&height=200",
                "epg_id": "Atreseries.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "FDF",
                "web": "https://www.mitele.es/directo/fdf",
                "logo": "https://graph.facebook.com/factoriadeficcion/picture?width=200&height=200",
                "epg_id": "FDF.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Energy",
                "web": "https://www.mitele.es/directo/energy",
                "logo": "https://graph.facebook.com/E.EnergyTV/picture?width=200&height=200",
                "epg_id": "Energy.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Divinity",
                "web": "https://www.mitele.es/directo/divinity",
                "logo": "https://graph.facebook.com/divinityes/picture?width=200&height=200",
                "epg_id": "Divinity.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Be Mad",
                "web": "https://www.mitele.es/directo/bemad",
                "logo": "https://graph.facebook.com/BeMadTV/picture?width=200&height=200",
                "epg_id": "Bemad.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "TRECE",
                "web": "https://www.cope.es/directos/trece",
                "logo": "https://graph.facebook.com/TRECEtves/picture?width=200&height=200",
                "epg_id": "13.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://play.cdn.enetres.net/091DB7AFBD77442B9BA2F141DCC182F5021/live.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "El Toro TV",
                "web": "https://eltorotv.com/tv-en-directo",
                "logo": "https://graph.facebook.com/eltorotv.es/picture?width=200&height=200",
                "epg_id": "ElToroTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming-1.eltorotv.com/lb0/eltorotv-streaming-web/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://edge-nodo-002.streaming.hitcloser.net/eltorotv-streaming-web/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "mtmad 24h",
                "web": "https://www.mitele.es/directo/mtmad-24h",
                "logo": "https://graph.facebook.com/mtmad.es/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "GH VIP 24h",
                "web": "https://www.mitele.es/directo/gh-vip-24h-senal-1/",
                "logo": "https://graph.facebook.com/granhermano/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "DMAX",
                "web": "https://dmax.marca.com/en-directo",
                "logo": "https://graph.facebook.com/DMAXes/picture?width=200&height=200",
                "epg_id": "DMax.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Ten",
                "web": "https://tentv.es",
                "logo": "https://graph.facebook.com/televisionten/picture?width=200&height=200",
                "epg_id": "TEN.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "DKISS",
                "web": "https://www.dkiss.es",
                "logo": "https://graph.facebook.com/DKissTV/picture?width=200&height=200",
                "epg_id": "DKISS.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "Paramount Network",
                "web": "https://www.paramountnetwork.es",
                "logo": "https://graph.facebook.com/ParamountNetworkES/picture?width=200&height=200",
                "epg_id": "Paramount.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "BOM Cine",
                "web": "https://www.bomcine.com",
                "logo": "https://graph.facebook.com/BOMCINEtv/picture?width=200&height=200",
                "epg_id": "BOMCine.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              }
            ]
          },
          {
            "name": "Informativos",
            "channels": [
              {
                "name": "24h",
                "web": "https://www.rtve.es/play/videos/directo/24h/",
                "logo": "https://pbs.twimg.com/profile_images/1144547866393882626/2R0Khn5n_200x200.png",
                "epg_id": "24Horas.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/1694255.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/24h/24h_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "El Pa\u00eds",
                "web": "https://elpais.com",
                "logo": "https://graph.facebook.com/elpais/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2xqbi89ghm9hh.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-79fx3huimw4xc-ssai-prd/fast-channel-el-pais.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCnsvJeZO4RigQ898WdDNoBw/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Libertad Digital TV",
                "web": "https://tv.libertaddigital.com/directo.html",
                "logo": "https://graph.facebook.com/libertad.digital.tv/picture?width=200&height=200",
                "epg_id": "Libertad.TV",
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/xnm032?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "El Confidencial",
                "web": "https://www.elconfidencial.com/television/",
                "logo": "https://graph.facebook.com/elconfidencial/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://daqnsnf5phf17.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-sde7fypd1420w-prod/fast-channel-elconfidencial/fast-channel-elconfidencial.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Deportivos",
            "channels": [
              {
                "name": "Teledeporte",
                "web": "https://www.rtve.es/play/videos/directo/tdp/",
                "logo": "https://graph.facebook.com/teledeporteRTVE/picture?width=200&height=200",
                "epg_id": "TDP.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/1712295.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream-clnx.rtve.es/rtvesec/tdp/tdp_main.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "GOL Play",
                "web": "https://www.goltelevision.com/en-directo",
                "logo": "https://graph.facebook.com/goltv.es/picture?width=200&height=200",
                "epg_id": "GOL.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Esport 3",
                "web": "https://www.ccma.cat/3cat/directes/esport3/",
                "logo": "https://graph.facebook.com/Esport3/picture?width=200&height=200",
                "epg_id": "E3.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/esport3-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/esport3-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "contentTypes": [ContentTypesEnum.SPORTS],
                "extra_info": []
              },
              {
                "name": "ETB Deportes",
                "web": "https://www.eitb.eus/es/deportes/deporte-en-directo/",
                "logo": "https://graph.facebook.com/deportes.eitb.kirolak/picture?width=200&height=200",
                "epg_id": "ETBD.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/oka1hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/oka2hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/oka3hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Vinx TV Asturias",
                "web": "https://vinxtv.es/en-directo/",
                "logo": "https://graph.facebook.com/VinxTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tv.radiocast.es:5443/vinxtv/streams/vinxtvlive.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCJDjXO0kv_ZOtLntIO0d4bw/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Real Madrid TV",
                "web": "https://www.realmadrid.com/real-madrid-tv",
                "logo": "https://graph.facebook.com/RealMadrid/picture?width=200&height=200",
                "epg_id": "RMTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Bar\u00e7a TV",
                "web": "https://www.fcbarcelona.es/es/culers",
                "logo": "https://graph.facebook.com/fcbarcelona/picture?width=200&height=200",
                "epg_id": "BarcaTV.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "Sevilla TV",
                "web": "https://live.sevillafc.es",
                "logo": "https://graph.facebook.com/sevillafc/picture?width=200&height=200",
                "epg_id": "SevillaTV.TV",
                "options": [],
                "extra_info": []
              },
              {
                "name": "Betis TV",
                "web": "https://www.realbetisbalompie.es/rtvbetis/directo-tv/",
                "logo": "https://graph.facebook.com/realbetisbalompie/picture?width=200&height=200",
                "epg_id": "BetisTV.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "El 10 del Bar\u00e7a",
                "web": "https://xn--el10delbara-v9a.com",
                "logo": "https://graph.facebook.com/El10delBarsa/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=2YbxNZBOues",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Cazaflix",
                "web": "https://cazaflix.com/tv-directo/",
                "logo": "https://graph.facebook.com/cazaflixoficial/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.viloud.tv/embed/channel/292a2a75da8d1d6335cd7b6e600b04e8?autoplay=1&volume=1&controls=1&title=0&share=0&open_playlist=0",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Mundo Nautica",
                "web": "https://mundonautica.tv",
                "logo": "https://graph.facebook.com/MundoNautica/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/mundonautica/mundonautica.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              }
            ]
          },
          {
            "name": "Infantiles",
            "channels": [
              {
                "name": "Boing",
                "web": "https://www.mitele.es/directo/boing",
                "logo": "https://graph.facebook.com/boinges/picture?width=200&height=200",
                "epg_id": "Boing.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Clan",
                "web": "https://www.rtve.es/play/videos/directo/clan/",
                "logo": "https://graph.facebook.com/clantve/picture?width=200&height=200",
                "epg_id": "Clan.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/5466990.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/clan/clan_main_dvr.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Kidz",
                "web": "https://www.atresplayer.com/directos/canal-kidz/",
                "logo": "https://graph.facebook.com/atresplayerkidz/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648c271d2bfab0e4177a0d61/648c271d2bfab0e4177a0d61/2.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Pequeradio TV",
                "web": "https://www.pequeradio.es",
                "logo": "https://graph.facebook.com/Pequeradio/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Cartoon Network Latino",
                "web": "https://cnapp.cartoonnetworkla.com/now/freelive1",
                "logo": "https://graph.facebook.com/cartoonnetwork.spain/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://playout.cdn.cartoonnetwork.com.br/playout_04/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "LEGO Friends",
                "web": "https://www.youtube.com/channel/UCP-Ng5SXUEt0VE-TXqRdL6g",
                "logo": "https://pbs.twimg.com/profile_images/378800000257143498/6dbc45c353f641ef85ca51f75533a7e1_200x200.jpeg",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=_i3JW8ZI7eM",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Little Baby Bum",
                "web": "https://www.youtube.com/user/LittleBabyBumEspanol",
                "logo": "https://yt3.ggpht.com/a/AATXAJwn3r9U07S7ZOqoGZLUbuYHWiIqpE8xuLJsyg=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=Thrl_DXz1os",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Talking Tom and Friends",
                "web": "https://www.youtube.com/TomFriendsEs",
                "logo": "https://yt3.ggpht.com/a/AATXAJwpm-5h1rjcPqno5uANZr75VhhCYKv4PS02gLUS0A=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=xeR3ASwhyCo",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              }
            ]
          },
          {
            "name": "Eventuales",
            "channels": [
              {
                "name": "+24",
                "web": "https://www.rtve.es/play/videos/directo/informativos/",
                "logo": "https://img.rtve.es/imagenes/multisenal-24/1361962728583.png",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108696.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108703.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108704.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108706.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108720.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6108721.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "\u00a1HOLA! Play",
                "web": "https://www.hola.com/tv/",
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu_Hd2WYs49wYCBMAphVpvvpBzd-EJFU8XFQgccPIw=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://022d66c197dd4a1e9008e0134a74f34e.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-es_HolaPlay/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "flooxer",
                "web": "https://www.atresplayer.com/directos/canal-flooxer/",
                "logo": "https://graph.facebook.com/flooxer/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/5c1285e47ed1a861f8125285/5c1285e47ed1a861f8125285.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Atresplayer Cl\u00e1sicos",
                "web": "https://www.atresplayer.com/directos/clasicos/",
                "logo": "https://graph.facebook.com/atresplayer/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef12c2bfab0e4507e0d61/648ef12c2bfab0e4507e0d61.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Atresplayer Comedia",
                "web": "https://www.atresplayer.com/directos/comedia/",
                "logo": "https://graph.facebook.com/atresplayer/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef23d2bfab0e4557e0d61/648ef23d2bfab0e4557e0d61.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Atresplayer Mentes Inquietas",
                "web": "https://www.atresplayer.com/directos/mentes-inquietas/",
                "logo": "https://graph.facebook.com/atresplayer/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef3162bfab0e4587e0d61/648ef3162bfab0e4587e0d61.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Atresplayer Multicine",
                "web": "https://www.atresplayer.com/directos/multicine/",
                "logo": "https://graph.facebook.com/atresplayer/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef18c1756b0e41daf83cc/648ef18c1756b0e41daf83cc.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "El Hormiguero",
                "web": "https://www.atresplayer.com/directos/el-hormiguero/",
                "logo": "https://graph.facebook.com/elhormiguero/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef5882bfab0e4627e0d61/648ef5882bfab0e4627e0d61.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "El club de la comedia",
                "web": "https://www.atresplayer.com/directos/el-club-de-la-comedia/",
                "logo": "https://graph.facebook.com/ElClubDeLaComediaEnlaSexta/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648f47f7a2ffb0e40aeff3ad/648f47f7a2ffb0e40aeff3ad.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Equipo de investigaci\u00f3n",
                "web": "https://www.atresplayer.com/directos/equipo-de-investigacion/",
                "logo": "https://graph.facebook.com/EqInvestigacion/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef5551756b0e429af83cc/648ef5551756b0e429af83cc.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Aqu\u00ed no hay qui\u00e9n viva",
                "web": "https://www.atresplayer.com/directos/aqui-no-hay-quien-viva/",
                "logo": "https://graph.facebook.com/AQUINHQV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef3951756b0e425af83cc/648ef3951756b0e425af83cc.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "F\u00edsica o qu\u00edmica",
                "web": "https://www.atresplayer.com/directos/foq/",
                "logo": "https://graph.facebook.com/fisicaoquimica/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fast-channels.atresmedia.com/648ef50a2bfab0e4607e0d61/648ef50a2bfab0e4607e0d61.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTVE Crimen",
                "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-crimen/",
                "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6924117.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTVE \u00c9poca",
                "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-epoca/",
                "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6922467.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTVE Cu\u00e9ntame",
                "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-cuentame/",
                "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6909843.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTVE Somos Cine",
                "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-cine/",
                "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6909845.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTVE Docs",
                "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-docs/",
                "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6987938.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Mitele Comedia",
                "web": "https://www.mitele.es/directo/mitele-comedia/",
                "logo": "https://graph.facebook.com/mitele.es/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Mitele Viajes",
                "web": "https://www.mitele.es/directo/mitele-viajes/",
                "logo": "https://graph.facebook.com/mitele.es/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Canal Parlamento",
                "web": "https://www.congreso.es/actualidad/canal-parlamento",
                "logo": "https://graph.facebook.com/CongresodelosDiputados/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2037973/canalparlamento/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Congreso de los Diputados",
                "web": "http://www.congreso.es/portal/page/portal/Congreso/Congreso/CongresoTV/ConDir",
                "logo": "https://graph.facebook.com/CongresodelosDiputados/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2038274/canal1/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2038275/canal2/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2038276/canal3/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2038277/canal4/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://congresodirecto.akamaized.net/hls/live/2038278/canal5/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Radio Nacional",
                "web": "https://www.rtve.es/play/radio/",
                "logo": "https://graph.facebook.com/radionacionalrne/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/1938076.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Radio 3",
                "web": "https://www.rtve.es/play/radio/",
                "logo": "https://graph.facebook.com/radio3/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/2795617.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "R\u00e0dio 4",
                "web": "https://www.rtve.es/play/radio/",
                "logo": "https://graph.facebook.com/Radio4RNE/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6782425.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Andaluc\u00eda",
            "channels": [
              {
                "name": "Canal Sur Andaluc\u00eda",
                "web": "https://www.canalsurmas.es/videos/category/5247-directos",
                "logo": "https://graph.facebook.com/canalsurradioytv/picture?width=200&height=200",
                "epg_id": "CanalSurA.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.codev8.net/rtvalive/smil:channel1.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UChtLgH7ZJLqLGWJpBnzy9Lg/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Sur 2 Accesible",
                "web": "https://www.canalsurmas.es/videos/42791-canal-sur-2-accesible",
                "logo": "https://graph.facebook.com/canalsurradioytv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.codev8.net/rtvalive/smil:channel22.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Andaluc\u00eda Cocina",
                "web": "https://vivaespa\u00f1a.tv/user/live-tv/ch201-andalucia-cocina/11",
                "logo": "https://yt3.googleusercontent.com/ytc/APkrFKb6DZpbxOMbN_VANCdenLck4ceg7gxMk5tnkjmM=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/acocina/acocina.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "Andaluc\u00eda Turismo",
                "web": "https://xn--vivaespaa-s6a.tv/user/live-tv/ch200-andalucia-turismo/12",
                "logo": "https://yt3.googleusercontent.com/ytc/APkrFKYsl5e6jEIMtXIoTUHvkJqXxDfASrvQP_QFRRww=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/aturismo/aturismo.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "7TV Andaluc\u00eda",
                "web": "https://7tvandalucia.es",
                "logo": "https://graph.facebook.com/7TelevisionAndalucia/picture?width=200&height=200",
                "epg_id": "7Andalucia.TV",
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "Jerez TV",
                "web": "https://jereztelevision.com",
                "logo": "https://graph.facebook.com/jerez.television/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=Qx20n1qcgNk",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "101TV M\u00e1laga",
                "web": "https://www.101tv.es/endirecto101tv/",
                "logo": "https://graph.facebook.com/101tvmalaga/picture?width=200&height=200",
                "epg_id": "101Malaga.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited38.todostreaming.es/live/101tv-web101tv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCJzt0XyxSwpsNODokzG4iRw/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Onda C\u00e1diz",
                "web": "https://ondacadiz.es/television-directo",
                "logo": "https://graph.facebook.com/ondacadiz/picture?width=200&height=200",
                "epg_id": "OndaCadiz.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ondacadiztv.es:30443/octv/directo_multi/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Huelva TV",
                "web": "http://huelvatv.com/directo/",
                "logo": "https://graph.facebook.com/Huelvatv/picture?width=200&height=200",
                "epg_id": "HuelvaTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/huelvatv/htvdirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Sierra de C\u00e1diz",
                "web": "http://www.canalsierradecadiz.com/emision-en-directo/",
                "logo": "https://graph.facebook.com/canalsierradecadiz/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://s.emisoras.tv:8081/sierradecadiz/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 45 TV",
                "web": "https://www.canal45tv.com",
                "logo": "https://graph.facebook.com/canal45television/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://nlb1-live.emitstream.com/hls/625csn5et2iszm9oze65/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "PTV M\u00e1laga",
                "web": "https://ptvtelecom.com/canales/malaga.html",
                "logo": "https://graph.facebook.com/PTVMalaga/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/PTV-malaga/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Teleonuba",
                "web": "https://www.teleonuba.es/en-directo/",
                "logo": "https://graph.facebook.com/Teleonuba/picture?width=200&height=200",
                "epg_id": "Teleonuba.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/Teleonuba/endirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Condavisi\u00f3n",
                "web": "https://www.condavision.es",
                "logo": "https://graph.facebook.com/condavision/picture?width=200&height=200",
                "epg_id": "Condavision.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/Condavision/endirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "CanalCosta",
                "web": "https://www.canalcostatv.es",
                "logo": "https://graph.facebook.com/canalcosta/picture?width=200&height=200",
                "epg_id": "CanalCosta.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/CanalcostaTV/endirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Uvitel TV",
                "web": "https://www.uvitel.tv/directo/",
                "logo": "https://graph.facebook.com/uviteltv/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Interalmer\u00eda TV",
                "web": "https://www.interalmeria.tv/directo/",
                "logo": "https://graph.facebook.com/Interalmeriatv/picture?width=200&height=200",
                "epg_id": "InterAlmeria.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://interalmeria.tv/directo/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tuya La Janda TV",
                "web": "https://tuyatv.com",
                "logo": "https://graph.facebook.com/tuyalajandatv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8232/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCKvB2Fo1y3JMttk7bJm2gGQ/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "M\u00e1s Jerez",
                "web": "https://masjerez.com/programas-tv",
                "logo": "https://graph.facebook.com/masjerez/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCOoSrqLzlo_S5yQK3OmFqWw/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Canal San Roque",
                "web": "https://tv.multimediasanroque.com/videos/12315-san-roque-directo",
                "logo": "https://yt3.googleusercontent.com/tV-0_Cp9qnamXNVbcuRx3F_9UvUt1s3_ieQmV3RRaF50bHpZIlyLZn4iHYmL32lsz1Zv_ZmFHA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlivevlc.codev8.net/aytosanroquelive/smil:channel1.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Onda Algeciras TV",
                "web": "https://ondaalgecirastv.com/en-directo/",
                "logo": "https://graph.facebook.com/ondaalgecirastv/picture?width=200&height=200",
                "epg_id": "OndaAlgeciras.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudtv.provideo.es/live/algecirastv-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Estepona TV",
                "web": "https://television.estepona.es/tvendirecto/",
                "logo": "https://graph.facebook.com/esteponatelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8022/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Luz Televisi\u00f3n",
                "web": "https://canalluztelevision.es/en-directo",
                "logo": "https://graph.facebook.com/canalluztelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/CanalLuz/enDirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Do\u00f1ana",
                "web": "http://www.canaldonana.com",
                "logo": "https://yt3.ggpht.com/ytc/AAUvwniAZB2q-vXPojR8-s48qBkScsAsVmJBpZSs6ZkMwA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://secure5.todostreaming.es/live/division-alm.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Onda Jerez TV",
                "web": "http://www.ondajerez.com",
                "logo": "https://graph.facebook.com/OndaJerezRTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "OndaMezquita 7 TV",
                "web": "https://www.ahoracordoba.es",
                "logo": "https://yt3.googleusercontent.com/ytc/AGIKgqP3vjaXvm2380fv6OFwZuOIzGvHUl8wcim44tQjMw=s200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "PTV Linares",
                "web": "https://www.ptvtelecom.com/canales/linares.html",
                "logo": "https://graph.facebook.com/tvlinares/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/ptv-linarez/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Tel\u00e9cija",
                "web": "https://ecijadigital.es",
                "logo": "https://graph.facebook.com/telecija.televisioncomarcal/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=telecija&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Marbella TV",
                "web": "https://rtvmarbella.tv/tv-en-directo/",
                "logo": "https://graph.facebook.com/RTVMarbella/picture?width=200&height=200",
                "epg_id": "MarbellaTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.rtvmarbella.tv/hls/streamingweb.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "M\u00e1laga 24h TV",
                "web": "http://malaga24h.com",
                "logo": "https://graph.facebook.com/Malaga24hTv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=8MQbkxsMhKQ",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Telequivir",
                "web": "http://www.telequivir.com",
                "logo": "https://graph.facebook.com/telequivirtv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=telequivir&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Telemotril",
                "web": "https://telemotril.com/telemotril-en-vivo/",
                "logo": "https://graph.facebook.com/telemotriltv/picture?width=200&height=200",
                "epg_id": "Telemotril.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/8431/8431/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Diez TV \u00dabeda",
                "web": "https://dieztv.es/dieztv-ubeda-directo/",
                "logo": "https://graph.facebook.com/dieztv/picture?width=200&height=200",
                "epg_id": "DiezTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.cloud.innovasur.es/mmj/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Diez TV Las Villas",
                "web": "https://dieztv.es/dieztv-lasvillas-directo/",
                "logo": "https://graph.facebook.com/dieztv/picture?width=200&height=200",
                "epg_id": "DiezTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.cloud.innovasur.es/mmj2/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTV Tarifa",
                "web": "https://rtvtarifa.com",
                "logo": "https://graph.facebook.com/RTVTARIFA/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=G_suTKIcImc",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "CostadelSol TV",
                "web": "http://www.costadelsoltv.es",
                "logo": "https://graph.facebook.com/costadelsoltv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited11.todostreaming.es/live/benalmadena-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Bail\u00e9n TV",
                "web": "http://bailen.tv",
                "logo": "https://graph.facebook.com/BailenTv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://cpd.bailen.tv:8080/Playlist_CANAL_24H/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "http://cpd.bailen.tv:8080/Directos/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "101TV Antequera",
                "web": "https://www.101tv.es/directo-antequera/",
                "logo": "https://graph.facebook.com/101tvAntequera/picture?width=200&height=200",
                "epg_id": "101Antequera.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming101tv.es/hls/webantequera.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "101TV C\u00e1diz",
                "web": "https://www.101tvcadiz.es/directo/",
                "logo": "https://graph.facebook.com/101tvAntequera/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming101tv.es/hls/webcadiz.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "101TV Ronda",
                "web": "https://www.101tv.es/directo101tvronda/",
                "logo": "https://graph.facebook.com/101tvmalaga/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming101tv.es/hls/webronda.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Sal TV",
                "web": "https://saltv.es",
                "logo": "https://graph.facebook.com/SalTelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8254/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Vivam\u00f3vil TV",
                "web": "https://vivamovil.es/vivamoviltv",
                "logo": "https://pbs.twimg.com/profile_images/1401880197578870789/_8jMKpKE_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5d8d85cf2c308.streamlock.net:1936/AlcalaTV/endirecto/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal M\u00e1laga",
                "web": "http://www.canalmalaga.es/tv-directo",
                "logo": "https://graph.facebook.com/CanalMalagaRTVMunicipal/picture?width=200&height=200",
                "epg_id": "CanalMalaga.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://canalmalaga-tv-live.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "101TV Axarqu\u00eda",
                "web": "https://www.101tv.es/directo-axarquia-almijara/",
                "logo": "https://graph.facebook.com/101tvaxarquia/picture?width=200&height=200",
                "epg_id": "101Axarqu\u00eda.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming101tv.es/hls/webaxarquia.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Mijas 3.40 TV",
                "web": "https://mijascomunicacion.com/mijas-340-tv-en-directo/",
                "logo": "https://graph.facebook.com/Mijas340TV/picture?width=200&height=200",
                "epg_id": "Mijas340TV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming004.gestec-video.com/hls/MIJAS.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "PTV Granada",
                "web": "https://ptvtelecom.com/canales/granada.html",
                "logo": "https://graph.facebook.com/PTVGranada/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/PTV-granada/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Fuengirola TV",
                "web": "https://fuengirolatv.com/directo-ftv/",
                "logo": "https://graph.facebook.com/fuengirolatvoficial/picture?width=200&height=200",
                "epg_id": "FuengirolaTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://secure.todostreaming.es/live/nerja-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "PTV Sevilla",
                "web": "https://ptvtelecom.com/canales/sevilla.html",
                "logo": "https://graph.facebook.com/SevillaPTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/PTV_sevilla/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "PTV C\u00f3rdoba",
                "web": "https://ptvtelecom.com/canales/cordoba.html",
                "logo": "https://graph.facebook.com/PTVCOR/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/PTV_CORDOBA/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Canal Co\u00edn",
                "web": "https://canalcoin.com/tv-directo/",
                "logo": "https://graph.facebook.com/106272064368271/picture?width=200&height=200",
                "epg_id": "CanalCoin.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://canalcoin.garjim.es/hls/directo.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVM C\u00f3rdoba",
                "web": "https://www.cordoba.es/emision_directo/",
                "logo": "https://graph.facebook.com/TVM.Cordoba/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5924d3ad0efcf.streamlock.net/cordoba/cordobalive/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Play Andaluc\u00eda TV",
                "web": "https://live.playandalucia.tv/",
                "logo": "https://i0.wp.com/www.audiovisual451.com/wp-content/uploads/2023/03/AndaluciaTV_logo-y-web-1.jpg?resize=250%2C200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.viloud.tv/embed/channel/a4f73fcf6aa51b102d11e53265e3b4cf?autoplay=1&volume=1&controls=1&title=0&share=0&open_playlist=0",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "PTV Almer\u00eda",
                "web": "https://ptvtelecom.com/canales/almeria.html",
                "logo": "https://yt3.googleusercontent.com/xpmtGgfJkNyRXmRDBCaI1UwgnNESJbc0edjazTUsNNdGPq_NvYz6quCiuJMwx-uF9pTWx5hcqQ=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamer.zapitv.com/ptv_almeria/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Parlamento de Andaluc\u00eda",
                "web": "https://www.parlamentodeandalucia.es/stream/canal4.html",
                "logo": "https://graph.facebook.com/parlamentodeandalucia.es/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://stream2.parlamentodeandalucia.es:1943/realizacion1/realizacion1/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://stream2.parlamentodeandalucia.es:1943/realizacion2/realizacion2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://stream2.parlamentodeandalucia.es:1943/realizacion3/realizacion3/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://stream2.parlamentodeandalucia.es:1943/realizacion4/realizacion4/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Arag\u00f3n",
            "channels": [
              {
                "name": "Arag\u00f3n TV",
                "web": "http://www.aragontelevision.es/directo",
                "logo": "https://graph.facebook.com/AragonTV/picture?width=200&height=200",
                "epg_id": "AragonTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cartv.streaming.aranova.es/hls/live/aragontv_canal1.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 25 Barbastro TV",
                "web": "http://www.canal25tv.es/index.php/ct-menu-item-5",
                "logo": "https://graph.facebook.com/tvbarbastro/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://common01.todostreaming.es/live/tvbarbastro-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Canarias",
            "channels": [
              {
                "name": "TV Canaria",
                "web": "https://rtvc.es/en-directo/",
                "logo": "https://graph.facebook.com/188600904655/picture?width=200&height=200",
                "epg_id": "Canarias.TV",
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=6LlZXt8nk4s",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "La 1 Canarias",
                "web": "https://www.rtve.es/play/videos/directo/tve-canarias/",
                "logo": "https://pbs.twimg.com/profile_images/899385012801470464/akSvNCqE_200x200.jpg",
                "epg_id": "La1_CAT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/5190066.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La 2 Canarias",
                "web": "https://www.rtve.es/play/videos/directo/tve-canarias/la-2-can/",
                "logo": "https://graph.facebook.com/la2detve/picture?width=200&height=200",
                "epg_id": "La2_CAT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/5468585.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "24h Canarias",
                "web": "https://www.rtve.es/play/videos/directo/tve-canarias/24-h-can/",
                "logo": "https://pbs.twimg.com/profile_images/1144547866393882626/2R0Khn5n_200x200.png",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/5473142.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "M\u00edrame TV",
                "web": "https://mirametv.com",
                "logo": "https://graph.facebook.com/mirametvcom/picture?width=200&height=200",
                "epg_id": "MirameTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://bit.controlstreams.com:5443/LiveApp/streams/mirametv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 4 Tenerife",
                "web": "https://www.canal4tenerife.tv",
                "logo": "https://graph.facebook.com/CANAL4TENERIFE/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/Directo2/Directo2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "NORTEvisi\u00f3n",
                "web": "http://nortevision.es/directo/",
                "logo": "https://graph.facebook.com/aljoamyvisual/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://amaru.dyndns.org:8870/0.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Lancelot TV",
                "web": "https://www.lancelot.tv/directo/",
                "logo": "https://graph.facebook.com/288850935035196/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5c0956165db0b.streamlock.net:8090/directo/_definst_/lancelot.television/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Este Canal TV",
                "web": "http://www.estecanaltv.com/este-canal-en-directo/",
                "logo": "https://graph.facebook.com/estecanaltv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://synclosdragos1.syncsolutions.es:8008/live3/emision/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Fuerteventura TV",
                "web": "https://fuerteventuratelevision.com",
                "logo": "https://yt3.ggpht.com/NGDcQX5v1Px2BBFD5G4aHYNrCyDWoEkRF5Gpsyfz-b_9swNpy6s-Z7-Glu-9WDr7JpP_MsCB=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5c0956165db0b.streamlock.net/ftv/directo/.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Factor\u00eda de Carnaval",
                "web": "https://multicarnaval.com",
                "logo": "https://graph.facebook.com/Multicarnaval/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://eu1.servers10.com:8081/8116/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Afortunadas TV",
                "web": "https://www.afortunadastv.com",
                "logo": "https://graph.facebook.com/afortunadastv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8108/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Cantabria",
            "channels": [
              {
                "name": "Popular TV Cantabria",
                "web": "https://populartvcantabria.com/en-directo/",
                "logo": "https://graph.facebook.com/populartvcantabria/picture?width=200&height=200",
                "epg_id": "PopularTV_S.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited12.todostreaming.es/live/ptvcantabria-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Castilla-La Mancha",
            "channels": [
              {
                "name": "Castilla-La Mancha Media",
                "web": "https://www.cmmedia.es/play/en-directo/tv",
                "logo": "https://graph.facebook.com/CMMediaes/picture?width=200&height=200",
                "epg_id": "CMM.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnapi.kaltura.com/p/2288691/sp/228869100/playManifest/entryId/1_01fn4ycl/format/applehttp/.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Guada TV Media",
                "web": "http://www.guadatv.tv/streaming/",
                "logo": "https://graph.facebook.com/GuadaTV.TV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/guadatv/guadatv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "Visi\u00f3n 6 TV",
                "web": "http://www.visionseis.tv/tv-online-vision-seis/",
                "logo": "https://graph.facebook.com/104927246235553/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.proceso.info:8888/vision6-web/stream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "CanalImagen Almansa",
                "web": "https://zonacliente.almatelecom.es/videos/canalimagen",
                "logo": "https://graph.facebook.com/TvAlmansa/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA",
                  "REF"
                ],
                "referer": "https://zonacliente.almatelecom.es/videos/canalimagen"
              },
              {
                "name": "Canal 4 Mancha Centro",
                "web": "https://villarrobledonoticias.com/canal-4-mancha/",
                "logo": "https://graph.facebook.com/canal4villarrobledo/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5924d3ad0efcf.streamlock.net/canal4/canal4live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 2000",
                "web": "http://www.canal2000.com",
                "logo": "https://graph.facebook.com/canal2000/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://canal2000.berkano-systems.net/streaming/streams/canal2000-720p.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Castilla y Le\u00f3n",
            "channels": [
              {
                "name": "La 7",
                "web": "https://www.cyltv.es/live/La7",
                "logo": "https://graph.facebook.com/cyltv/picture?width=200&height=200",
                "epg_id": "La7.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Avila",
                "web": "https://www.cyltv.es/live/La8Avila",
                "logo": "https://pbs.twimg.com/profile_images/1364545643319087104/7qp4nrtS_200x200.jpg",
                "epg_id": "8Avila.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Bierzo",
                "web": "https://www.cyltv.es/Live/La8Bierzo",
                "logo": "https://graph.facebook.com/La8Bierzo/picture?width=200&height=200",
                "epg_id": "8Bierzo.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Burgos",
                "web": "https://www.cyltv.es/live/La8Burgos",
                "logo": "https://graph.facebook.com/La8Burgos/picture?width=200&height=200",
                "epg_id": "8Burgos.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Leon",
                "web": "https://www.cyltv.es/live/La8Leon",
                "logo": "https://pbs.twimg.com/profile_images/1367754156711288839/c01QAS89_200x200.jpg",
                "epg_id": "8Leon.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Palencia",
                "web": "https://www.cyltv.es/live/La8Palencia",
                "logo": "https://graph.facebook.com/La8Palencia/picture?width=200&height=200",
                "epg_id": "8Palencia.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Salamanca",
                "web": "https://www.cyltv.es/live/La8Salamanca",
                "logo": "https://graph.facebook.com/la8salamanca/picture?width=200&height=200",
                "epg_id": "8Salamanca.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Segovia",
                "web": "https://www.cyltv.es/live/La8Segovia",
                "logo": "https://graph.facebook.com/la8segovia/picture?width=200&height=200",
                "epg_id": "8Segovia",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Soria",
                "web": "https://www.cyltv.es/live/La8Soria",
                "logo": "https://graph.facebook.com/La8Soria/picture?width=200&height=200",
                "epg_id": "8Soria.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Valladolid",
                "web": "https://www.cyltv.es/live/La8Valladolid",
                "logo": "https://graph.facebook.com/la8valladolid/picture?width=200&height=200",
                "epg_id": "8Valladolid.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "La 8 Zamora",
                "web": "https://www.cyltv.es/live/La8Zamora",
                "logo": "https://graph.facebook.com/la8zamora/picture?width=200&height=200",
                "epg_id": "8Zamora.TV",
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "TV Benavente",
                "web": "https://www.tvbenavente.es",
                "logo": "https://graph.facebook.com/benaventetv/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "Canal 54",
                "web": "https://www.canal54.es/directo/",
                "logo": "https://graph.facebook.com/Canal54Burgos/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=canal54tvburgos&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TV Aranda",
                "web": "http://www.telearanda.es",
                "logo": "https://graph.facebook.com/575943555801687/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.streamingconnect.tv/hls/telearanda/telearanda.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 9 Soria",
                "web": "https://soriatv.com",
                "logo": "https://graph.facebook.com/100830372347460/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=canal9_soria&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Junta Castilla y Le\u00f3n",
                "web": "https://www.jcyl.es/web/jcyltv.html",
                "logo": "https://graph.facebook.com/juntadecastillayleon/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://16escalones-live2.flumotion.com/chunks.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Catalu\u00f1a",
            "channels": [
              {
                "name": "TV3",
                "web": "https://www.ccma.cat/3cat/directes/tv3/",
                "logo": "https://pbs.twimg.com/profile_images/1269286508625891328/rVes9BS__200x200.png",
                "epg_id": "TV3.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/tv3-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/tv3-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "324",
                "web": "https://www.ccma.cat/3cat/directes/324/",
                "logo": "https://graph.facebook.com/324cat/picture?width=200&height=200",
                "epg_id": "324.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-int.ccma.cat/live-origin/canal324-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "33",
                "web": "https://www.ccma.cat/3cat/directes/33/",
                "logo": "https://graph.facebook.com/Canal33/picture?width=200&height=200",
                "epg_id": "C33.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/c33-super3-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/c33-super3-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "SX3",
                "web": "https://www.ccma.cat/3cat/directes/sx3/",
                "logo": "https://graph.facebook.com/SomSX3/picture?width=200&height=200",
                "epg_id": "C33.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/super3-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/super3-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "3CAT Exclusiu 1",
                "web": "https://www.ccma.cat/tv3/programes/exclusiu-web/",
                "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/oca1-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/oca1-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "3CAT Exclusiu 2",
                "web": "https://www.ccma.cat/tv3/programes/exclusiu-web/",
                "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/oca2-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/oca2-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "3CAT Exclusiu 3",
                "web": "https://www.ccma.cat/tv3/programes/exclusiu-web/",
                "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-cat.ccma.cat/live-origin/oca3-hls/master.m3u8",
                    "geo2": "CAT",
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-es.ccma.cat/live-origin/oca3-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La 1 Catalunya",
                "web": "https://www.rtve.es/play/videos/directo/tve-catalunya/",
                "logo": "https://pbs.twimg.com/profile_images/899385012801470464/akSvNCqE_200x200.jpg",
                "epg_id": "La1_CAT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/3293681.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/cat/la1_cat_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La 2 Catalunya",
                "web": "https://www.rtve.es/play/videos/directo/tve-catalunya/la-2-cat/",
                "logo": "https://graph.facebook.com/la2detve/picture?width=200&height=200",
                "epg_id": "La2_CAT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/3987218.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/cat/la2_cat_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "24h Catalunya",
                "web": "https://www.rtve.es/play/videos/directo/tve-catalunya/24h-cat/",
                "logo": "https://pbs.twimg.com/profile_images/1144547866393882626/2R0Khn5n_200x200.png",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/4952053.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Bon Dia TV",
                "web": "https://www.ccma.cat/bondiatv/",
                "logo": "https://i2.wp.com/blocs.mesvilaweb.cat/wp-content/uploads/sites/1858/2018/11/BONDIA.png",
                "epg_id": "BonDiaTV_CAT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-int.ccma.cat/live-origin/bondia-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Parlament",
                "web": "https://parlament.cat/ext/f?p=700:1",
                "logo": "https://graph.facebook.com/parlamentcat/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": []
              },
              {
                "name": "betev\u00e9",
                "web": "https://beteve.cat/en-directe/",
                "logo": "https://graph.facebook.com/betevecat/picture?width=200&height=200",
                "epg_id": "BTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnapisec.kaltura.com/p/2346171/sp/234617100/playManifest/entryId/1_n6442jz0/format/applehttp/.m3u8?referrer=aHR0cHM6Ly9iZXRldmUuY2F0",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Canal Terres de l'Ebre",
                "web": "https://canalte.cat/en-directe/",
                "logo": "https://graph.facebook.com/canal.terresdelebre/picture?width=200&height=200",
                "epg_id": "Terres.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/canalteABR/ctestream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Empord\u00e0 TV",
                "web": "https://www.empordadigital.cat/directe/",
                "logo": "https://graph.facebook.com/empordatv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://video3.lhdserver.es/empordatv2/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TAC 12",
                "web": "https://www.tac12.tv/en-directe",
                "logo": "https://graph.facebook.com/tacdotze/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/nimble/tac12/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Terrassa",
                "web": "https://terrassadigital.cat/televisio/",
                "logo": "https://graph.facebook.com/canalterrassa/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest2-video.streaming-pro.com/canalterrassa/stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La Xarxa",
                "web": "https://laxarxames.cat/directe",
                "logo": "https://graph.facebook.com/laxarxa/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": []
              },
              {
                "name": "Canal Taronja Central",
                "web": "https://www.canaltaronja.cat/central/canal-taronja-en-directe/",
                "logo": "https://graph.facebook.com/taronja.cat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/canaltaronja/central/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Canal Taronja Anoia",
                "web": "https://www.canaltaronja.cat/anoia/canal-taronja-en-directe/",
                "logo": "https://graph.facebook.com/canaltaronjaanoia/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/canaltaronja/anoia/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Canal Taronja Osona i Moian\u00e9s",
                "web": "https://www.canaltaronja.cat/osona/canal-taronja-en-directe/",
                "logo": "https://graph.facebook.com/TaronjaTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/canaltaronja/osona/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV de Girona",
                "web": "http://ventdelnord.tv/tvgirona",
                "logo": "https://graph.facebook.com/tvgirona/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://ventdelnord.tv:8080/girona/directe.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Piera TV",
                "web": "http://08-produccions.cat/pieratv/",
                "logo": "https://yt3.ggpht.com/WtsIUXtvmo0QQFYhj9qbxpttucZF0ZElx8oju9r7ISrKfn9GHBuRR7s9JN4YRnzvbLr6GiUtWQ=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://51.254.47.72:1935/piera/smil:piera.smil/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 10 Empord\u00e0",
                "web": "http://www.canal10.cat/endirecte",
                "logo": "https://graph.facebook.com/canal10emporda/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://ventdelnord.tv:8080/escala/directe.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Mar TV",
                "web": "http://martv.tv/emissio-en-directe/",
                "logo": "https://graph.facebook.com/martelevisio/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://iptv.services.everywan.net:8080/martv-web/video.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV Sant Cugat",
                "web": "https://www.tvsantcugat.cat/cobertura/directe-tv-hd/",
                "logo": "https://graph.facebook.com/tvsantcugat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=QaVsxXTk6k4",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TV Sabadell Vall\u00e8s",
                "web": "https://tvsabadell-valles.cat/tv-sabadell-%C2%B7-valles-en-directe/",
                "logo": "https://graph.facebook.com/tvsabadellvalles/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest1-video.streaming-pro.com/canaltaronja/sabadell/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Fitel Television",
                "web": "https://fiteltelevision.com/directe/",
                "logo": "https://graph.facebook.com/FitelTelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tv.mywifisocial.es/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV de Sant Mart\u00ed",
                "web": "https://granviaradio8.wixsite.com/rtvsm/directe",
                "logo": "https://graph.facebook.com/1397103013646307/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=qcEyduUWWIw",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              }
            ]
          },
          {
            "name": "Ceuta",
            "channels": [
              {
                "name": "Ceuta TV",
                "web": "https://www.ceutatv.com/estaticas/ceuta-tv-en-directo.html",
                "logo": "https://graph.facebook.com/CeutaTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": []
              },
              {
                "name": "RTVCE",
                "web": "https://www.rtvce.es/seccion/television/",
                "logo": "https://graph.facebook.com/RTVCE/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.codev8.net/rtvcelive/smil:channel1.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "C. de Madrid",
            "channels": [
              {
                "name": "Webcam OndaMadrid",
                "web": "https://www.telemadrid.es/emision-en-directo-ondamadrid/",
                "logo": "https://graph.facebook.com/ondamadridradio/picture?width=200&height=200",
                "epg_id": "OndaMadrid.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tvradio-1-23.secure2.footprint.net/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Telegan\u00e9s",
                "web": "https://www.teleganes.com/en-directo/",
                "logo": "https://graph.facebook.com/1423419417957760/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.emitstream.com/hls/5z6oj7ziwxzfnj78vg2m/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Distrito TV",
                "web": "http://distritotv.es",
                "logo": "https://graph.facebook.com/2004860103163343/picture?width=200&height=200",
                "epg_id": "Distrito.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.emitstream.com/hls/3mn7wpcv7hbmxmdzaxap/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Telesur Madrid",
                "web": "https://telesurmadrid.wordpress.com",
                "logo": "https://graph.facebook.com/telesurmadrid/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "NOEM"
                ]
              },
              {
                "name": "C33 Madrid",
                "web": "http://www.canal33.info",
                "logo": "https://graph.facebook.com/Canal33Madrid/picture?width=200&height=200",
                "epg_id": "C33M.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5ab29cc78f681.streamlock.net/canal33tvmadridgmailcom/livestream/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "EsTuTele",
                "web": "https://estutele.com",
                "logo": "https://graph.facebook.com/100146922067408/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/estutele/estutele.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "Canal Red",
                "web": "https://canalred.tv",
                "logo": "https://graph.facebook.com/canalredtelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=zNEHMu8-MUU",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              }
            ]
          },
          {
            "name": "C. Foral de Navarra",
            "channels": [
              {
                "name": "Navarra TV",
                "web": "https://www.navarratelevision.es/Directo",
                "logo": "https://graph.facebook.com/NavarraTelevision/picture?width=200&height=200",
                "epg_id": "NaTV.TV",
                "options": [],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TeleRibera",
                "web": "https://teleribera.com",
                "logo": "https://pbs.twimg.com/profile_images/780539549239902208/g2MfVVuY_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://video1.lhdserver.es/teleribera/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Parlamento de Navarra",
                "web": "https://www.parlamentodenavarra.es",
                "logo": "https://pbs.twimg.com/profile_images/1517046445030924289/r4OIw84T_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://broadcasting.parlamentodenavarra.es/live/canal1/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://broadcasting.parlamentodenavarra.es/live/canal2/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "C. Valenciana",
            "channels": [
              {
                "name": "\u00c0 Punt",
                "web": "https://apuntmedia.es/va/directe/tv",
                "logo": "https://graph.facebook.com/apuntmedia/picture?width=200&height=200",
                "epg_id": "APUNT.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://bcovlive-a.akamaihd.net/469e448f034b4d46afa4bcac53297d60/eu-central-1/6057955885001/playlist_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "7 TeleValencia",
                "web": "https://7televalencia.com/directo-7televalencia/",
                "logo": "https://pbs.twimg.com/profile_images/1398557359065157634/HnJZTLR-_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://play.cdn.enetres.net/9E9557EFCEBB43A89CEC8FBD3C500247022/028/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ribera TV",
                "web": "https://www.riberatelevisio.com/en-directe/",
                "logo": "https://graph.facebook.com/grup.televisio/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://common01.todostreaming.es/live/ribera-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La 8 Mediterr\u00e1neo",
                "web": "https://laocho.tv/tv-en-directo/",
                "logo": "https://graph.facebook.com/la8mediterraneo/picture?width=200&height=200",
                "epg_id": "8M.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming004.gestec-video.com/hls/8TV.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV Castell\u00f3",
                "web": "https://tvcs.tv/en-directe/",
                "logo": "https://graph.facebook.com/TelevisiondeCastellon/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=televisiodecastello&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "12TV Alicante",
                "web": "https://webtv.12tv.es",
                "logo": "https://graph.facebook.com/12tv.es/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/12tv/12tv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "Levante TV",
                "web": "https://www.levante-emv.com/videos/levante-tv",
                "logo": "https://graph.facebook.com/levantetv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=levante_tv&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TV Vega Baja",
                "web": "http://programas.televisionvegabaja.es/directo",
                "logo": "https://graph.facebook.com/TVVegaBaja/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.tvt.es:8080/hls/tvb_interno/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Burriana TV",
                "web": "https://www.burrianateve.com/burrianateve-en-directe/",
                "logo": "https://graph.facebook.com/burrianateve/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://www.burrianateve.com/hls/btv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Distrito TV Valencia",
                "web": "https://eldistrito.es/distrito-tv-llega-a-la-comunidad-valenciana-a-traves-de-la-tdt/",
                "logo": "https://graph.facebook.com/2004860103163343/picture?width=200&height=200",
                "epg_id": "Distrito.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.emitstream.com/hls/3mn7wpcv7hbmxmdzaxap/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tevequatre TV",
                "web": "https://teve4.com/directe/",
                "logo": "https://pbs.twimg.com/profile_images/438700741801177088/MdnaVxtC_200x200.png",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://nlb1-live.emitstream.com/hls/646wzsnqyforndavy6de/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Maestrat TV",
                "web": "https://www.maestrat.tv/directe",
                "logo": "https://graph.facebook.com/maestrat.tv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://stream.maestrat.tv/hls/stream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Univers TV",
                "web": "https://www.universvalencia.es",
                "logo": "https://yt3.ggpht.com/ytc/AKedOLQb35mWN9WQKdrbrrl30uG9PdY_du6DmbB_khSZdA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud2.streaminglivehd.com:1936/universfaller/universfaller/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV Almassora",
                "web": "https://www.tvalmassora.com/en-directo/",
                "logo": "https://graph.facebook.com/tvalmassora/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.fullsport.es/hls/tvalmassora_src/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Onda 15 TV",
                "web": "https://onda15.es",
                "logo": "https://graph.facebook.com/Onda15Radio/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8034/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "R\u00e0dio Bocairent TV",
                "web": "https://radiobocairent.com",
                "logo": "https://graph.facebook.com/radiobocairent/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://iptv.wifibytes.com/RadioBocairentTV_Trasnscod/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "http://185.81.77.4/BocairentTV/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Punt 3 Vall Uix\u00f3",
                "web": "https://www.punt3.es/Directo/",
                "logo": "https://graph.facebook.com/Punt3Television/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://bit.controlstreams.com:5443/LiveApp/streams/punt3.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ciudades Del Ocio TV",
                "web": "http://www.ciudadesdelocio.tv",
                "logo": "https://graph.facebook.com/CiudadesDelOcioTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8024/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Onda Valencia",
                "web": "https://www.ondavalencia.es/en-directo/onda-valencia-tv",
                "logo": "https://graph.facebook.com/ondavalenciatv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8116/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Veteve",
                "web": "https://veteve.es/",
                "logo": "https://yt3.googleusercontent.com/dUy97uBRPzF6LrRPXs72Terta2gamHMK3morI-yaPZ-9np4CMRU63OWhd0ujZC5AJM9oP8yfmA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=veteve&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Enguera TV",
                "web": "https://www.enguera.es/content/enguera-tv",
                "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJWP8ahafBlFAbCsP3tT17ooK6arGKNmcx6VES4o=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=engueratv&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "33TV Valencia",
                "web": "https://karyganet.com/33-tv/",
                "logo": "https://karyganet.com/wp-content/uploads/tv-33.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited43.todostreaming.es/live/simbana-livestream.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Corts Valencianes",
                "web": "https://mediateca.cortsvalencianes.es/library/lives/",
                "logo": "https://graph.facebook.com/cortsval/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamserver3.seneca.tv/cval_live/cdn_enc_3/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Extremadura",
            "channels": [
              {
                "name": "Canal Extremadura",
                "web": "https://www.canalextremadura.es/directo/television",
                "logo": "https://graph.facebook.com/CanalExtremadura/picture?width=200&height=200",
                "epg_id": "Extremadura.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnapi.kaltura.com/p/5581662/sp/558166200/playManifest/entryId/1_in8cxw3w/protocol/https/format/applehttp/a.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://cdnapi.kaltura.com/p/5581662/sp/558166200/playManifest/entryId/1_pkmdctkt/protocol/https/format/applehttp/a.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV Extreme\u00f1a",
                "web": "https://www.xn--televisionextremea-30b.com/directo/",
                "logo": "https://graph.facebook.com/TELEVISIONEXTREMENA/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=tvextremena&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Nuestra Comarca TV",
                "web": "https://www.nuestracomarca.com",
                "logo": "https://graph.facebook.com/nuestra.comarca/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=nuestracomarcatelevision&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Zafra TV",
                "web": "https://webtv.radiotvzafra.es",
                "logo": "https://graph.facebook.com/ZFtelevision/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/radiotvzafra/radiotvzafra.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              }
            ]
          },
          {
            "name": "Galicia",
            "channels": [
              {
                "name": "TVG",
                "web": "http://www.crtvg.es/tvg/tvg-en-directo/canle/galicia-tv-europa",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": "TVGAL.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://europa-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG 2",
                "web": "http://www.crtvg.es/en-directo",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": "TVG2.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://amodino-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Xabarin",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/xabarin-tv",
                "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://infantil-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Pequerrech@s",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/xabar%C3%ADn-tv1",
                "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://xabarintv-r1-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Cativ@s",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/xabar%C3%ADn-tv2",
                "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://xabarintv-r2-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Moci\u00f1@s",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/xabar%C3%ADn-tv3",
                "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://xabarintv-r3-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Musigal",
                "web": "http://musi.gal/",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://musigal-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Cultura",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/cultura",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cultural-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Momentos G",
                "web": "http://www.crtvg.es/en-directo/canles-directos-tvg/momentosG",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://momentog-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Eventos",
                "web": "http://www.crtvg.es/en-directo",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://events1-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://events2-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://events3-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://events4-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://events5-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TeleVigo",
                "web": "http://www.televigo.com",
                "logo": "https://graph.facebook.com/televigo/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/televigo/televigo.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REF"
                ],
                "referer": "http://www.televigo.com"
              },
              {
                "name": "Hermes TV",
                "web": "http://www.hermesvigo.com/directo-tv.php",
                "logo": "https://graph.facebook.com/491789551017784/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=hermestelevisionvigo&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Anove TV",
                "web": "https://anove.gal",
                "logo": "https://graph.facebook.com/anove.tv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://205245.gvideo.io/cmaf/205245_786753/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Auria TV",
                "web": "http://www.auria.es",
                "logo": "https://yt3.ggpht.com/a-/AAuE7mBbJ5XfzqqDgg1IkOk23GJ6JZntYZtYT-n1CA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=kyZXzeEONf4",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              }
            ]
          },
          {
            "name": "Illes Balears",
            "channels": [
              {
                "name": "IB3 Global",
                "web": "https://ib3.org/directe",
                "logo": "https://graph.facebook.com/IB3org/picture?width=200&height=200",
                "epg_id": "IB3.TV",
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=MOSIGlJRNVU",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TEF",
                "web": "https://teftv.com/la-tef-en-directe/",
                "logo": "https://graph.facebook.com/TEFTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/EIVISSA_2/EIVISSA_2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Canal 4 Televisi\u00f3",
                "web": "https://www.grup4.com/?page_id=14505",
                "logo": "https://graph.facebook.com/GRUP4COM/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited35.todostreaming.es/live/mitjans-livestream1.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Fibwi Diario",
                "web": "https://fibwidiario.com/fibwi-tv/",
                "logo": "https://graph.facebook.com/Fibwidiario/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://hostcdn3.fibwi.com/fibwi_diario/index.fmp4.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "La Rioja",
            "channels": [
              {
                "name": "7 La Rioja",
                "web": "https://www.7rioja.tv/Directo",
                "logo": "https://graph.facebook.com/7riojatv/picture?width=200&height=200",
                "epg_id": "7Rioja.TV",
                "options": [],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Cocina Familiar",
                "web": "https://cocina-familiar.com",
                "logo": "https://graph.facebook.com/cocinafamiliarjr/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/cocinafamiliar/cocinafamiliar.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              }
            ]
          },
          {
            "name": "Melilla",
            "channels": [
              {
                "name": "Melilla TV",
                "web": "https://playmelilla.es/directo",
                "logo": "https://graph.facebook.com/TelevisionMelilla/picture?width=200&height=200",
                "epg_id": "MelillaTV.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tvmelilla-hls-rm-lw.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Pa\u00eds Vasco",
            "channels": [
              {
                "name": "ETB 1",
                "web": "https://www.eitb.eus/es/television/etb1/",
                "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                "epg_id": "ETB1.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/etb1hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ETB 2",
                "web": "https://www.eitb.eus/es/television/etb2/",
                "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                "epg_id": "ETB2.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/etb2hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ETB Eventos 1",
                "web": "https://www.eitb.eus/es/noticias/actualidad-en-directo/",
                "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/oka1hd-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ETB Eventos 2",
                "web": "https://www.eitb.eus/es/deportes/deporte-en-directo/",
                "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/oka2hd-hls/master.m3u8",
                    "geo2": "SP",
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Hamaika TV",
                "web": "https://www.hamaika.eus/zuzenean",
                "logo": "https://graph.facebook.com/HamaikaTb/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdn3.wowza.com/1/RERMR282dnU5eE5Z/OHY0dVFs/hls/live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tele 7",
                "web": "https://tele7.tv/tele-7-en-directo/",
                "logo": "https://graph.facebook.com/Tele7Radio7/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ingest2-video.streaming-pro.com/tele7_ABR/stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Goiena Eus",
                "web": "https://goiena.eus/telebista/zuzenekoa",
                "logo": "https://graph.facebook.com/goiena.eus/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://zuzenean.goienamedia.eus/goiena-telebista.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Durangaldeko TV",
                "web": "https://dotb.eus",
                "logo": "https://graph.facebook.com/dotbDurangaldekoTelebista/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.emitstream.com/hls/5f9asjsehd7gmyxsdpzu/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Goierri Irrati TV",
                "web": "http://www.gitb.eus",
                "logo": "https://graph.facebook.com/GoierriIrratiTelebista/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/8155/8155/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "28 Kanala",
                "web": "https://www.28kanala.eus",
                "logo": "https://graph.facebook.com/28kanala/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/8157/8157/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Erlo TV",
                "web": "http://www.erlotelebista.eus",
                "logo": "https://graph.facebook.com/542582126141223/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/8159/8159/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Urola TV",
                "web": "https://www.urolatelebista.com",
                "logo": "https://graph.facebook.com/urolatelebista/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5940924978228.streamlock.net/j_Directo2/mp4:j_Directo2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              }
            ]
          },
          {
            "name": "P. de Asturias",
            "channels": [
              {
                "name": "TPA7",
                "web": "https://www.rtpa.es/tpa-television",
                "logo": "https://graph.facebook.com/RTPAoficial/picture?width=200&height=200",
                "epg_id": "TPA.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.codev8.net/rtpalive/smil:directo/playlist.m3u8?DVR",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              }
            ]
          },
          {
            "name": "R. de Murcia",
            "channels": [
              {
                "name": "7 R. de Murcia",
                "web": "https://www.la7tv.es/video/a-la-carta/7tv-en-directo/20220810150726000939.html",
                "logo": "https://graph.facebook.com/la7tele/picture?width=200&height=200",
                "epg_id": "7RM.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rtv-murcia-live.globalmest.com/principal/smil:principal.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtv-murcia-live.globalmest.com/secundario/smil:secundario.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Popular TV Murcia",
                "web": "https://www.populartvmurcia.com",
                "logo": "https://pbs.twimg.com/profile_images/1709805583526744064/7r1mDDWA_200x200.jpg",
                "epg_id": "PopularMU.TV",
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.fastchannel.es/mic/manifiest/hls/populartvrm/populartvrm.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REFG1"
                ],
                "referer": "https://player.streamingconnect.com/"
              },
              {
                "name": "Canal 1 Mar Menor Torre Pacheco",
                "web": "https://www.tuwebtv.es/directo.php",
                "logo": "https://graph.facebook.com/tuwebtv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directo.tuwebtv.es/canal1.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Arabi TV",
                "web": "https://www.arabitv.es/en-directo/",
                "logo": "https://yt3.googleusercontent.com/c6kb-kHU27wqpuH7CF4wJqdiczouiXr4zJ1R0lZ6N-2jZscZ9_gn77gDUIykoQLzE56fbxIZhIA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamtv2.elitecomunicacion.cloud:3956/live/arabitvlive.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          }
        ]
      },
      {
        "name": "International",
        "ambits": [
          {
            "name": "Int. Europa",
            "channels": [
              {
                "name": "TVE Int. Europa",
                "web": "https://www.rtve.es/play/videos/directo/tve-internacional-europa/",
                "logo": "https://graph.facebook.com/tveInternacional/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ztnr.rtve.es/ztnr/6891743.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://rtvelivestream.akamaized.net/rtvesec/int/tvei_eu_main_dvr.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TV3.CAT",
                "web": "https://www.ccma.cat/3cat/directes/tv3/",
                "logo": "https://pbs.twimg.com/profile_images/1269286508625891328/rVes9BS__200x200.png",
                "epg_id": "TVC.TV",
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://directes-tv-int.ccma.cat/live-origin/tvi-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "EITB Basque",
                "web": "https://www.eitb.eus/es/television/eitb-basque/",
                "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                "epg_id": "ETBSAT.TV",
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://multimedia.eitb.eus/live-content/eitbbasque-hls/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVG Am\u00e9rica",
                "web": "http://www.crtvg.es/tvg/tvg-en-directo/canle/galicia-tv-america",
                "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                "epg_id": "TVGA.TV",
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://america-crtvg.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Telemadrid Internacional",
                "web": "https://www.telemadrid.es/emision-en-directo-telemadrid-int/",
                "logo": "https://graph.facebook.com/telemadrid/picture?width=200&height=200",
                "epg_id": "TeleMadridInt.TV",
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://new-international-23.secure2.footprint.net/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "GBC Gibraltar",
                "web": "https://www.gbc.gi/tv/watch-live",
                "logo": "https://graph.facebook.com/GBCNewsroom/picture?width=200&height=200",
                "epg_id": null,
                "country": 'gb',
                "options": [],
                "extra_info": []
              },
              {
                "name": "CNN Internacional",
                "web": "https://cnnespanol.cnn.com",
                "logo": "https://graph.facebook.com/cnninternational/picture?width=320&height=320",
                "epg_id": "CNNInt.TV",
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://dhzhj55w8hou6.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-bmoob4iijm59i/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UC_lEiu6917IJz03TnntWUaQ/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "France 24 Francia",
                "web": "https://www.france24.com/es/en-vivo",
                "logo": "https://graph.facebook.com/FRANCE24/picture?width=200&height=200",
                "epg_id": "France24.TV",
                "country": 'fr',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=l8PMl7tUDIE",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg/live",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCCCPCZNChQdGa9EkATeye4g/live",
                    "geo2": null,
                    "res": null,
                    "lang": "FR"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TV5Monde Francia",
                "web": "https://europe.tv5monde.com/en/live",
                "logo": "https://graph.facebook.com/tv5mondeofficiel/picture?width=200&height=200",
                "epg_id": "TV5Monde.TV",
                "country": 'fr',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ott.tv5monde.com/Content/HLS/Live/channel(europe)/variant.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "FR"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "franceinfo",
                "web": "https://www.francetvinfo.fr/en-direct/tv.html",
                "logo": "https://graph.facebook.com/franceinfo/picture?width=200&height=200",
                "epg_id": null,
                "country": 'fr',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=Z-Nwo-ypKtM",
                    "geo2": null,
                    "res": null,
                    "lang": "FR"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "CNEWS Francia",
                "web": "https://www.cnews.fr/le-direct",
                "logo": "https://graph.facebook.com/CNEWSofficiel/picture?width=200&height=200",
                "epg_id": null,
                "country": 'fr',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x3b68jn?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": "FR"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Sport Italia",
                "web": "https://sportitalia.com/video/index",
                "logo": "https://graph.facebook.com/sportitaliatv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://di-kzbhv8pw.vo.lswcdn.net/sportitalia/sihd/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://di-kzbhv8pw.vo.lswcdn.net/sportitalia/sisolocalcio.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://di-kzbhv8pw.vo.lswcdn.net/sportitalia/silive24.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "contentTypes": [ContentTypesEnum.SPORTS],
                "extra_info": []
              },
              {
                "name": "La7 Italia",
                "web": "https://tg.la7.it/dirette-tv",
                "logo": "https://graph.facebook.com/tgla7/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d15umi5iaezxgx.cloudfront.net/LA7/CLN/HLS-B/Live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La7d Italia",
                "web": "https://www.la7.it/live-la7d",
                "logo": "https://graph.facebook.com/la7fb/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d15umi5iaezxgx.cloudfront.net/LA7D/CLN/HLS-B/Live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "DW Alemania",
                "web": "https://www.dw.com/es/multimedia/tv-en-vivo/s-100837",
                "logo": "https://graph.facebook.com/dw.espanol/picture?width=200&height=200",
                "epg_id": "DW.TV",
                "country": 'de',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://dwamdstream106.akamaized.net/hls/live/2017965/dwstream106/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "DE"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "WDR",
                "web": "https://www1.wdr.de/fernsehen/livestream/",
                "logo": "https://graph.facebook.com/WDR/picture?width=200&height=200",
                "epg_id": null,
                "country": 'de',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://wdrfsww247.akamaized.net/hls/live/2009628/wdr_msl4_fs247ww/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "DE"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tagesschau24",
                "web": "https://www.tagesschau.de/multimedia/livestreams/livestream1",
                "logo": "https://pbs.twimg.com/profile_images/2178044567/TS24-LOGO-Twitter_500_500_200x200.jpg",
                "epg_id": null,
                "country": 'de',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "DE"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Sky News UK",
                "web": "https://news.sky.com/watch-live",
                "logo": "https://graph.facebook.com/skynews/picture?width=200&height=200",
                "epg_id": "SkyN.TV",
                "country": 'gb',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://linear021-gb-hls1-prd-ak.cdn.skycdp.com/Content/HLS_001_sd/Live/channel(skynews)/index_hd.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "youtube",
                    "url": "https://youtu.be/9Auq9mYxFEE",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "GB News UK",
                "web": "https://www.gbnews.uk",
                "logo": "https://graph.facebook.com/GBNewsOnline/picture?width=200&height=200",
                "epg_id": null,
                "country": 'gb',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://amg01076-lightningintern-gbnews-samsunguk-0lu52.amagi.tv/playlist/amg01076-lightningintern-gbnews-samsunguk/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UC0vn8ISa4LKMunLbzaXLnOQ/live",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "CNN Portugal",
                "web": "https://cnnportugal.iol.pt/direto",
                "logo": "https://graph.facebook.com/cnnportugal/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pt',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB",
                  "EXTA"
                ]
              },
              {
                "name": "Porto Canal Portugal",
                "web": "http://portocanal.sapo.pt/live",
                "logo": "https://graph.facebook.com/portocanal/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pt',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x8egnb8?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": "PT"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "LN24 B\u00e9lgica",
                "web": "https://www.ln24.be/direct",
                "logo": "https://graph.facebook.com/LN24LesNews24/picture?width=200&height=200",
                "epg_id": null,
                "country": 'be',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.digiteka.com/1/bEg0RmFLb1JMYXRI/dGhqbmIw/hls/live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "FR"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVP Polonia",
                "web": "https://polonia.tvp.pl/44562671/tvp-polonia-stream",
                "logo": "https://graph.facebook.com/tvppolonia/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pl',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://polonia.tvp.pl/sess/TVPlayer2/embed.php?ID=51251441",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Televixin Malta",
                "web": "https://www.tvm.com.mt/mt/tvmi/live/",
                "logo": "https://graph.facebook.com/TelevisionMalta/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mt',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://media.tvm.com.mt/16958960.ihtml/player.html?source=embed&live_id=16966825",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "stream",
                    "url": "https://media.tvm.com.mt/16958960.ihtml/player.html?source=embed&live_id=16973314",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TRT World",
                "web": "https://www.trthaber.com/canli-yayin-izle.html",
                "logo": "https://graph.facebook.com/trthaber/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tr',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tv-trtworld.live.trt.com.tr/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "R\u00daV",
                "web": "https://www.ruv.is/sjonvarp/beint/ruv",
                "logo": "https://graph.facebook.com/RUVohf/picture?width=200&height=200",
                "epg_id": null,
                "country": 'is',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ruv-web-live.akamaized.net/streymi/ruverl/ruverl.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://ruvlive.akamaized.net/out/v1/2ff7673de40f419fa5164498fae89089/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "San Marino RTV",
                "web": "https://www.sanmarinortv.sm/programmi/web-tv",
                "logo": "https://graph.facebook.com/SanMarinoRTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'sm',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2hrvno5bw6tg2.cloudfront.net/smrtv-ch01/_definst_/smil:ch-01.smil/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://d2hrvno5bw6tg2.cloudfront.net/smrtv-ch02/_definst_/smil:ch-02.smil/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "1+1 Ucrania",
                "web": "https://1plus1.video/tvguide/1plus1/online",
                "logo": "https://graph.facebook.com/1plus1.ua/picture?width=200&height=200",
                "epg_id": "IntUA.TV",
                "country": 'ua',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=ASndlvhI8p0",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Ukraine 24 Ucrania",
                "web": "https://u24.ua",
                "logo": "https://graph.facebook.com/www.ukraine24.ua/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ua',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://streamvideol1.luxnet.ua/news24/news24.stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ICTV Ucrania",
                "web": "https://ictv.ua/ua/online/",
                "logo": "https://graph.facebook.com/ICTVchannel/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ua',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=T88RnpKNN_s",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "UATV Ucrania",
                "web": "https://uatv.ua/live/",
                "logo": "https://graph.facebook.com/kanalfreedom/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ua',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://freedom.cdn-03.cosmonova.net.ua/mobile-app/main/freedom/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Current Time TV",
                "web": "https://www.currenttime.tv/live",
                "logo": "https://graph.facebook.com/currenttimetv/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rfe-ingest.akamaized.net/hls/live/2033043/tvmc05/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Int. Am\u00e9rica",
            "channels": [
              {
                "name": "FOX Live Now",
                "web": "https://www.foxnews.com",
                "logo": "https://graph.facebook.com/livenowfox/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ABC News USA",
                "web": "https://abcnews.go.com/Live",
                "logo": "https://graph.facebook.com/ABCNews/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "NBC News USA",
                "web": "https://www.nbcnews.com/now",
                "logo": "https://graph.facebook.com/NBCNews/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=S9wmU9hA9os",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Bloomberg USA",
                "web": "https://www.bloomberg.com/live/us/btv",
                "logo": "https://pbs.twimg.com/profile_images/991792042094354432/DG1Ruupb_200x200.jpg",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://www.bloomberg.com/media-manifest/streams/us.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://www.bloomberg.com/media-manifest/streams/us-event.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "contentTypes": [ContentTypesEnum.BUSINESS],
                "extra_info": []
              },
              {
                "name": "CourtTV USA",
                "web": "https://www.courttv.com/title/court-tv-live-stream-web/",
                "logo": "https://graph.facebook.com/courttv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://content.uplynk.com/channel/6c0bd0f94b1d4526a98676e9699a10ef.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "WeatherNation USA",
                "web": "https://www.weathernationtv.com",
                "logo": "https://graph.facebook.com/WeatherNation/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2ferbiwcx1539.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-8zd06wicndthf-ssai-prd/WNNationalSamsung/WNNationalSamsung.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "America's Voice USA",
                "web": "https://americasvoice.news",
                "logo": "https://graph.facebook.com/RealAmericasVoice/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2jiqiw4g5lj5k.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/AmericasVoiceChannel-prod/AVSamsung/AVSamsung.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "BUZZR TV USA",
                "web": "https://buzzrtv.com/watch",
                "logo": "https://graph.facebook.com/BUZZRtv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://buzzr-samsungus.amagi.tv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "NTN24 Am\u00e9rica",
                "web": "https://www.ntn24.com/en-vivo/",
                "logo": "https://graph.facebook.com/NTN24/picture?width=200&height=200",
                "epg_id": "NTN24.TV",
                "country": 'us',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=JxpMmv1Wm2M",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Milenio Mexico",
                "web": "https://www.milenio.com/mileniotv",
                "logo": "https://graph.facebook.com/MilenioDiario/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=f3zGoEXJhz8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "El Financiero Mexico",
                "web": "https://www.elfinanciero.com.mx/tv",
                "logo": "https://graph.facebook.com/ElFinancieroMx/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "mpd",
                    "url": "https://d3mhf0ikztdylu.cloudfront.net/out/v1/817cf22a7bc24a778898407b3a2bfdb3/index.mpd",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "FORO TV Mexico",
                "web": "https://noticieros.televisa.com/noticias-vivo-forotv/",
                "logo": "https://pbs.twimg.com/profile_images/1508338964771459074/JG2pfMx1_200x200.jpg",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://channel02-notusa.akamaized.net/hls/live/2023914-b/event01/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ADN40 Mexico",
                "web": "https://live.adn40.mx",
                "logo": "https://graph.facebook.com/ADN40mx/picture?width=200&height=200",
                "epg_id": "ADN40.TV",
                "country": 'mx',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://mdstrm.com/live-stream-playlist/60b578b060947317de7b57ac.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Once Mexico",
                "web": "https://canalonce.mx/en-vivo",
                "logo": "https://graph.facebook.com/CANALONCETV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://vivo.canaloncelive.tv/alivepkgr3/ngrp:cepro_all/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Quiero TV Mexico",
                "web": "https://quierotv.mx/videoenvivo/",
                "logo": "https://graph.facebook.com/quierotvGDL/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x8lng9k?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Mexico Travel TV",
                "web": "https://www.mexicotravelchannel.com.mx",
                "logo": "https://graph.facebook.com/MexicoTravelChannelTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7v76vf?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Turistik TV Mexico",
                "web": "https://turistiktv.com.mx/inicio/",
                "logo": "https://graph.facebook.com/turistikmedia/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5fa5de1a545ae.streamlock.net/8030/8030/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal Capital Colombia",
                "web": "https://www.canalcapital.gov.co/content/canal-capital-vivo",
                "logo": "https://pbs.twimg.com/profile_images/1678109025399865347/m07Vwdd6_200x200.jpg",
                "epg_id": null,
                "country": 'co',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://play.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C021/021/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Se\u00f1al Colombia",
                "web": "https://www.senalcolombia.tv/senal-en-vivo/",
                "logo": "https://graph.facebook.com/senalcolombiapaginaoficial/picture?width=200&height=200",
                "epg_id": null,
                "country": 'co',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Telepacifico Colombia",
                "web": "https://telepacifico.com/envivo/",
                "logo": "https://graph.facebook.com/TelepacificoTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'co',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://stream.logicideas.media/telepacifico-live/smil:live.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Todo Noticias Argentina",
                "web": "https://tn.com.ar/envivo/24hs/",
                "logo": "https://graph.facebook.com/todonoticias/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ar',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=cb12KmMMDJA",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "La Naci\u00f3n Argentina",
                "web": "https://lnmas.lanacion.com.ar",
                "logo": "https://graph.facebook.com/lanacion/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ar',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=4e8Iw3Frf1A",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Am\u00e9rica TV Argentina",
                "web": "https://www.americatv.com.ar/vivo",
                "logo": "https://graph.facebook.com/AmericaTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ar',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=zcWXboTnous",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Canal 9 Argentina",
                "web": "https://www.elnueve.com.ar/en-vivo/",
                "logo": "https://graph.facebook.com/Canal9TV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ar',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Exitosa Noticias Per\u00fa",
                "web": "https://exitosanoticias.pe/v1/tvenvivo/",
                "logo": "https://graph.facebook.com/Exitosanoticias/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamtv.onliv3.online:1936/exito-tv/exito-tv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Willax Per\u00fa",
                "web": "https://willax.tv/en-vivo/",
                "logo": "https://graph.facebook.com/willaxtv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7x4dgx?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TV Per\u00fa",
                "web": "https://www.tvperu.gob.pe/play",
                "logo": "https://graph.facebook.com/TVPeruOficial/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "TV Per\u00fa Noticias",
                "web": "https://www.tvperu.gob.pe/noticias/play",
                "logo": "https://graph.facebook.com/noticias.tvperu/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Canal IPe Per\u00fa",
                "web": "https://www.canalipe.tv/streaming",
                "logo": "https://graph.facebook.com/canalipe/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "TeleSUR Venezuela",
                "web": "https://www.telesurtv.net/seccion/programas/",
                "logo": "https://graph.facebook.com/teleSUR/picture?width=200&height=200",
                "epg_id": "TeleSUR.TV",
                "country": 've',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnesmain.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Venezolana de Televisi\u00f3n",
                "web": "https://vtv.gob.ve/en-vivo/",
                "logo": "https://graph.facebook.com/VTVtuCanal/picture?width=200&height=200",
                "epg_id": null,
                "country": 've',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x828i6j?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "VPI TV Venezuela",
                "web": "https://vpitv.com/en-vivo/",
                "logo": "https://graph.facebook.com/vpitv/picture?width=200&height=200",
                "epg_id": null,
                "country": 've',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ott.streann.com/loadbalancer/services/public/channels-secure/5d23d5882cdce61dae029fd8/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La Tele Tuya Venezuela",
                "web": "https://teletuya.net/en-vivo/",
                "logo": "https://graph.facebook.com/TeleTuya/picture?width=200&height=200",
                "epg_id": null,
                "country": 've',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x8my9op?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TC TV Ecuador",
                "web": "https://www.tctelevision.com/en-vivo",
                "logo": "https://graph.facebook.com/tctelevision10/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ec',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7wijay?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Red Pat Bolivia",
                "web": "https://www.redpat.tv/envivolpz",
                "logo": "https://graph.facebook.com/patboliviahd/picture?width=200&height=200",
                "epg_id": null,
                "country": 'bo',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://w8.redpat.tv:7777/play/120/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "CDN 37 Rep\u00fablica Dominicana",
                "web": "https://cdn.com.do/envivo/",
                "logo": "https://graph.facebook.com/cdn.com.do/picture?width=200&height=200",
                "epg_id": null,
                "country": 'cu',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Color Visi\u00f3n Rep\u00fablica Dominicana",
                "web": "https://colorvision.com.do/en-vivo/",
                "logo": "https://graph.facebook.com/colorvisionc9/picture?width=200&height=200",
                "epg_id": null,
                "country": 'do',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7gy059?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "HCH Honduras",
                "web": "https://hch.tv/live/",
                "logo": "https://pbs.twimg.com/profile_images/1571129300623015936/-HJCmEk3_200x200.jpg",
                "epg_id": null,
                "country": 'hn',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x81za5c?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "ABC TV Paraguay",
                "web": "https://www.abc.com.py/tv/",
                "logo": "https://graph.facebook.com/ABCTVpy/picture?width=200&height=200",
                "epg_id": null,
                "country": 'py',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2e809bgs49c6y.cloudfront.net/live/d87c2b7b-9ecf-4e6e-b63b-b32772bd7851/live.isml/d87c2b7b-9ecf-4e6e-b63b-b32772bd7851.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Trece Paraguay",
                "web": "https://trece.com.py",
                "logo": "https://graph.facebook.com/trecepy/picture?width=200&height=200",
                "epg_id": null,
                "country": 'py',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rds3gen.desdeparaguay.net/trecetv/trecetv_alta/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Unicanal Paraguay",
                "web": "https://unicanal.com.py",
                "logo": "https://graph.facebook.com/Unicanal/picture?width=200&height=200",
                "epg_id": null,
                "country": 'py',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rds3gen.desdeparaguay.net/unicanal/unicanal_alta/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Nicavisi\u00f3n TV Nicaragua",
                "web": "http://www.canal12.com.ni/en-vivo",
                "logo": "https://graph.facebook.com/200823376627607/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ni',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "WTV Nicaragua",
                "web": "http://wtvnicaragua.com/player/tv-player.html",
                "logo": "https://graph.facebook.com/WTVNicaraguacanal20/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ni',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8130/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Canal 33 El Salvador",
                "web": "https://canal33.tv/home/tv-en-vivo/",
                "logo": "https://graph.facebook.com/CANAL33.TV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'sv',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Trece Costa Rica",
                "web": "https://costaricamedios.cr/envivo",
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu9k8cMAf0m3UXLYXyfrvzKd3nmOuIYOc5k4ZGOWnA=s200",
                "epg_id": null,
                "country": 'cr',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7vh8g3?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "CNN Brasil",
                "web": "https://www.cnnbrasil.com.br/ao-vivo",
                "logo": "https://graph.facebook.com/cnnbrasil/picture?width=200&height=200",
                "epg_id": null,
                "country": 'br',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=_UIm7yCgUDM",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Trinidad and Tobago Television",
                "web": "https://www.ttt.live/stream/",
                "logo": "https://graph.facebook.com/tttliveonline/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tt',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://tegostream.com/player/tego-player.php?broadcaster=ttt&channel=255",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              }
            ]
          },
          {
            "name": "Int. Asia",
            "channels": [
              {
                "name": "CGTN (español)",
                "web": "https://espanol.cgtn.com/en-directo",
                "logo": "https://graph.facebook.com/cgtnenespanol/picture?width=200&height=200",
                "epg_id": "CGTN.TV",
                "country": 'cn',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://livees.cgtn.com/1000e/prog_index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "CGTN Documentary",
                "web": "https://www.cgtn.com/channel/documentary",
                "logo": "https://graph.facebook.com/ChinaGlobalTVNetwork/picture?width=200&height=200",
                "epg_id": "CGTNDoc.TV",
                "country": 'cn',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://news.cgtn.com/resource/live/document/cgtn-doc.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Al Jazeera Qatar",
                "web": "https://www.aljazeera.com/live",
                "logo": "https://graph.facebook.com/aljazeera/picture?width=200&height=200",
                "epg_id": "AlJQ.TV",
                "country": 'qa',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://live-hls-web-aja.getaj.net/AJA/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "AR"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "NHK World Japan",
                "web": "https://www3.nhk.or.jp/nhkworld/en/live/",
                "logo": "https://graph.facebook.com/nhkworld/picture?width=200&height=200",
                "epg_id": "NHK.TV",
                "country": 'jp',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/2003458/live.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Nippon News TV Japan",
                "web": "https://www.news24.jp",
                "logo": "https://graph.facebook.com/ntvnews24/picture?width=200&height=200",
                "epg_id": null,
                "country": 'jp',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://n24-cdn-live.ntv.co.jp/ch01/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "KBS World Korea",
                "web": "http://world.kbs.co.kr",
                "logo": "https://graph.facebook.com/KBSWORLD/picture?width=200&height=200",
                "epg_id": null,
                "country": 'kr',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=yC0OLhiEMLg",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Al Arabiya",
                "web": "https://www.alarabiya.net/ar/live-stream",
                "logo": "https://graph.facebook.com/AlArabiya/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ae',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.alarabiya.net/alarabiapublish/alarabiya.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "AR"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Dubai One",
                "web": "https://www.dubaione.ae/content/dubaione/en-ae/live.html",
                "logo": "https://graph.facebook.com/dubaionetv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ae',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://dminnvll.cdn.mangomolo.com/dubaione/smil:dubaione.stream.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ary News Pakistan",
                "web": "https://live.arynews.tv",
                "logo": "https://graph.facebook.com/arynewsasia/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pk',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=sUKwTVAc0Vo",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Geo News Pakistan",
                "web": "https://live.geo.tv",
                "logo": "https://graph.facebook.com/GeoUrduDotTv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pk',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://jk3lz82elw79-hls-live.5centscdn.com/GEONEWS/3500ba09d0538297440ca620c9dd46bf.sdp/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "India Today",
                "web": "https://www.indiatoday.in/livetv",
                "logo": "https://graph.facebook.com/IndiaToday/picture?width=200&height=200",
                "epg_id": null,
                "country": 'in',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://feeds.intoday.in/aajtak/api/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "New Delhi TV 24x7 India",
                "web": "https://www.ndtv.com/video/live/channel/ndtv24x7",
                "logo": "https://graph.facebook.com/ndtv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'in',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/ndtv24x7master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Republic World TV",
                "web": "https://www.republicworld.com/livetv",
                "logo": "https://graph.facebook.com/RepublicWorld/picture?width=200&height=200",
                "epg_id": null,
                "country": 'in',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://weblive.republicworld.com/httppush/ottr_republic_english/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Hispan TV Iran",
                "web": "https://www.hispantv.com/directo",
                "logo": "https://pbs.twimg.com/profile_images/1489915604014354435/FoT4lMdj_200x200.jpg",
                "epg_id": null,
                "country": 'ir',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.presstv.ir/cdnlive/smil:live.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Channel NewsAsia",
                "web": "https://www.channelnewsasia.com/watch",
                "logo": "https://graph.facebook.com/ChannelNewsAsia/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TVBS News Taiw\u00e1n",
                "web": "https://news.tvbs.com.tw/live/news4live",
                "logo": "https://graph.facebook.com/tvbsfb/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tw',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=m_dhMSvUCIc",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "SET News Taiw\u00e1n",
                "web": "https://live.setn.com",
                "logo": "https://graph.facebook.com/setnews/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tw',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=oZdzzvxTfUY",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TVK Camboya",
                "web": "https://www.tvk.gov.kh",
                "logo": "https://graph.facebook.com/cambodiatvk/picture?width=200&height=200",
                "epg_id": null,
                "country": 'kh',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.kh.malimarcdn.com/live/tvk.stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://live.kh.malimarcdn.com/live/tvk2.stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Teledifus\u00e3o de Macau",
                "web": "https://www.tdm.com.mo/zh-hant/live",
                "logo": "https://graph.facebook.com/Canal.Macau/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mo',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live4.tdm.com.mo/ch2/_definst_/ch2.live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "PT"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://live4.tdm.com.mo/ch1/_definst_/ch1.live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://live4.tdm.com.mo/ch3/_definst_/ch3.live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Int. \u00c1frica",
            "channels": [
              {
                "name": "AfricaNews",
                "web": "https://www.channelstv.com",
                "logo": "https://graph.facebook.com/africanews.channel/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=NQjabLGdP5g",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Joy News TV Ghana",
                "web": "https://www.myjoyonline.com/media/joy-news-live",
                "logo": "https://graph.facebook.com/JoyNewsOnTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'gh',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.dailymotion.com/embed/video/x7w7197?autoplay=1",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "TVGE 1 Guinea Ecuatorial",
                "web": "http://www.tvgelive.gq/live.php",
                "logo": "http://www.tvgelive.gq/images/logo-dark.png",
                "epg_id": null,
                "country": 'gq',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rrsatrtmp.tulix.tv/tvge1/tvge1multi.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RASD TV",
                "web": "https://rasd.tv",
                "logo": "https://graph.facebook.com/televisionsaharaui/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloud.streamingconnect.tv/hls/rasdtv2/rasdtv2.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "SenTV Senegal",
                "web": "https://sentv.sn/direct",
                "logo": "https://graph.facebook.com/sentvtelevision/picture?width=200&height=200",
                "epg_id": null,
                "country": 'sn',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live3.acangroup.org:1929/acanabr/sentv.stream_all/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCKbMNmSR3KlI9v3xeInHEYA/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Int. Otros",
            "channels": [
              {
                "name": "ABC News Australia",
                "web": "https://iview.abc.net.au/show/abc-live-stream",
                "logo": "https://graph.facebook.com/abcnews.au/picture?width=200&height=200",
                "epg_id": null,
                "country": 'au',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "United Nations TV",
                "web": "https://media.un.org/en/webtv/",
                "logo": "https://graph.facebook.com/unitednations/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Bloomberg Quicktake",
                "web": "https://www.bloomberg.com/qt/live",
                "logo": "https://yt3.googleusercontent.com/67h6bB9Vlw5SpQkWek4Uk8weqxzaPNGH76sAMK4j431Jx8JlUt8mblVlTCwseeb7rDavn3yBJA=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://www.bloomberg.com/media-manifest/streams/qt.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tastemade",
                "web": "https://watch.tastemade.com/live-tv",
                "logo": "https://graph.facebook.com/TastemadeEs/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00047-tastemade-tastemadees16international24i-ono/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00047-tastemade-tastemadeinternationalenglish24i-ono/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Fashion TV",
                "web": "https://www.fashiontv.com/#ftv_uhd",
                "logo": "https://graph.facebook.com/FTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://fashs043.cloudycdn.services/scte/pg18/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Miami TV",
                "web": "https://miamitvhd.com",
                "logo": "https://graph.facebook.com/miamitv/picture?width=200&height=200",
                "country": 'us',
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://59ec5453559f0.streamlock.net/miamitv/smil:miamitv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://59ec5453559f0.streamlock.net/Latino/smil:WEB/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://59ec5453559f0.streamlock.net/JennyLive/JennyLive/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Classic Arts Showcase",
                "web": "https://www.classicartsshowcase.org/watch-classic-arts-showcase/",
                "logo": "https://pbs.twimg.com/profile_images/956583141245775872/2en3-8Ag_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Mr Bean 24h",
                "web": "https://www.mrbean.com",
                "logo": "https://graph.facebook.com/MrBean/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCkAGrHCLFmlK3H2kd6isipg/live",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "AKC TV Dogs",
                "web": "https://akc.tv",
                "logo": "https://graph.facebook.com/WatchAKCTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://install.akctvcontrol.com/speed/broadcast/138/desktop-playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  },
                  {
                    "format": "m3u8",
                    "url": "https://install.akctvcontrol.com/speed/broadcast/141/desktop-playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Deportivos Int.",
            "channels": [
              {
                "name": "Olympic Channel TV",
                "web": "https://olympics.com/es/live/",
                "logo": "https://graph.facebook.com/olympics/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EMB"
                ]
              },
              {
                "name": "FIBA",
                "web": "https://www.livebasketball.tv/home",
                "logo": "https://graph.facebook.com/FIBA/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=YiW26xS_Sl8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "World Padel Tour",
                "web": "https://www.worldpadeltour.com/en-directo/",
                "logo": "https://graph.facebook.com/worldpadeltour/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/channel/UCK59dYVs3Wgwoe73nDTH6jw/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Redbull TV",
                "web": "https://www.redbull.com/int-en/tv/tv",
                "logo": "https://graph.facebook.com/RedBull/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Channel Fight",
                "web": "https://www.channelfight.com",
                "logo": "https://graph.facebook.com/channelfightofficial/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://api-ott.channelfight.com/loggingmediaurlpassthrough/a.m3u8?version=12&id=269&partner=TDTChannels",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Garage TV Argentina",
                "web": "http://elgarage.com",
                "logo": "https://pbs.twimg.com/profile_images/1169992187314167808/TeabGtEB_200x200.jpg",
                "epg_id": null,
                "country": 'ar',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://stream1.sersat.com/hls/garagetv.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "MsMotor TV",
                "web": "https://www.msmotor.tv",
                "logo": "https://graph.facebook.com/msmotortv/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Best Cable Sports Per\u00fa",
                "web": "https://bestcableperu.com.pe/tv6.html",
                "logo": "https://graph.facebook.com/BestCableSportsCanal6/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [],
                "contentTypes": [ContentTypesEnum.SPORTS],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              }
            ]
          },
          {
            "name": "Musicales",
            "channels": [
              {
                "name": "Sol M\u00fasica Espa\u00f1a",
                "web": "https://tuamc.tv/sol-musica",
                "logo": "https://graph.facebook.com/solmusica/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Activa TV Espa\u00f1a",
                "web": "https://www.emisorasmusicales.net/activa-tv/",
                "logo": "https://graph.facebook.com/activafm.radiomusical/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamtv.mediasector.es/hls/activatv/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Cadena Elite Espa\u00f1a",
                "web": "https://www.cadenaelite.es",
                "logo": "https://graph.facebook.com/cadena.elitegranada/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8004/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Molahits TV Espa\u00f1a",
                "web": "http://www.molatv.cat",
                "logo": "https://graph.facebook.com/molahitstv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://ventdelnord.tv:8080/mola/directe.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La Urban TV Espa\u00f1a",
                "web": "https://www.urbanrevolution.es/emision-en-directo-de-la-urban-tv/",
                "logo": "https://graph.facebook.com/fmurban/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://www.urbanrevolution.es:8443/live/TV/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Spektra TV Espa\u00f1a",
                "web": "https://spektratv.com",
                "logo": "https://graph.facebook.com/SpektraTelevision/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/8136/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "STZ Telebista Espa\u00f1a",
                "web": "https://stztelebista.com",
                "logo": "https://graph.facebook.com/StzGrupo/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REF",
                  "NONAV"
                ],
                "referer": "https://stztelebista.com"
              },
              {
                "name": "Verbena TV Espa\u00f1a",
                "web": "https://verbenafm.com",
                "logo": "https://pbs.twimg.com/profile_images/1463159511133442059/uVV15n4k_200x200.jpg",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamtv2.elitecomunicacion.cloud:3144/live/verbenatvlive.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RM TV Espa\u00f1a",
                "web": "https://rmradio.es/tv/",
                "logo": "https://graph.facebook.com/rmradio/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://limited43.todostreaming.es/live/simbana-livestream19.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTL 102.5 Italia",
                "web": "https://www.rtl.it/radiovisione",
                "logo": "https://graph.facebook.com/RTL102.5/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Virgin Radio Italia",
                "web": "https://www.virginradio.it/sezioni/1099/video",
                "logo": "https://graph.facebook.com/virginradioitaly/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live2.msr.cdn.mediaset.net/content/hls_h0_clr_vos/live/channel(ew)/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "R 101 Italia",
                "web": "https://www.r101.it/sezioni/2168/tv",
                "logo": "https://graph.facebook.com/radioR101/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live2.msr.cdn.mediaset.net/content/hls_h0_clr_vos/live/channel(er)/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": [
                  "NONAV"
                ]
              },
              {
                "name": "Radio Montecarlo Italia",
                "web": "https://www.mediasetplay.mediaset.it/programmi-tv/radiomontecarlo_b100002525",
                "logo": "https://graph.facebook.com/radiomontecarlo/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live2.msr.cdn.mediaset.net/content/hls_h0_clr_vos/live/channel(bb)/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Kronehit Austria",
                "web": "https://www.kronehit.at/",
                "logo": "https://graph.facebook.com/kronehit/picture?width=200&height=200",
                "epg_id": null,
                "country": 'at',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "QMusic Holanda",
                "web": "https://qmusic.nl/live/kijk",
                "logo": "https://graph.facebook.com/QmusicNL/picture?width=200&height=200",
                "epg_id": null,
                "country": 'nl',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://dpp-qmusicnl-live.akamaized.net/streamx/QmusicNL.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "NL"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "4FUN TV Polonia",
                "web": "https://4fun.tv",
                "logo": "https://graph.facebook.com/4FUN.TV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pl',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://stream.4fun.tv:8888/hls/4f_high/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "PL"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Tomorrowland TV",
                "web": "https://oneworldradio.tomorrowland.com",
                "logo": "https://graph.facebook.com/tomorrowland/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=dCpd6_S0rnI",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Radio Italia TV",
                "web": "https://www.radioitalia.it/radioitaliatv",
                "logo": "https://graph.facebook.com/radioitalia/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://radioitaliatv.akamaized.net/hls/live/2093117/RadioitaliaTV/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "NumberOne Turqu\u00eda",
                "web": "https://www.numberone.com.tr/2015/12/18/nr1-tv-canli-yayin/",
                "logo": "https://graph.facebook.com/Number1FM/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tr',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "m2o Italia",
                "web": "https://www.m2o.it/m2o-tv/",
                "logo": "https://graph.facebook.com/radiom2o/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "ON TV Portugal",
                "web": "https://www.onfm.pt/",
                "logo": "https://graph.facebook.com/ONFM93.8/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pt',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5ce9406b73c33.streamlock.net/ONFM/livestream/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "V2Beat TV",
                "web": "https://www.vibee.tv/webpage-player/",
                "logo": "https://graph.facebook.com/vtwobeat/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://abr.de1se01.v2beat.live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "The K-POP Korea",
                "web": "https://mtv.sbs.co.kr/channel.html",
                "logo": "https://pbs.twimg.com/profile_images/1224570939972575232/KSiGcUtU_200x200.jpg",
                "epg_id": null,
                "country": 'kr',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=JVocS7Yftw8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Power TV Turqu\u00eda",
                "web": "https://www.powerapp.com.tr/tvs/power-tvs/powertv/",
                "logo": "https://graph.facebook.com/powerapp/picture?width=200&height=200",
                "epg_id": null,
                "country": 'tr',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlists.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Rock TV Romania",
                "web": "https://www.rockfm.ro/rocktv",
                "logo": "https://graph.facebook.com/rockfmro/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ro',
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "Otto FM Italia",
                "web": "http://ottofm.com/otto-fm-tv-limpronta-digitale-degli-anni-ottanta/",
                "logo": "https://graph.facebook.com/ottofm/picture?width=200&height=200",
                "epg_id": null,
                "country": 'it',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://streaming.bitonlive.net:8080/hls/ottofm2/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "IT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ibiza Global TV",
                "web": "http://ibizaglobal.tv/live/",
                "logo": "https://graph.facebook.com/ibizaglobaltv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://ibgrtv.streaming-pro.com/hls/ibgrlive.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Sonus FM Alemania",
                "web": "http://www.sonus.fm",
                "logo": "https://graph.facebook.com/sonusfmpage/picture?width=200&height=200",
                "epg_id": null,
                "country": 'de',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://www.sonus.fm:1935/public/stream_source/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "REF",
                  "NONAV"
                ],
                "referer": "http://www.sonus.fm"
              },
              {
                "name": "DanceStar TV",
                "web": "https://dancestartv.com",
                "logo": "https://graph.facebook.com/DancestarTV/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://d3pyjh3ffabib0.cloudfront.net/scheduler/scheduleMaster/388.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "The Good Life Radio",
                "web": "https://www.youtube.com/channel/UChs0pSaEoNLV4mevBFGaoKA",
                "logo": "https://yt3.ggpht.com/a/AATXAJw_0O4Q7vmQvtqUOGDFHS3GQZaH2OKMnc3_1itvxg=s200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://youtu.be/36YnV9STBqc",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "LoFi Hip-Hop Beats Music",
                "web": "https://stzzzy.com",
                "logo": "https://pbs.twimg.com/profile_images/1155872804786466817/z1k1zxIi_200x200.jpg",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/@steezyasfvck/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Beautiful Piano Music",
                "web": "https://soothingrelaxation.com",
                "logo": "https://graph.facebook.com/SoothingRelaxation/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/live/2OM7adQl-YQ/live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "30A Music USA",
                "web": "https://30a-tv.com/30a/30a-tv-music-channel/",
                "logo": "https://graph.facebook.com/30atv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://30a-tv.com/feeds/ceftech/30atvmusic.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Vintage Music TV",
                "web": "https://vintagemusic.group/live-tv/watchvintagetv/",
                "logo": "https://graph.facebook.com/vintagemusicgroup/picture?width=200&height=200",
                "epg_id": null,
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://storage.viewtvgroup.com/vintagetv/GeneSimmonsNickyHornePresents/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Retro Plus TV Chile",
                "web": "https://www.retroplustv.com/#se%C3%B1ales",
                "logo": "https://graph.facebook.com/retroplustv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'cl',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://video06.logicahost.com.br/retroplustv/retroplustv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://video06.logicahost.com.br/retroplussenal2/retroplussenal2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "California Music Channel USA",
                "web": "https://www.cmc-tv.com",
                "logo": "https://graph.facebook.com/CaliforniaMusicChannel/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cmc-ono.amagi.tv/hls/amagi_hls_data_cmcAAAAAA-cmc-ono/CDN/playlist.m3u8?device=TDTChannels",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Retro Music TV Chequia",
                "web": "http://retromusic.cz/#retro_tv",
                "logo": "https://graph.facebook.com/retromusic/picture?width=200&height=200",
                "epg_id": null,
                "country": 'cz',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "http://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Muzzik TV Serbia",
                "web": "https://muzzik.spectar.tv/#/mts",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-6/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Rock&Roll Serbia",
                "web": "https://muzzik.spectar.tv/#/mtsclassic",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-1/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Cafe&Club Serbia",
                "web": "https://muzzik.spectar.tv/#/ccc",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-3/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Worldwide Serbia",
                "web": "https://muzzik.spectar.tv/#/wwm",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-5/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Rivijera Serbia",
                "web": "https://muzzik.spectar.tv/#/mediteraneo_muzik",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-a5/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Jeka Serbia",
                "web": "https://muzzik.spectar.tv/#/jeka",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-4/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik ZZ TV Serbia",
                "web": "https://muzzik.spectar.tv/#/wwm_africa",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-a4/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Sense Serbia",
                "web": "https://muzzik.spectar.tv/#/dB",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-7/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Glazzba Serbia",
                "web": "https://muzzik.spectar.tv/#/dfk",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-a7/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik Flashback Serbia",
                "web": "https://muzzik.spectar.tv/#/adr",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-8/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "Muzzik OKK Serbia",
                "web": "https://muzzik.spectar.tv/#/okk",
                "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                "epg_id": null,
                "country": 'rs',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://muzzik-live.morescreens.com/mts-2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "UAGLI"
                ]
              },
              {
                "name": "La Karibe\u00f1a Per\u00fa",
                "web": "https://radiokaribena.pe/videoskaribenatv/",
                "logo": "https://graph.facebook.com/LaKaribena/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Top Latino TV Per\u00fa",
                "web": "https://www.toplatino.net",
                "logo": "https://graph.facebook.com/toplatinotv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://5cefcbf58ba2e.streamlock.net:543/tltvweb/latin-tv.stream/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Onda Digital Per\u00fa",
                "web": "http://www.ondadigital.pe/",
                "logo": "https://graph.facebook.com/OndaDigitalPeru/picture?width=200&height=200",
                "epg_id": null,
                "country": 'pe',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "La Mega Mundial USA",
                "web": "https://www.lamegamundial.com",
                "logo": "https://graph.facebook.com/lamegaworldwide/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://server40.servistreaming.com:3477/stream/play.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "W3U",
                  "EXTA",
                  "NONAV"
                ]
              },
              {
                "name": "Portal Foxmix Chile",
                "web": "https://www.portalfoxmix.cl/tv/",
                "logo": "https://yt3.ggpht.com/ytc/AAUvwnj90kC8kqjZ69oiVT718JUs9iedB5o1w9cKfApo=s200",
                "epg_id": null,
                "country": 'cl',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ditty TV USA",
                "web": "https://dittytv.com/watch/",
                "logo": "https://graph.facebook.com/DittyTV/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://0ba805a2403b4660bbb05c0a210ebbdc.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/ONO_DittyTV/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Spirit TV USA",
                "web": "https://myspirit.tv",
                "logo": "https://graph.facebook.com/MySpirittv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              }
            ]
          },
          {
            "name": "Religiosos",
            "channels": [
              {
                "name": "EWTN Espa\u00f1a",
                "web": "https://ewtn.es/en-directo/",
                "logo": "https://graph.facebook.com/ewtnespanol/picture?width=200&height=200",
                "epg_id": "EWTN.TV",
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cdn3.wowza.com/1/SmVrQmZCUXZhVDgz/b3J3MFJv/hls/live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://cdn3.wowza.com/1/YW5wSWZiRGd2eFlU/bGV0aVBq/hls/live/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTV Diocesana Toledo Espa\u00f1a",
                "web": "http://rtvd.org",
                "logo": "https://pbs.twimg.com/profile_images/668768296888631296/H1frmj8P_200x200.jpg",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://live.emitstream.com/hls/5i3pxfuz4az356yu22ij/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Ecclesia COPE Espa\u00f1a",
                "web": "https://www.cope.es/religion",
                "logo": "https://graph.facebook.com/ecclesiacope/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cope-religion-video.flumotion.com/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "RTV Vida Espa\u00f1a",
                "web": "https://vidartv.com/television/",
                "logo": "https://pbs.twimg.com/profile_images/1359486927406321664/WZXLfd2h_200x200.jpg",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Solidaria TV Espa\u00f1a",
                "web": "https://es.solidariatv.com/en-vivo",
                "logo": "https://graph.facebook.com/solidariatv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://canadaremar2.todostreaming.es/live/solidariatv-webhd.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "TBN Espa\u00f1a",
                "web": "https://xn--tbnespaa-j3a.es",
                "logo": "https://graph.facebook.com/TBNEspana/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://edge.xn--tbnespaa-j3a.es/LiveApp/streams/tbnlive.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Betania TV Espa\u00f1a",
                "web": "https://www.betania.tv",
                "logo": "https://graph.facebook.com/104210188885428/picture?width=200&height=200",
                "epg_id": null,
                "country": 'es',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://player.twitch.tv/?channel=betania_tv&parent=tdtchannels.com&parent=www.tdtchannels.com",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Vatican News",
                "web": "https://www.vaticannews.va/es.html",
                "logo": "https://graph.facebook.com/vaticannews.es/picture?width=200&height=200",
                "epg_id": null,
                "country": 'va',
                "options": [
                  {
                    "format": "youtube",
                    "url": "https://www.youtube.com/watch?v=2D-wQobeZRs",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "ESNE",
                "web": "https://elsembradorministries.com/esne_deployment/tv",
                "logo": "https://graph.facebook.com/elsembradoresne/picture?width=200&height=200",
                "epg_id": null,
                "options": [],
                "extra_info": [
                  "W3U",
                  "EXTA"
                ]
              },
              {
                "name": "CBN USA",
                "web": "https://www1.cbn.com/tv/cbn-espanol",
                "logo": "https://graph.facebook.com/cbnonline/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://bcovlive-a.akamaihd.net/r21fb8503a4a74d098b798f16922b2a36/us-east-1/734546207001/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://bcliveuniv-lh.akamaihd.net/i/iptv1_1@194050/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Mar\u00eda Visi\u00f3n Mexico",
                "web": "https://www.mariavision.com/mariavisionenvivo",
                "logo": "https://graph.facebook.com/mariavision/picture?width=200&height=200",
                "epg_id": null,
                "country": 'mx',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://1601580044.rsc.cdn77.org/live/_jcn_/amlst:Mariavision/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": []
              },
              {
                "name": "Emmanuel TV Nigeria",
                "web": "https://emmanuel.tv/es/en-vivo/",
                "logo": "https://graph.facebook.com/tbjoshuaespanol/picture?width=200&height=200",
                "epg_id": null,
                "country": 'ng',
                "options": [
                  {
                    "format": "stream",
                    "url": "https://www.lightcast.com/embed/player.php?&id=39565&type=live",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  }
                ],
                "extra_info": [
                  "EMB"
                ]
              },
              {
                "name": "Redevida Brasil",
                "web": "http://www.redevida.com.br/ao-vivo",
                "logo": "https://graph.facebook.com/redevida/picture?width=200&height=200",
                "epg_id": null,
                "country": 'br',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://cvd1.cds.ebtcvd.net/live-redevida/smil:redevida.smil/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "PT"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "3ABN USA",
                "web": "https://3abnplus.tv/catalog",
                "logo": "https://graph.facebook.com/3abn.org/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://3abn-live.akamaized.net/hls/live/2010547/Latino/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": null
                  },
                  {
                    "format": "m3u8",
                    "url": "https://3abn-live.akamaized.net/hls/live/2010543/3ABN/master.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              },
              {
                "name": "JLTV USA",
                "web": "https://www.jltv.tv/watch",
                "logo": "https://graph.facebook.com/jewishlifetv/picture?width=200&height=200",
                "epg_id": null,
                "country": 'us',
                "options": [
                  {
                    "format": "m3u8",
                    "url": "https://jlt2104.cdn.nextologies.com/ebaed9568f2b8e61/ffaaf4b7e1d0e7a8/playlist.m3u8",
                    "geo2": null,
                    "res": null,
                    "lang": "EN"
                  }
                ],
                "extra_info": []
              }
            ]
          }
        ]
      }
    ],
    "updated": 1699829202
  };