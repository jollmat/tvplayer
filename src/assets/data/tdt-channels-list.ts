import { TdtChannelsDto } from "src/app/model/dto/tdt-channels-response-dto.interface";

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
                            "logo": "https://pbs.twimg.com/profile_images/1921959108862709760/fe5Tqhlh_200x200.jpg",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/la1/la1_main_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://d2jws8nf49xuk0.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-3ikffw175xm6u/La1ES.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "La 2",
                            "web": "https://www.rtve.es/play/videos/directo/la-2/",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_kqgHWySi5xprs1VFCNCX0IKNT8yXBLZC43JMoB8j0JUto=s200",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/la2/la2_main_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://d4g9wh8d4wiaw.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-crbrakk0yedqb/La2ES.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "Cuatro",
                            "web": "https://www.mitele.es/directo/cuatro",
                            "logo": "https://graph.facebook.com/cuatro/picture?width=200&height=200",
                            "epg_id": "Cuatro.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "Telecinco",
                            "web": "https://www.mitele.es/directo/telecinco",
                            "logo": "https://graph.facebook.com/tele5/picture?width=200&height=200",
                            "epg_id": "Telecinco.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "FDF",
                            "web": "https://www.mitele.es/directo/fdf",
                            "logo": "https://graph.facebook.com/factoriadeficcion/picture?width=200&height=200",
                            "epg_id": "FDF.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "Energy",
                            "web": "https://www.mitele.es/directo/energy",
                            "logo": "https://graph.facebook.com/E.EnergyTV/picture?width=200&height=200",
                            "epg_id": "Energy.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "Divinity",
                            "web": "https://www.mitele.es/directo/divinity",
                            "logo": "https://graph.facebook.com/divinityes/picture?width=200&height=200",
                            "epg_id": "Divinity.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "Be Mad",
                            "web": "https://www.mitele.es/directo/bemad",
                            "logo": "https://graph.facebook.com/BeMadTV/picture?width=200&height=200",
                            "epg_id": "Bemad.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "DMAX",
                            "web": "https://dmax.marca.com/en-directo",
                            "logo": "https://graph.facebook.com/DMAXes/picture?width=200&height=200",
                            "epg_id": "DMax.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
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
                                    "url": "https://live-edge-ff-1.cdn.enetres.net/091DB7AFBD77442B9BA2F141DCC182F5021/liveld/index.m3u8",
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
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "RNE para todos",
                            "web": "https://www.rtve.es/play/videos/directo/canales-lineales/rne-para-todos/",
                            "logo": "https://graph.facebook.com/radionacionalrne/picture?width=200&height=200",
                            "epg_id": "RNE.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6688753.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/rne/rne_para_todos_main.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
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
                            "logo": "https://pbs.twimg.com/profile_images/1450728866377568257/B8HFyLJe_200x200.jpg",
                            "epg_id": "BOM.TV",
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
                            "logo": "https://pbs.twimg.com/profile_images/1634293543987453954/mb1Rzmso_200x200.jpg",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/24h/24h_main_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://d32rw80ytx9uxs.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-vlldndmow4yre/24HES.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "Euronews",
                            "web": "https://es.euronews.com/live",
                            "logo": "https://graph.facebook.com/es.euronews/picture?width=200&height=200",
                            "epg_id": "Euronews.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://euronews-live-spa-es.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6571/bitok/eyJzdGlkIjoiMDA0YjY0NTMtYjY2MC00ZTZkLTlkNzEtMTk3YTM3ZDZhZWIxIiwibWt0IjoiZXMiLCJjaCI6NjU3MSwicHRmIjoxfQ==/26034/euronews-es.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw/live",
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
                            "name": "324",
                            "web": "https://www.3cat.cat/3cat/directes/324/",
                            "logo": "https://graph.facebook.com/324cat/picture?width=200&height=200",
                            "epg_id": "324.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-int.3catdirectes.cat/live-content/canal324-hls/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "El País",
                            "web": "https://elpais.com",
                            "logo": "https://graph.facebook.com/elpais/picture?width=200&height=200",
                            "epg_id": "ElPais.TV",
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
                            "name": "La Vanguardia",
                            "web": "https://www.lavanguardia.com",
                            "logo": "https://graph.facebook.com/LaVanguardia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UClLLRs_mFTsNT5U-DqTYAGg/live",
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
                            "name": "Agencia EFE",
                            "web": "https://www.efe.com",
                            "logo": "https://graph.facebook.com/AgenciaEFEnoticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCvJS-YNyaWyOucx8bGrHVvw/live",
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
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC1IYhBFQbBWIxirTRbcfIUw/live",
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
                            "name": "Negocios TV",
                            "web": "https://www.negocios.com/directo",
                            "logo": "https://pbs.twimg.com/profile_images/1321367703731523584/bNMmbetI_200x200.jpg",
                            "epg_id": "Negocios.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming013.gestec-video.com/hls/negociostv.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCwd8Byi93KbnsYmCcKLExvQ/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "El Confidencial",
                            "web": "https://www.elconfidencial.com/television/",
                            "logo": "https://graph.facebook.com/elconfidencial/picture?width=200&height=200",
                            "epg_id": "ElConfidencial.TV",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/tdp/tdp_main.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://d1cctoeg0n48w5.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-mnixw9wn5ugmv/TeledeporteES.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "GOL Play",
                            "web": "https://app.golstadium.com/w/golplay",
                            "logo": "https://graph.facebook.com/goltv.es/picture?width=200&height=200",
                            "epg_id": "GOL.TV",
                            "options": [],
                            "extra_info": [
                                "REG"
                            ]
                        },
                        {
                            "name": "Esport 3",
                            "web": "https://www.3cat.cat/3cat/directes/esport3/",
                            "logo": "https://graph.facebook.com/Esport3/picture?width=200&height=200",
                            "epg_id": "E3.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-origin/esport3-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-origin/esport3-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
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
                            "name": "Aragón Deporte",
                            "web": "https://www.cartv.es/aragondeporte/directo",
                            "logo": "https://graph.facebook.com/aragondeporte/picture?width=200&height=200",
                            "epg_id": "AragonD.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv-streaming.aranova.es/hls/live/adeportes_deporte5.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv.streaming.aranova.es/hls/live/adeportes_deporte6.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv.streaming.aranova.es/hls/live/adeportes_deporte1.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv.streaming.aranova.es/hls/live/adeportes_deporte2.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv.streaming.aranova.es/hls/live/adeportes_deporte3.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv.streaming.aranova.es/hls/live/adeportes_deporte4.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=aragondeporte&parent=play.tdtchannels.com",
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
                                    "url": "https://live.astreaming.es/Vinx/index.m3u8",
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
                            "name": "IB3 Esports",
                            "web": "https://ib3.org/directe",
                            "logo": "https://graph.facebook.com/EsportsIB3/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCOmWJETLyAlFrHkmccOQ-3w/live",
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
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                },
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=realmadrid&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "Barça TV",
                            "web": "https://www.fcbarcelona.es/es/culers",
                            "logo": "https://graph.facebook.com/fcbarcelona/picture?width=200&height=200",
                            "epg_id": null,
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
                            "extra_info": [
                                "REG"
                            ]
                        },
                        {
                            "name": "Betis TV",
                            "web": "https://www.realbetisbalompie.es/rtvbetis/directo-tv/",
                            "logo": "https://graph.facebook.com/realbetisbalompie/picture?width=200&height=200",
                            "epg_id": "Betis.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Real Sociedad TV",
                            "web": "https://www.realsociedad.eus/es/noticias",
                            "logo": "https://graph.facebook.com/RealSociedadFutbol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCfeqewEKWQ8CXY8OiXoMxxw/live",
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
                            "name": "RCD Espanyol de Barcelona TV",
                            "web": "https://www.rcdespanyol.com",
                            "logo": "https://graph.facebook.com/RCDEspanyol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UClywhnD01yUU5kO6OgAeHUQ/live",
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
                            "name": "Cádiz CF TV",
                            "web": "https://tv.cadizcf.com/24h",
                            "logo": "https://graph.facebook.com/cadizclubdefutbol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "RCD Mallorca TV",
                            "web": "https://www.rcdmallorca.es/videos",
                            "logo": "https://graph.facebook.com/RCDMallorcaOficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/c/OficialRCDMallorca/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "MARCA",
                            "web": "https://www.marca.com",
                            "logo": "https://graph.facebook.com/MARCA/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCop57Z1sYHrtCyxCpE2z2Bg/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=diariomarca&parent=play.tdtchannels.com",
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
                            "name": "AS",
                            "web": "https://as.com",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_kKno7gC768MJ_rt67CNI107Zhs5157wEvhg2AQwkvQBgk=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/diarioas/live",
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
                            "name": "El 10 del Barça",
                            "web": "https://xn--el10delbara-v9a.com",
                            "logo": "https://graph.facebook.com/El10delBarsa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC4eDUzl7Ik9TlkltsqCXvDA/live",
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
                            "name": "Kings League",
                            "web": "https://www.twitch.tv/kingsleague",
                            "logo": "https://graph.facebook.com/kingsleague.pro/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=kingsleague&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCtwslQPB_xJfaFuZv0OETNw/live",
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
                            "name": "A1 Padel 24h",
                            "web": "https://www.mitele.es/directo/a1-padel-24h/",
                            "logo": "https://graph.facebook.com/A1PadelOfficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
                            ]
                        },
                        {
                            "name": "OKLIGA TV",
                            "web": "https://okliga.tv",
                            "logo": "https://yt3.ggpht.com/ytc/AKedOLRCpkRZNcBfZLGvM1SO_Qf77p_xtv6OnU26aa23Vw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC6RLLzXQJWy1yCAEysy1Wgw/live",
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
                            "name": "FedHielo TV",
                            "web": "https://www.rfedh.es/fedhielo-tv/",
                            "logo": "https://graph.facebook.com/fedhielo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCuys7LUNfFcwwToSG3yMocw/live",
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
                            "name": "Mundo Náutica",
                            "web": "https://mundonautica.tv",
                            "logo": "https://graph.facebook.com/MundoNautica/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16105&live=1$avod=0&hls_marker=1&pod_duration=120&position=preroll&app_bundle=com.streamingconnect.viva&app_domain=mirametv.live&app_category=linear_tv&content_channel=mundonautica&content_genre=WaterSports,Sailing,Surfing,Advent&content_rating=TV-G&content_network=streamingconnect&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&ssai_enabled=1&content_cat=IAB17&min_ad_duration=6&max_ad_duration=120&content_id=mirametv_live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Futsalmafer.tv",
                            "web": "https://canalsports.tv/directo-24-horas/",
                            "logo": "https://graph.facebook.com/futsalmafer.tv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://play.agenciastreaming.com:8081/futsalmafertv/index.m3u8",
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
                    "name": "Infantiles",
                    "channels": [
                        {
                            "name": "Boing",
                            "web": "https://www.mitele.es/directo/boing",
                            "logo": "https://graph.facebook.com/boinges/picture?width=200&height=200",
                            "epg_id": "Boing.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "GEO"
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/clan/clan_main_dvr.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://dum8zv1rbdjj2.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-x6uutpgph4tpt/ClanES.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "SX3",
                            "web": "https://www.3cat.cat/3cat/directes/sx3/",
                            "logo": "https://graph.facebook.com/SomSX3/picture?width=200&height=200",
                            "epg_id": "SX3.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-content/super3-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-content/super3-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
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
                            "name": "Disney Channel",
                            "web": "https://www.youtube.com/@disneychannelES/streams",
                            "logo": "https://graph.facebook.com/DisneyChannelES/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCayRpbmAiiuU50OpDPVSjwA/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://youtu.be/WS_wcxPWELE",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://youtu.be/XClKCjTCwVc",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://youtu.be/er_-VbYJhxQ",
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
                            "name": "Pocoyó",
                            "web": "https://www.pocoyo.com",
                            "logo": "https://graph.facebook.com/pocoyo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCnB5W_ZJgiDFnklejRGADxw/live",
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
                            "name": "Warner Bros Kids",
                            "web": "https://www.wbkidsgo.com",
                            "logo": "https://graph.facebook.com/WarnerBrosPicturesEspana/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCB82v6uKp1S-I-DVoL2neDA/live",
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
                            "name": "Cartoon Network Latino",
                            "web": "https://cnapp.cartoonnetworkla.com/now/freelive1",
                            "logo": "https://graph.facebook.com/cartoonnetwork/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCQySZQ6rrgJXRuonMwIIGMA/live",
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
                            "name": "Nickelodeon",
                            "web": "https://www.youtube.com/@NickelodeonEnEspanol",
                            "logo": "https://pbs.twimg.com/profile_images/1638227003668328451/e432Akk3_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCNeq3Obf4zOv5rhORI8Vz5g/live",
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
                            "name": "Bluey",
                            "web": "https://www.bluey.tv/watch/",
                            "logo": "https://graph.facebook.com/OfficialBlueyTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCYvpkMpzo1S_rmcj2Axmbig/live",
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
                            "name": "ZAZ TV",
                            "web": "https://www.zaztv.com",
                            "logo": "https://yt3.googleusercontent.com/-DMt5SrP3ObIrid5EHGZLUebeQLvRZeA64LWW3DaWd75gtK_JHjCe22Mn4EuxdlFa_EzqReCVg=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16110&live=1&avod=0&hls_marker=1&pod_duration=120&ssai_enabled=1&content_network=streamingconnect&position=preroll&app_bundle=com.streamingconnect.viva&app_domain=mirametv.live&app_category=linear_tv&content_cat=IAB9-11,IAB1-7,IAB1&content_channel=zaztv&content_genre=tv_broadcaster&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&content_id=mirametv_live&min_ad_duration=6&max_ad_duration=120",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "What a Toon TV",
                            "web": "https://www.whatatoon.com",
                            "logo": "https://yt3.googleusercontent.com/Q8ajooLoUcC8rieersHieiDPHToDjytGCrECP_DxknEPRfnQgMdwcQ22ncDGuf4CffgEcpJaDw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16111&live=1&avod=0&hls_marker=1&pod_duration=120&ssai_enabled=1&content_network=streamingconnect&position=preroll&app_bundle=com.streamingconnect.viva&app_domain=mirametv.live&app_category=linear_tv&content_cat=IAB9-11,IAB1-7,IAB1&content_channel=zaztv&content_genre=tv_broadcaster&content_id=mirametv_live&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&min_ad_duration=6&max_ad_duration=120&ifa_type=[IFA_TYPE]",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
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
                                    "url": "https://www.youtube.com/channel/UCP-Ng5SXUEt0VE-TXqRdL6g/live",
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
                                    "url": "https://www.youtube.com/channel/UCC9R-cxQeOpPhq2lAru0V8w/live",
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
                                    "url": "https://www.youtube.com/channel/UCHicabXz9rUMWLcdMqBtbxQ/live",
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
                            "name": "Masha y el Oso",
                            "web": "https://www.youtube.com/@MashaOso",
                            "logo": "https://yt3.googleusercontent.com/gezE4GxPlSR2m2fQ16uL9qZKHhA8YXfHEOQ3-eLu8KadN55AzPSC9Z_ATsjesQBDrpuQXT_J1hY=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCuSo4gcgxJRf4Bzu43wwVyg/live",
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
                            "name": "+tdp",
                            "web": "https://www.rtve.es/play/videos/directo/deportes/",
                            "logo": "https://graph.facebook.com/teledeporteRTVE/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712432.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712453.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712402.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712407.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712431.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712410.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712426.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712411.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6712456.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "¡HOLA! Play",
                            "web": "https://www.hola.com/tv/",
                            "logo": "https://yt3.ggpht.com/ytc/AMLnZu_Hd2WYs49wYCBMAphVpvvpBzd-EJFU8XFQgccPIw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://hola-play-2108fd06-86d4-44e8-9867-c35b4895a1c1-es.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6433/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Conciertos Radio 3 (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/canales-rtve/conciertos-radio-3/",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_Conciertos_R3.TV",
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
                            "name": "Cuéntame (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-cuentame/",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_Cuentame.TV",
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
                            "name": "La promesa (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-promesa/",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_Promesa.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/2472039.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "La Revuelta (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-larevuelta/",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_Epoca.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/16464388.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Saber y ganar (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/play-saberyganar",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_Series.TV",
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
                            "name": "Somos Cine (RTVE)",
                            "web": "https://www.rtve.es/play/videos/directo/canales-rtve/play-cine/",
                            "logo": "https://graph.facebook.com/rtveplay/picture?width=200&height=200",
                            "epg_id": "RTVE_SomosCine.TV",
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
                            "name": "Comedia (Mediaset Infinity)",
                            "web": "https://www.mitele.es/directo/mitele-comedia/",
                            "logo": "https://graph.facebook.com/MediasetInfinity/picture?width=200&height=200",
                            "epg_id": "Mitele_Comedia.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "En la calle (Mediaset Infinity)",
                            "web": "https://www.mitele.es/directo/mitele-en-la-calle/",
                            "logo": "https://graph.facebook.com/MediasetInfinity/picture?width=200&height=200",
                            "epg_id": "Mitele_Calle.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Top Series (Mediaset Infinity)",
                            "web": "https://www.mitele.es/directo/mitele-top-series/",
                            "logo": "https://graph.facebook.com/MediasetInfinity/picture?width=200&height=200",
                            "epg_id": "Mitele_Series.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Viajes (Mediaset Infinity)",
                            "web": "https://www.mitele.es/directo/mitele-viajes/",
                            "logo": "https://graph.facebook.com/MediasetInfinity/picture?width=200&height=200",
                            "epg_id": "Mitele_Viajes.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Canal Quickie",
                            "web": "https://linktr.ee/canalquickie",
                            "logo": "https://pbs.twimg.com/profile_images/1838908963850481665/Cuhce_U0_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=canalquickie&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCCuPIAKDI8wp-WD0wiFXa7g/live",
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
                            "web": "https://www.congreso.es/es/congreso-en-directo",
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
                            "name": "La Moncloa (Presidente)",
                            "web": "https://www.lamoncloa.gob.es/multimedia/videos/presidente/Paginas/2020/directo.aspx",
                            "logo": "https://graph.facebook.com/PalaciodelaMoncloa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnswitch-mediahub.overon.es/stream/stream.m3u8?key=R6w5wbcxW3dLF9aNOGEsHuoNhqfSJoiRWNDWLLfNslI&pwd=QheEdHkaeHFGDHJgIwzUDoqcVjjFMef8TMGuGvkMets&stream=y3-IxQxNk4XjlfJDtBjIh7tfO628d9gbkd010uKioms&output=ginkIjHWeyffMLRZNMVovht3RnH_feedjshkMm7sr14&channel=D1tXjvcs_5NeEEMxP6mrmSggh3Uyu3kE5jyqGlgCZ4A&protocol=4CMm-Q0epGZ0SHQGeELoqqA2gfzFVCFwoiACYszyPM4&type=3pIgQ1TALsxZg7Zf0kZLkA4InWPfKONROAImuoufxKg",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "La Moncloa (Ministros)",
                            "web": "https://www.lamoncloa.gob.es/multimedia/videos/consejoministros/Paginas/index.aspx",
                            "logo": "https://graph.facebook.com/PalaciodelaMoncloa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnswitch-mediahub.overon.es/stream/stream.m3u8?key=R6w5wbcxW3dLF9aNOGEsHuoNhqfSJoiRWNDWLLfNslI&pwd=QheEdHkaeHFGDHJgIwzUDoqcVjjFMef8TMGuGvkMets&stream=o0RCNMRf-BPdBiuDSId7vbxANj4YFVpbXkxNkFKm35s&output=z3mwepuDBMOnja63VsgAcCGwmmOPD-I5yFYOiyCvBcc&channel=FBDoImE2NP77XpNbdycjnwCkI0YjxLeqTKr8QGV9bAI&protocol=4CMm-Q0epGZ0SHQGeELoqqA2gfzFVCFwoiACYszyPM4&type=3pIgQ1TALsxZg7Zf0kZLkA4InWPfKONROAImuoufxKg",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Senado",
                            "web": "https://www.senado.es/web/actividadparlamentaria/actualidad/senadoendirecto/index.html",
                            "logo": "https://pbs.twimg.com/profile_images/1915674659594420224/qKUnga8L_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://senadolive.akamaized.net/hls/live/2006589/punto7/master.m3u8",
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
                            "epg_id": "RNE.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6982891.m3u8",
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
                            "epg_id": "RNE_Radio3.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6982918.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Onda Cero",
                            "web": "https://www.ondacero.es",
                            "logo": "https://graph.facebook.com/ondacero/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://atres-live.ondacero.es/h264/live/obs/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "COPE",
                            "web": "https://www.cope.es/directos/video",
                            "logo": "https://graph.facebook.com/COPE/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://hls-directo01-cope-stream.flumotion.com/playlist.m3u8",
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
                    "name": "Streaming",
                    "channels": [
                        {
                            "name": "Ibai",
                            "web": "https://www.twitch.tv/ibai",
                            "logo": "https://graph.facebook.com/realibai/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=ibai&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@IbaiLlanos",
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
                            "name": "Auronplay",
                            "web": "https://www.twitch.tv/auronplay",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJUPEKR92FAWkKk7XniD6J5Zdy5b-BH0u02P5LDAMw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=auronplay&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@AuronPlay",
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
                            "name": "TheGrefg",
                            "web": "https://www.twitch.tv/thegrefg",
                            "logo": "https://pbs.twimg.com/profile_images/1763308910692184064/PD37Hou2_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=thegrefg&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@TheGrefg",
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
                            "name": "Rubius",
                            "web": "https://www.twitch.tv/rubius",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJUK-iBPKMsn6Ql-CW7tnirEnh6GWrmRLpTG9OluyWA=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=Rubius&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@elrubiusOMG",
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
                            "name": "Gerard Romero",
                            "web": "https://www.twitch.tv/gerardromero",
                            "logo": "https://yt3.ggpht.com/1jxaHxZeE4bS01S1wGdRpkR_4vPpvstqTPUoViCqZ5W6jO7HF0eBR_nkBjzGCAy65fO-sggX=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=gerardromero&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@GerardRomerotv",
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
                            "name": "Illojuan",
                            "web": "https://www.twitch.tv/illojuan",
                            "logo": "https://yt3.ggpht.com/WjoCU8JYUqibZEkKfyyqqcJQuu_OVeabYAdg-DHoVoIKeHNF7_6yMuavIV4m3bqHS5fWPUMBsGc=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=Illojuan&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@IlloJuan_",
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
                            "name": "Elxokas",
                            "web": "https://www.twitch.tv/elxokas",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJWZJXM8TB4P4cdyZdxF5B4tQFHCyzBZwOoxEwdM1A=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=elxokas&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@elxokas",
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
                            "name": "Guanyar",
                            "web": "https://www.twitch.tv/guanyar",
                            "logo": "https://yt3.googleusercontent.com/A3M8gNtFArvocv-EytF1buhnRq_athwchwpJ5cJn742R-Q2DK4nSShkzaWBjvCPqVnQ2CTJc=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=guanyar&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@GUANYAR",
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
                            "name": "IamCristinini",
                            "web": "https://www.twitch.tv/iamcristinini",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJW0v2dloqL3xrStQYfxTrMUH_fD9IJhJ3SdpAzgFw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=iamcristinini&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@Cristinini",
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
                            "name": "biyin_",
                            "web": "https://www.twitch.tv/biyin_",
                            "logo": "https://graph.facebook.com/Biyins/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=biyin_&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@_biyin",
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
                            "name": "Mixwell",
                            "web": "https://www.twitch.tv/mixwell",
                            "logo": "https://yt3.googleusercontent.com/veolbCFG2UsAiiq0SUFoz5dluY4wZ8rPHOwjtGB2ofWX-uWAkMr9UccYlAYfpEGO8OpkC9oHGA=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=mixwell&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/UClc-WtzXW7a9hn1tflskRoA/live",
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
                            "name": "Juansguarnizo",
                            "web": "https://www.twitch.tv/juansguarnizo",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJXIHF_Oc2KsUnn62RutoClTgrWxcXXHfG6zwCnYjA=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=juansguarnizo&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@JuanSGuarnizo",
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
                            "name": "Knekro",
                            "web": "https://www.twitch.tv/knekro",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_njzAxPADBPZUY4IOKiewazHI399fwe5c6NkU8fEHOwZw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=knekro&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/KNekroGamer",
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
                            "name": "LOLITOFDEZ",
                            "web": "https://www.twitch.tv/lolitofdez",
                            "logo": "https://yt3.ggpht.com/mKpJl4-mVy59lPn3X_gv1gfsufVK4yecUoW7_YAzgPMgNg04me10zA1q7B11A8Vw2dAxVY9E6A=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=lolitofdez&parent=play.tdtchannels.com",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@LOLiTOFDEZ",
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
                    "name": "Andalucía",
                    "channels": [
                        {
                            "name": "Canal Sur Andalucía",
                            "web": "https://www.canalsurmas.es/videos/131772-canal-sur-andalucia",
                            "logo": "https://graph.facebook.com/canalsurradioytv/picture?width=200&height=200",
                            "epg_id": "CanalSurA.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live-24-canalsur.interactvty.pro/9bb0f4edcb8946e79f5017ddca6c02b0/26af5488cda642ed2eddd27a6328c93b9c03e9181b9d0a825147a7d978e69202.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://dfk2a268yviz9.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-ddiii1m6jt6of/CanalSurAndaluciaES.m3u8",
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
                            "web": "https://www.canalsurmas.es/videos/77595-canal-sur-2-accesible",
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
                            "name": "Canal Sur Más Noticias",
                            "web": "https://www.canalsurmas.es/videos/131524-canal-sur-mas-live-14",
                            "logo": "https://graph.facebook.com/CanalSurNoticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnlive.codev8.net/rtvalive/smil:channel42.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Jerez TV",
                            "web": "https://jereztelevision.com",
                            "logo": "https://graph.facebook.com/jerez.television/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCHVquS6wXQAsESO2bwZ7esw/live",
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
                            "name": "101TV Málaga",
                            "web": "https://www.101tv.es/endirecto101tv/",
                            "logo": "https://graph.facebook.com/101tvmalaga/picture?width=200&height=200",
                            "epg_id": "101Malaga.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/101televisionlive/smil:rtmp01.smil/playlist.m3u8?DVR",
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
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Onda Cádiz",
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
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCpOz3CN6mDlxkE7-m5AS1aQ/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://ondacadiztv.es:30443/octv/24h/playlist.m3u8",
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
                            "name": "Huelva TV",
                            "web": "https://alacarta.huelvatv.com/directo/",
                            "logo": "https://graph.facebook.com/HuelvaTelevision/picture?width=200&height=200",
                            "epg_id": "HuelvaTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://htv5router.ddns.net/memfs/a6ee6a17-7512-4a6c-ae30-53471b4505c3.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Andalucía Cocina",
                            "web": "https://vivaespaña.tv/user/live-tv/ch201-andalucia-cocina/11",
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
                            "name": "Andalucía Turismo",
                            "web": "https://xn--vivaespaa-s6a.tv/user/live-tv/ch200-andalucia-turismo/12",
                            "logo": "https://yt3.googleusercontent.com/ytc/APkrFKYsl5e6jEIMtXIoTUHvkJqXxDfASrvQP_QFRRww=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?&network_id=12685&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "8TV Sierra de Cádiz",
                            "web": "https://8cadiz.es/directo-sierra/",
                            "logo": "https://graph.facebook.com/8tvChiclana/picture?width=200&height=200",
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
                            "name": "8TV Chiclana",
                            "web": "https://8cadiz.es/directo-chiclana/",
                            "logo": "https://graph.facebook.com/8tvChiclana/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://s.emisoras.tv:8081/chiclana/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "M95 Marbella",
                            "web": "http://m95tv.es",
                            "logo": "https://graph.facebook.com/m95tvmarbella/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited2.todostreaming.es/live/m95-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "PTV Málaga",
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
                                "UAGB"
                            ]
                        },
                        {
                            "name": "7TV Andalucía",
                            "web": "https://7tvandalucia.es",
                            "logo": "https://graph.facebook.com/7TelevisionAndalucia/picture?width=200&height=200",
                            "epg_id": "7Andalucia.TV",
                            "options": [],
                            "extra_info": [
                                "REG"
                            ]
                        },
                        {
                            "name": "Tuya La Janda TV",
                            "web": "https://tuyatv.com/directo/",
                            "logo": "https://graph.facebook.com/tuyalajandatv/picture?width=200&height=200",
                            "epg_id": "TuyaLaJanda.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://play.agenciastreaming.com:8081/tuyaespana/index.m3u8",
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
                            "name": "Costa Noroeste TV",
                            "web": "https://www.costanoroestetv.net",
                            "logo": "https://graph.facebook.com/Costanoroestetv/picture?width=200&height=200",
                            "epg_id": "CostaNO.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited31.todostreaming.es/live/noroestetv-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Teleonuba",
                            "web": "https://www.teleonuba.es/en-directo/",
                            "logo": "https://graph.facebook.com/Teleonuba/picture?width=200&height=200",
                            "epg_id": "Teleonuba.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5f71743aa95e4.streamlock.net:1936/Teleonuba/endirecto/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Córdoba TV",
                            "web": "https://www.cordoba-tv.com/en-directo",
                            "logo": "https://graph.facebook.com/cordobatvonline/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "101TV Sevilla",
                            "web": "https://www.101tv.es/sevilla/directosevilla/",
                            "logo": "https://graph.facebook.com/101TVSevilla/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/101televisionlive/smil:rtmp02.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCfNy1pSiPIhs0LxRpVeqeRA/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "CanalCosta",
                            "web": "https://www.canalcostatv.es",
                            "logo": "https://graph.facebook.com/canalcosta/picture?width=200&height=200",
                            "epg_id": "CanalCosta.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5f71743aa95e4.streamlock.net:1936/CanalcostaTV/endirecto/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Condavisión",
                            "web": "https://www.condavision.es",
                            "logo": "https://graph.facebook.com/condavision/picture?width=200&height=200",
                            "epg_id": "Condavision.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5f71743aa95e4.streamlock.net:1936/Condavision/endirecto/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Doñana",
                            "web": "https://www.canaldonana.com",
                            "logo": "https://graph.facebook.com/donanacomunica/picture?width=200&height=200",
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
                            "name": "Uvitel TV",
                            "web": "https://uvitelonline.com/en-directo/",
                            "logo": "https://graph.facebook.com/uviteltv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Cadena Joven TV",
                            "web": "https://cadenajoven.es/cadenajoven_tv/",
                            "logo": "https://graph.facebook.com/cadenajovendigital/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streamtv2.elitecomunicacion.cloud:3738/live/cadenajoventvlive.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Interalmería TV",
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
                            "name": "Almería 24h TV",
                            "web": "https://www.almeria24htv.com",
                            "logo": "https://graph.facebook.com/107654981928274/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://broadcast.radioponiente.org:9443/live/smil:almeria24h.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
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
                            "name": "Axarquía TV",
                            "web": "https://www.youtube.com/channel/UC0N3U1saaQQWMt2rRPbU0DQ",
                            "logo": "https://graph.facebook.com/AxarquiaTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC0N3U1saaQQWMt2rRPbU0DQ/live",
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
                            "name": "Más Jerez",
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
                            "name": "TV Centro Andalucía",
                            "web": "https://tvcentroandalucia.com",
                            "logo": "https://graph.facebook.com/TVCentroAndalucia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://video0.rogohosting.com:19360/8050/8050.m3u8",
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
                            "name": "Canal San Roque",
                            "web": "https://tv.multimediasanroque.com/videos/12315-san-roque-directo",
                            "logo": "https://yt3.googleusercontent.com/6SgTMpyVCJlMGBcip6gvloYy2u-BP4vY-H2paJ2zO471owJq_YcgPhUUB0tBaKIKlNUKzeRf=s200",
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
                            "name": "Televisión Alhaurín",
                            "web": "https://rtvalhaurinelgrande.com",
                            "logo": "https://graph.facebook.com/Rtvalhaurin/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=13354&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Luz Televisión",
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
                            "name": "TeleQuivir",
                            "web": "https://vegadigital.es",
                            "logo": "https://graph.facebook.com/telequivirtv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=telequivir&parent=play.tdtchannels.com",
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
                            "name": "101TV Antequera",
                            "web": "https://www.101tv.es/antequera/directo-antequera/",
                            "logo": "https://graph.facebook.com/101tvAntequera/picture?width=200&height=200",
                            "epg_id": "101Antequera.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.streaming101tv.es:19360/antequera/antequera.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
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
                                "UAGB"
                            ]
                        },
                        {
                            "name": "Torremolinos TV",
                            "web": "https://torremolinostv.com/tv-en-directo/",
                            "logo": "https://graph.facebook.com/torremolinostv/picture?width=200&height=200",
                            "epg_id": "Torrevision.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnlivevlc.codev8.net/canaltorremolinoslive/smil:channel1.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
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
                            "extra_info": []
                        },
                        {
                            "name": "Telécija",
                            "web": "https://ecijadigital.es",
                            "logo": "https://graph.facebook.com/telecija.televisioncomarcal/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=telecija&parent=play.tdtchannels.com",
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
                            "name": "TG7",
                            "web": "https://www.granada.org/inet/tg7.nsf/byclave/endirecto",
                            "logo": "https://graph.facebook.com/TG7tv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC4svqJ0E5nUlvjo_fuzvjzA/live",
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
                            "name": "RTV Tarifa",
                            "web": "https://www.facebook.com/RTVTARIFA/",
                            "logo": "https://graph.facebook.com/RTVTARIFA/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCx5_sA41mFHsZio4umTH3Qw/live",
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
                            "name": "Sal TV",
                            "web": "https://www.saltv.es/programacion/",
                            "logo": "https://graph.facebook.com/SalTelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://play.agenciastreaming.com:8081/saltv/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Manilva TV",
                            "web": "https://www.rtvmanilva.com/tvdirecto/",
                            "logo": "https://graph.facebook.com/rtvmanilva/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.castr.com/627a72d21914543be01c1720/live_e2ae1780dc2a11eca660b7b17b7952a5/tracks-v1a1/mono.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "NONAV",
                                "REFC1"
                            ],
                            "referer": "https://player.castr.com/"
                        },
                        {
                            "name": "Canal Málaga",
                            "web": "https://www.canalmalaga.es/tv-directo",
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
                            "name": "101TV Axarquía",
                            "web": "https://www.101tv.es/directo-axarquia-almijara/",
                            "logo": "https://graph.facebook.com/101Axarquia/picture?width=200&height=200",
                            "epg_id": "101Axarquía.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.streaming101tv.es:19360/axarquia/axarquia.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "9 la Loma TV",
                            "web": "https://9laloma.tv/directo/",
                            "logo": "https://graph.facebook.com/9laloma/picture?width=200&height=200",
                            "epg_id": "9LaLoma.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://9laloma.tv/live.m3u8",
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
                            "name": "Écija Comarca TV",
                            "web": "https://tvm.ecija.es",
                            "logo": "https://graph.facebook.com/ecijacomarcatelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCXwvKOSEF5TK1Y8TMq1pzNA/live",
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
                                "UAGB"
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
                                    "url": "https://streaming004.gestec-video.com/hls/FTV.m3u8",
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
                                "UAGB"
                            ]
                        },
                        {
                            "name": "PTV Córdoba",
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
                                "UAGB"
                            ]
                        },
                        {
                            "name": "TV Carmona",
                            "web": "https://www.televisioncarmona.com",
                            "logo": "https://graph.facebook.com/126011457417096/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://youtu.be/I7GQdc7J2Xs",
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
                            "name": "MIRA TV",
                            "web": "https://www.elmira.es/miratv/",
                            "logo": "https://graph.facebook.com/miratelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "101TV Cádiz",
                            "web": "https://www.101tv.es/directocadiz/",
                            "logo": "https://graph.facebook.com/101tvAntequera/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.streaming101tv.es:19360/cadiz/cadiz.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Coín",
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
                            "name": "Diez TV Andújar",
                            "web": "https://dieztv.es/dieztv-andujar-directo/",
                            "logo": "https://graph.facebook.com/dieztv/picture?width=200&height=200",
                            "epg_id": "DiezTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming.cloud.innovasur.es/mmj_andujar/index.m3u8",
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
                            "name": "Diez TV Úbeda",
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
                            "name": "TVM Córdoba",
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
                            "name": "101TV Costa del Sol",
                            "web": "https://www.101tv.es/directo-costadelsol/",
                            "logo": "https://graph.facebook.com/101tvmalaga/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/101weblive/smil:sol.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "101TV Granada",
                            "web": "https://www.101tv.es/directo-granada/",
                            "logo": "https://graph.facebook.com/101tvgranada/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/101weblive/smil:granada.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "101TV Ronda",
                            "web": "https://www.101tv.es/directo101tvronda/",
                            "logo": "https://graph.facebook.com/101tvmalaga/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.streaming101tv.es:19360/ronda/ronda.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Cancionero TV",
                            "web": "http://37.130.151.51/cancionerotv/index.html",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_nKBwD3C_DqADS-cD9choTd0NDkCsF_EcNtXWmFd7XDQw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "http://37.130.151.51/hls1/cancionero.m3u8",
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
                            "name": "PTV Almería",
                            "web": "https://ptvtelecom.com/canales/almeria.html",
                            "logo": "https://pbs.twimg.com/profile_images/1612490465005142019/AU1R7Q6q_200x200.jpg",
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
                                "UAGB"
                            ]
                        },
                        {
                            "name": "Cofradias 24h",
                            "web": "https://www.youtube.com/@LIBETELTV",
                            "logo": "https://yt3.ggpht.com/eM_41EMbfLT9omch7MIGSlwg71gjSrsrPpS7TuBlFjYXLrC5pIIx8zx9SJ0q2Gvf2Gj3nblYFAw=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCv5WgSisSDgI90g8-E5rU7Q/live",
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
                            "name": "Parlamento de Andalucía",
                            "web": "https://www.parlamentodeandalucia.es/stream/canal4.html",
                            "logo": "https://graph.facebook.com/parlamentodeandalucia.es/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream1.parlamentodeandalucia.es/realizacion1/realizacion1/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://stream2.parlamentodeandalucia.es/realizacion2/realizacion2/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://stream2.parlamentodeandalucia.es/realizacion3/realizacion3/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://stream2.parlamentodeandalucia.es/realizacion4/realizacion4/playlist.m3u8",
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
                    "name": "Aragón",
                    "channels": [
                        {
                            "name": "Aragón TV",
                            "web": "https://www.aragontelevision.es/directo",
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
                            "name": "Aragón Noticias",
                            "web": "https://www.cartv.es/aragonnoticias/directo",
                            "logo": "https://graph.facebook.com/AragonNoticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cartv-streaming.aranova.es/hls/live/anoticias_canal3.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Calamocha TV",
                            "web": "https://www.mijilocatv.es",
                            "logo": "https://graph.facebook.com/CalamochaTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCl03PpRWoRjkiK5VT4uDKgA/live",
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
                            "name": "Canal 25 Barbastro TV",
                            "web": "https://www.canal25tv.es/index.php/ct-menu-item-5",
                            "logo": "https://graph.facebook.com/tvbarbastro/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited49.todostreaming.es/live/tvbarbastro-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Antena Aragón",
                            "web": "https://diarioaragones.com",
                            "logo": "https://yt3.ggpht.com/ytc/AL5GRJWC1oJVC1hgcGBN1OHnroVVoe_pcgLvGJWvOA8aGQ=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCk4-yZ_grYVb2N4ZcAnCApA/live",
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
                            "name": "Cortes de Aragón",
                            "web": "https://www.cortesaragon.es",
                            "logo": "https://graph.facebook.com/@cortesdearagon/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCyBXbc0UicHRPJLmHppjpgQ/live",
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
                                    "url": "https://www.youtube.com/channel/UCTQrUTmzCWIfG6h4EVCdOCQ/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 1 Canarias",
                            "web": "https://www.rtve.es/play/videos/directo/tve-canarias/",
                            "logo": "https://pbs.twimg.com/profile_images/1921959108862709760/fe5Tqhlh_200x200.jpg",
                            "epg_id": "La1_CAN.TV",
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
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_kqgHWySi5xprs1VFCNCX0IKNT8yXBLZC43JMoB8j0JUto=s200",
                            "epg_id": "La2_CAN.TV",
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
                            "logo": "https://pbs.twimg.com/profile_images/1634293543987453954/mb1Rzmso_200x200.jpg",
                            "epg_id": "24H_CAN.TV",
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
                            "name": "Mírame TV",
                            "web": "https://mirametv.com",
                            "logo": "https://graph.facebook.com/mirametvcom/picture?width=200&height=200",
                            "epg_id": "MirameTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16100&live=1&avod=0&hls_marker=1&position=preroll&pod_duration=120&app_bundle=com.streamingconnect.viva&ssai_enabled=true&content_channel=mirametv&app_domain=mirametv.live&app_category=linear_tv&content_cat=IAB1&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&min_ad_duration=6&max_ad_duration=120&content_id=mirametv_live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "GranCanariaTV.com",
                            "web": "https://www.grancanariatv.com",
                            "logo": "https://pbs.twimg.com/profile_images/1274358153921138695/yLxVSp3h_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCDdnBGLNmifjQqHjAA_DUrA/live",
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
                            "name": "Canal 4 Tenerife",
                            "web": "https://www.canal4tenerife.tv/directo/",
                            "logo": "https://graph.facebook.com/CANAL4TENERIFE/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://videoserver.tmcreativos.com:19360/ccxwhsfcnq/ccxwhsfcnq.m3u8",
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
                            "logo": "https://graph.facebook.com/LancelotTelevision/picture?width=200&height=200",
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
                            "name": "Tenerife Plus+ TV",
                            "web": "https://www.tenerifeplus.tv",
                            "logo": "https://graph.facebook.com/tenerifeplustv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://k20.usastreams.com:8081/tenerifeplus/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "NORTEvisión",
                            "web": "https://nortevision.es/directo/",
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
                            "name": "RTV Mogán",
                            "web": "https://www.mogan.es/45-radio-television-de-mogan/3382-ver-television-mogan",
                            "logo": "https://graph.facebook.com/radiotelevisionmogan/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cloudvideo.servers10.com:8081/8028/index.m3u8",
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
                            "logo": "https://yt3.ggpht.com/qj92f7GsPI7R-YCYzsFj5mDoSCduHSgh8lwCWHFXbHAx6rNmLsB78RZlmfiqbjYzQdNh1Fj9sQ=s200",
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
                            "name": "Noroeste TV",
                            "web": "https://sites.google.com/view/noroestetv/inicio",
                            "logo": "https://graph.facebook.com/noroestetvladesiempre/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.castr.com/5d1f649bed75c92e40481734/live_3d6f3020fbdb11ed9485b7b343349a02/index.fmp4.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "NONAV",
                                "REFC1"
                            ],
                            "referer": "https://player.castr.com/"
                        },
                        {
                            "name": "Factoría de Carnaval",
                            "web": "https://multicarnaval.com",
                            "logo": "https://pbs.twimg.com/profile_images/1498617906560737281/iOri7Ujk_200x200.jpg",
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
                        },
                        {
                            "name": "Parlamento de Canarias",
                            "web": "https://www.parcan.es",
                            "logo": "https://graph.facebook.com/parlamentodecanarias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCv7xnuWoLWJNEXNWIGkP19g/live",
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
                    "name": "Cantabria",
                    "channels": [
                        {
                            "name": "Cantabria TV",
                            "web": "https://www.cantabriatv.es",
                            "logo": "https://graph.facebook.com/vegavisiontvcantabria/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC0sXB5ZoIoXWvqdizegaifg/live",
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
                            "name": "11 TV Laredo",
                            "web": "https://www.11tv.es",
                            "logo": "https://graph.facebook.com/11TvCantabria/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCuPHaVBv7cd-wWx3ztpALQw/live",
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
                            "name": "De Laredu Lin TV",
                            "web": "https://delaredulintv.com/video/tv-online/",
                            "logo": "https://graph.facebook.com/delaredulintv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://eu1.servers10.com:8081/8034/index.m3u8",
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
                        },
                        {
                            "name": "Tevecan 9",
                            "web": "https://closeradio.tv/jarbhouse/",
                            "logo": "https://static.wixstatic.com/media/4d3432_610170cea6c747a986bbea4137f5c15f~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mosca%20logo%209_transparente.png",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streamlov.alsolnet.com/jarbhouse/live/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Parlamento de Cantabria",
                            "web": "https://parlamento-cantabria.es",
                            "logo": "https://graph.facebook.com/parlamentodecantabria/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCn3GTIMs_v8p2s4vVBG_8PA/live",
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
                                    "url": "https://cdnapisec.kaltura.com/p/2288691/sp/228869100/playManifest/entryId/1_sqa9madm/protocol/https/format/applehttp/a.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA",
                                "UAG"
                            ]
                        },
                        {
                            "name": "Castilla-La Mancha Radio",
                            "web": "https://www.cmmedia.es/play/en-directo/radio/visual.html",
                            "logo": "https://graph.facebook.com/RadioCLMes/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnapisec.kaltura.com/p/2288691/sp/228869100/playManifest/entryId/1_belryxvp/protocol/https/format/applehttp/a.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA",
                                "UAG"
                            ]
                        },
                        {
                            "name": "TV Hellín",
                            "web": "https://televisionhellin.com/tvhellindirecto.html",
                            "logo": "https://graph.facebook.com/tvhellin/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5940924978228.streamlock.net/directohellin/directohellin/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Guada TV Media",
                            "web": "https://www.guadatv.tv/streaming/",
                            "logo": "https://graph.facebook.com/GuadaTV.TV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=12689&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Visión 6 TV",
                            "web": "https://www.visionseis.tv/tv-online-vision-seis/",
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
                            "name": "Imás TV",
                            "web": "https://imastv.es/directo-tv/",
                            "logo": "https://graph.facebook.com/television.imas/picture?width=200&height=200",
                            "epg_id": "Imas.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://secure3.todostreaming.es/live/imastv-livestream.m3u8",
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
                                "EXTA",
                                "REF"
                            ],
                            "referer": "https://zonacliente.almatelecom.es/videos/canalimagen"
                        },
                        {
                            "name": "Ciudad Real TV",
                            "web": "https://www.ciudadreal.es/servicios-municipales/cr-tv.html",
                            "logo": "https://graph.facebook.com/1765736930414544/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCNxFBlUBOaI3iQW37T3hFww/live",
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
                            "name": "Alcarria TV",
                            "web": "https://www.alcarria.tv/ver-en-directo/",
                            "logo": "https://graph.facebook.com/AlcarriaTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cls.alcarria.tv/live/alcarriatv-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "http://217.182.77.27/live/alcarriatv-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
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
                            "extra_info": [
                                "UAG"
                            ]
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
                            "extra_info": [
                                "NONAV"
                            ]
                        },
                        {
                            "name": "TeleToledo",
                            "web": "https://www.teletoledo.es",
                            "logo": "https://graph.facebook.com/Teletoledo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=12688&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Gobierno de Castilla-La Mancha",
                            "web": "https://www.castillalamancha.es/actualidad/emision-en-directo",
                            "logo": "https://graph.facebook.com/juntadecastillalamancha/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        }
                    ]
                },
                {
                    "name": "Castilla y León",
                    "channels": [
                        {
                            "name": "La 7",
                            "web": "https://www.cyltv.es/live/La7",
                            "logo": "https://graph.facebook.com/cyltv/picture?width=200&height=200",
                            "epg_id": "La7.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Avila",
                            "web": "https://www.cyltv.es/live/La8Avila",
                            "logo": "https://pbs.twimg.com/profile_images/1364545643319087104/7qp4nrtS_200x200.jpg",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Bierzo",
                            "web": "https://www.cyltv.es/Live/La8Bierzo",
                            "logo": "https://graph.facebook.com/La8Bierzo/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Burgos",
                            "web": "https://www.cyltv.es/live/La8Burgos",
                            "logo": "https://graph.facebook.com/La8Burgos/picture?width=200&height=200",
                            "epg_id": "La8CYL_Burgos.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Leon",
                            "web": "https://www.cyltv.es/live/La8Leon",
                            "logo": "https://pbs.twimg.com/profile_images/1367754156711288839/c01QAS89_200x200.jpg",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Palencia",
                            "web": "https://www.cyltv.es/live/La8Palencia",
                            "logo": "https://graph.facebook.com/La8Palencia/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Salamanca",
                            "web": "https://www.cyltv.es/live/La8Salamanca",
                            "logo": "https://graph.facebook.com/la8salamanca/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Segovia",
                            "web": "https://www.cyltv.es/live/La8Segovia",
                            "logo": "https://graph.facebook.com/la8segovia/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Soria",
                            "web": "https://www.cyltv.es/live/La8Soria",
                            "logo": "https://graph.facebook.com/La8Soria/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Valladolid",
                            "web": "https://www.cyltv.es/live/La8Valladolid",
                            "logo": "https://graph.facebook.com/la8valladolid/picture?width=200&height=200",
                            "epg_id": "La8CYL_Valla.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La 8 Zamora",
                            "web": "https://www.cyltv.es/live/La8Zamora",
                            "logo": "https://graph.facebook.com/la8zamora/picture?width=200&height=200",
                            "epg_id": "La8CYL.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "987 Live",
                            "web": "https://987tv.es",
                            "logo": "https://graph.facebook.com/987tv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC41bdA6AiwEb34_S7KcMHOw/live",
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
                            "name": "Canal 54",
                            "web": "https://www.canal54.es/directo/",
                            "logo": "https://graph.facebook.com/Canal54Burgos/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCUe08XE2qatlrBclUWTr81Q/live",
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
                            "web": "https://www.telearanda.es",
                            "logo": "https://graph.facebook.com/575943555801687/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=12686&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Junta Castilla y León",
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
                    "name": "Cataluña",
                    "channels": [
                        {
                            "name": "TV3",
                            "web": "https://www.3cat.cat/3cat/directes/tv3/",
                            "logo": "https://pbs.twimg.com/profile_images/1269286508625891328/rVes9BS__200x200.png",
                            "epg_id": "TV3.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes3-tv-cat.3catdirectes.cat/live-content/tv3-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "33",
                            "web": "https://www.3cat.cat/3cat/directes/33/",
                            "logo": "https://graph.facebook.com/Canal33/picture?width=200&height=200",
                            "epg_id": "C33.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-origin/c33-super3-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-origin/c33-super3-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "3CAT Exclusiu 1",
                            "web": "https://www.3cat.cat/3cat/directes/oca1/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-content/oca1-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-content/oca1-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "3CAT Exclusiu 2",
                            "web": "https://www.3cat.cat/3cat/directes/oca2/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-content/oca2-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-content/oca2-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "3CAT Exclusiu 3",
                            "web": "https://www.3cat.cat/3cat/directes/oca2/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-cat.3catdirectes.cat/live-content/oca3-hls/master.m3u8",
                                    "geo2": "CAT",
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-es.3catdirectes.cat/live-content/oca1-hls/master.m3u8",
                                    "geo2": "SP",
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "3CAT El búnquer",
                            "web": "https://www.3cat.cat/3cat/directes/fc5/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://fast-tailor.3catdirectes.cat/v1/channel/bunquer/hls.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "3CAT Plats bruts",
                            "web": "https://www.3cat.cat/3cat/directes/fc1/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://fast-tailor.3catdirectes.cat/v1/channel/ccma-channel2/hls.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "La 1 Catalunya",
                            "web": "https://www.rtve.es/play/videos/directo/tve-catalunya/",
                            "logo": "https://pbs.twimg.com/profile_images/1921959108862709760/fe5Tqhlh_200x200.jpg",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/cat/la1_cat_main_dvr.m3u8",
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
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_kqgHWySi5xprs1VFCNCX0IKNT8yXBLZC43JMoB8j0JUto=s200",
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
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/cat/la2_cat_main_dvr.m3u8",
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
                            "logo": "https://pbs.twimg.com/profile_images/1634293543987453954/mb1Rzmso_200x200.jpg",
                            "epg_id": "24H_CAT",
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
                            "name": "Ràdio 4",
                            "web": "https://www.rtve.es/play/radio/",
                            "logo": "https://graph.facebook.com/Radio4RNE/picture?width=200&height=200",
                            "epg_id": "RNE_Radio4.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ztnr.rtve.es/ztnr/6982935.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Bon Dia TV",
                            "web": "https://www.3cat.cat/bondiatv/",
                            "logo": "https://i2.wp.com/blocs.mesvilaweb.cat/wp-content/uploads/sites/1858/2018/11/BONDIA.png",
                            "epg_id": "BonDiaTV_CAT.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-int.3catdirectes.cat/live-content/bondia-hls/master.m3u8",
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
                            "name": "betevé",
                            "web": "https://beteve.cat/en-directe/",
                            "logo": "https://graph.facebook.com/betevecat/picture?width=200&height=200",
                            "epg_id": "BTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnapisec.kaltura.com/p/2346171/sp/234617100/playManifest/entryId/1_n6442jz0/protocol/https/format/applehttp/a.m3u8?referrer=aHR0cHM6Ly9iZXRldmUuY2F0",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal 4 TV Cataluña",
                            "web": "https://www.grup4.com",
                            "logo": "https://graph.facebook.com/GRUP4COM/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited35.todostreaming.es/live/mitjans-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Terres de l'Ebre",
                            "web": "https://canalte.cat/en-directe/",
                            "logo": "https://graph.facebook.com/canal.terresdelebre/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_Terres_Ebre.TV",
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
                            "name": "Canal TE24",
                            "web": "https://canalte.cat/en-directe/",
                            "logo": "https://graph.facebook.com/canalte24/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ingest1-video.streaming-pro.com/esportsteABR/etestream/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Reus TV",
                            "web": "https://www.canalreustv.cat/directe",
                            "logo": "https://graph.facebook.com/canalreus.cat/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_Reus_TV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ingest2-video.streaming-pro.com/creus/stream/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "El 9 TV",
                            "web": "https://el9nou.cat/el9tv/",
                            "logo": "https://graph.facebook.com/el9nou/picture?width=200&height=200",
                            "epg_id": "Xarxa_El_9_TV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/9tvlive/smil:live.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Empordà TV",
                            "web": "https://www.empordadigital.cat/directe/",
                            "logo": "https://graph.facebook.com/empordatv/picture?width=200&height=200",
                            "epg_id": "Xarxa_EmpordaTV.TV",
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
                            "name": "BDN",
                            "web": "https://player.instantvideocloud.net/#/embed/6f1c739f",
                            "logo": "https://pbs.twimg.com/profile_images/1907418469735280640/HHkm3IQm_200x200.jpg",
                            "epg_id": "Xarxa_Televisio_BDN.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/badalonatvlive/smil:live.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "TAC 12",
                            "web": "https://www.tac12.tv/en-directe",
                            "logo": "https://graph.facebook.com/tacdotze/picture?width=200&height=200",
                            "epg_id": "Xarxa_TAC12.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ingest1-video.streaming-pro.com/tac12_ABR/stream/playlist.m3u8",
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
                            "epg_id": "Xarxa_Canal_Terrassa.TV",
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
                            "name": "Canal 21 Ebre",
                            "web": "https://laxarxames.cat/player/8031",
                            "logo": "https://graph.facebook.com/Canal21Ebre/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal21_Ebre.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "Lleida TV",
                            "web": "https://ott.lleidatv.cat/ca/pl/6",
                            "logo": "https://graph.facebook.com/LleidaTV/picture?width=200&height=200",
                            "epg_id": "Xarxa_LleidaTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/lleidatvlive/smil:live.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "TV Costa Brava",
                            "web": "https://www.tvcostabrava.com/canals-online/televisio-costa-brava-online",
                            "logo": "https://graph.facebook.com/tvcostabrava/picture?width=200&height=200",
                            "epg_id": "Xarxa_TV_Costa_Brava.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/costabravatvlive/smil:live.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "La Xarxa",
                            "web": "https://laxarxames.cat/directe",
                            "logo": "https://graph.facebook.com/laxarxa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "REG"
                            ]
                        },
                        {
                            "name": "Olot TV",
                            "web": "https://laxarxames.cat/player/8042",
                            "logo": "https://graph.facebook.com/olotelevisio/picture?width=200&height=200",
                            "epg_id": "Xarxa_Olot_TV.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "Canal Blau",
                            "web": "https://www.laxarxames.cat/player/8032",
                            "logo": "https://graph.facebook.com/CanalBlau/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_Blau.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "Canal Taronja Central",
                            "web": "https://www.canaltaronja.cat/central/canal-taronja-en-directe/",
                            "logo": "https://graph.facebook.com/taronja.cat/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_Taronja_Central.TV",
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
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "TV L'Hospitalet",
                            "web": "https://lhdigital.cat/en-directe/",
                            "logo": "https://graph.facebook.com/lhdigital/picture?width=200&height=200",
                            "epg_id": "Xarxa_Televisio_Hospitalet.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/tvhospitaletlive/smil:tvhospitalet.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "TV del Berguedà",
                            "web": "https://laxarxames.cat/player/8046",
                            "logo": "https://graph.facebook.com/televisiodelbergueda/picture?width=200&height=200",
                            "epg_id": "Xarxa_TV_Bergueda.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "RTV El Vendrell",
                            "web": "https://www.rtvelvendrell.cat/directes/televisio/",
                            "logo": "https://graph.facebook.com/rtvelvendrell/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/tvvendrelllive/smil:directe.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Canal Taronja Anoia",
                            "web": "https://www.canaltaronja.cat/anoia/canal-taronja-en-directe/",
                            "logo": "https://graph.facebook.com/canaltaronjaanoia/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_Taronja_Anoia.TV",
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
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Cugat Mèdia",
                            "web": "https://laxarxames.cat/player/8037",
                            "logo": "https://graph.facebook.com/cugatmedia/picture?width=200&height=200",
                            "epg_id": "Xarxa_Cugat_Media.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "VOTV",
                            "web": "https://votv.cat/votv-en-directe/",
                            "logo": "https://graph.facebook.com/votv.cat/picture?width=200&height=200",
                            "epg_id": "Xarxa_VOTV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ingest2-video.streaming-pro.com/votv/streaming_web/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Taronja Osona i Moianés",
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
                            "name": "tvmataró",
                            "web": "https://www.laxarxames.cat/player/6126",
                            "logo": "https://graph.facebook.com/tvmataro/picture?width=200&height=200",
                            "epg_id": "Xarxa_TVMataro.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "Penedès TV",
                            "web": "https://www.rtvvilafranca.cat/penedes-televisio-en-directe/",
                            "logo": "https://graph.facebook.com/rtvvilafranca/picture?width=200&height=200",
                            "epg_id": "Xarxa_Penedes_TV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/rtvvilafrancalive/smil:live.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Banyoles Televisió",
                            "web": "https://www.laxarxames.cat/player/8029",
                            "logo": "https://graph.facebook.com/banyolestelevisio/picture?width=200&height=200",
                            "epg_id": "Xarxa_Banyoles_TV.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "TV de Girona",
                            "web": "https://ventdelnord.tv/ftvgirona",
                            "logo": "https://graph.facebook.com/tvgirona/picture?width=200&height=200",
                            "epg_id": "Xarxa_TV_Girona.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ventdelnord.tv:8080/girona/directe.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Piera TV",
                            "web": "https://piera.practic.cat",
                            "logo": "https://yt3.ggpht.com/Yo_LIch5OT5hTA24FMlshk7MtHpuUbVoOd8U2HJGw6el7-cCkAhH8_ISKmww17wHn37FCOF_rg=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5d776b1861da1.streamlock.net/piera/smil:piera.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "RTV Cardedeu",
                            "web": "https://www.rtvc.cat/tele/",
                            "logo": "https://graph.facebook.com/TelevisioCardedeu/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/tvcardedeulive/smil:rtmp01.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Canal 10 Empordà",
                            "web": "https://www.canal10.cat/endirecte",
                            "logo": "https://graph.facebook.com/canal10emporda/picture?width=200&height=200",
                            "epg_id": "Xarxa_Canal_10_Emporda.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ventdelnord.tv:8080/escala/directe.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Pirineus TV",
                            "web": "https://www.pirineustv.cat",
                            "logo": "https://graph.facebook.com/PirineusTV/picture?width=200&height=200",
                            "epg_id": "Pirineus.TV",
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://g0.ipcamlive.com/player/player.php?alias=65564dc398f45&autoplay=1&disableplaybackspeedbutton=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Vallès Visió",
                            "web": "https://www.vallesvisio.cat/directe/",
                            "logo": "https://graph.facebook.com/tvvallesvisio/picture?width=200&height=200",
                            "epg_id": "Xarxa_Valles_Visio.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/vallesvisiotvlive/smil:live.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "TV del Ripollès",
                            "web": "https://laxarxames.cat/channel/8047",
                            "logo": "https://graph.facebook.com/televisiodelripolles/picture?width=200&height=200",
                            "epg_id": "Xarxa_Televisio_Ripolles.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA",
                                "REG"
                            ]
                        },
                        {
                            "name": "etv",
                            "web": "https://www.etv.cat",
                            "logo": "https://graph.facebook.com/etv.llobregat/picture?width=200&height=200",
                            "epg_id": "Xarxa_ETV.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta318.cdnmedia.tv/tvetvlive/smil:rtmp01.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Mar TV",
                            "web": "https://martv.live/",
                            "logo": "https://graph.facebook.com/martelevisio/picture?width=200&height=200",
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
                        },
                        {
                            "name": "TV Sant Cugat",
                            "web": "https://www.tvsantcugat.cat/cobertura/directe-tv-hd/",
                            "logo": "https://graph.facebook.com/tvsantcugat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCO_HcwAMD_XcZWfqidMtfgw/live",
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
                            "name": "TV Sabadell Vallès",
                            "web": "https://tvsabadell-valles.cat/directe/",
                            "logo": "https://graph.facebook.com/tvsabadellvalles/picture?width=200&height=200",
                            "epg_id": "Xarxa_TV_Sabadell_Valles.TV",
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
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
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
                            "name": "22TV Televisió de Solsona",
                            "web": "https://22cabletv.wordpress.com/",
                            "logo": "https://yt3.ggpht.com/ovQWWhA18AZmmjp34yMreDiMViVWDNDV4goBCru2tkA0_MClFvT-j63WIKKooNwotM9ZAlri=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=22tv_celsona&parent=play.tdtchannels.com",
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
                            "name": "3CAT Càmeres del temps",
                            "web": "https://www.3cat.cat/3cat/directes/beauties/",
                            "logo": "https://graph.facebook.com/som3Cat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes-tv-int.3catdirectes.cat/live-content/beauties-hls/master.m3u8",
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
                            "web": "https://www.ceutaplay.es/pages/live",
                            "logo": "https://graph.facebook.com/RTVCE/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "El Faro",
                            "web": "https://farotv.es",
                            "logo": "https://graph.facebook.com/ElFarodeCeuta/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCJkirQzX68T-DiLB4-YP-TA/live",
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
                    "name": "C. de Madrid",
                    "channels": [
                        {
                            "name": "Telemadrid",
                            "web": "https://www.telemadrid.es/emision-en-directo/",
                            "logo": "https://graph.facebook.com/telemadrid/picture?width=200&height=200",
                            "epg_id": "Telemadrid.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://telemadrid-23-secure2.akamaized.net/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://eventos-23-secure2.akamaized.net/eventos_1-hls/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://eventos-23-secure2.akamaized.net/eventos_2-hls/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://eventos-23-secure2.akamaized.net/eventos_3-hls/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "LaOtra",
                            "web": "https://www.telemadrid.es/emision-en-directo-laotra/",
                            "logo": "https://pbs.twimg.com/profile_images/1279727978268839938/jSZUiboT_200x200.jpg",
                            "epg_id": "LaOtra.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://laotra-1-23-secure2.akamaized.net/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Teleganés",
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
                            "name": "Canal Red",
                            "web": "https://canalred.tv",
                            "logo": "https://graph.facebook.com/canalredtelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCky112obBMG68Nw5MrSNNPA/live",
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
                            "name": "Distrito TV",
                            "web": "https://distritotv.es",
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
                            "name": "Déjate de Historias TV",
                            "web": "https://dejatedehistorias.es/emision-online",
                            "logo": "https://graph.facebook.com/DejateDeHistoriasTV/picture?width=200&height=200",
                            "epg_id": "Dejate.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited44.todostreaming.es/live/dejatedeh-livestream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "OndaMadrid Webcam",
                            "web": "https://www.telemadrid.es/emision-en-directo-ondamadrid/",
                            "logo": "https://graph.facebook.com/ondamadridradio/picture?width=200&height=200",
                            "epg_id": "OndaMadrid.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tvradio-1-23-secure2.akamaized.net/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal 4 TV Madrid",
                            "web": "https://www.grup4.com",
                            "logo": "https://graph.facebook.com/GRUP4COM/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://limited35.todostreaming.es/live/mitjans-livestream2.m3u8",
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
                            "logo": "https://graph.facebook.com/Estutele/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16148&live=1&avod=0&hls_marker=1&pod_duration=120&position=prerrol&app_bundle=com.streamingconnect.viva&app_domain=mirametv.live&content_channel=estutele&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&app_category=linear_tv&content_cat=IAB1&us_privacy=[US_PRIVACY]&content_id=mirametv_live&min_ad_duration=6&max_ad_duration=120&ssai_enabled=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "iPROtv",
                            "web": "https://iprotv.es",
                            "logo": "https://graph.facebook.com/iprotvspain/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16112&live=1&avod=0&hls_marker=1&pod_duration=120&app_bundle=com.streamingconnect.viva&ssai_enabled=1&position=preroll&app_domain=mirametv.live&app_category=linear_tv&content_cat=IAB1&content_channel=iprotv&content_genre=tv_broadcaster&content_rating=TV-G&content_network=streamingconnect&content_id=mirametv_live&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&min_ad_duration=6&max_ad_duration=120&ifa_type=[IFA_TYPE]",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "C33 Madrid",
                            "web": "https://www.canal33.info",
                            "logo": "https://graph.facebook.com/Canal33Madrid/picture?width=200&height=200",
                            "epg_id": "C33M.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://media2.streambrothers.com:1936/8140/8140/.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "LIRA TV",
                            "web": "https://liratv.es",
                            "logo": "https://graph.facebook.com/liratvlive/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8",
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
                            "name": "Asamblea de Madrid",
                            "web": "https://www.asambleamadrid.es",
                            "logo": "https://graph.facebook.com/asambleamadrid/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCqACQgeFG_-PmQCn3tdAFpg/live",
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
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/x8dhap9?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
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
                                    "url": "https://video3.lhdserver.es/teleribera/live.m3u8",
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
                                    "url": "https://broadcasting.parlamentodenavarra.es/live/canal1/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://broadcasting.parlamentodenavarra.es/live/canal2/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://broadcasting.parlamentodenavarra.es/live/canal3/playlist.m3u8?DVR",
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
                            "name": "À Punt",
                            "web": "https://apuntmedia.es/va/directe/tv",
                            "logo": "https://graph.facebook.com/apuntmedia/picture?width=200&height=200",
                            "epg_id": "APUNT.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://bcovlive-a.akamaihd.net/8499d938ef904e39b58a4adec2ddeada/eu-west-1/6057955885001/playlist_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "8 La Marina TV",
                            "web": "https://8lamarinatv.com",
                            "logo": "https://graph.facebook.com/8lamarinatelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming005.gestec-video.com/hls/canal24.m3u8",
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
                            "name": "Intercomarcal TV",
                            "web": "https://www.intercomarcal.com",
                            "logo": "https://graph.facebook.com/Intercomarcal.Television/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streamingtvi.gestec-video.com/hls/tvixa.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://streamingtvi.gestec-video.com/hls/tvixa1.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://streamingtvi.gestec-video.com/hls/tvixa3.m3u8",
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
                            "name": "7 TeleValencia",
                            "web": "https://7televalencia.com/directo-7televalencia/",
                            "logo": "https://pbs.twimg.com/profile_images/1876660632478437376/rbEqYeqC_200x200.jpg",
                            "epg_id": "7Televalencia.TV",
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
                            "name": "TeleElx",
                            "web": "https://teleelx.es/directo/",
                            "logo": "https://graph.facebook.com/teleelx/picture?width=200&height=200",
                            "epg_id": "TeleElx.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tvdirecto.teleelx.es/stream/teleelx.m3u8",
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
                            "name": "La 8 Mediterráneo",
                            "web": "https://laocho.tv/tv-en-directo/",
                            "logo": "https://graph.facebook.com/la8mediterraneo/picture?width=200&height=200",
                            "epg_id": "8M.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://newscript.gestec-video.com/hls/8TVEVENTOS.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Alacantí TV",
                            "web": "https://www.alacantitv.com/en-directo/",
                            "logo": "https://graph.facebook.com/alacantitv/picture?width=200&height=200",
                            "epg_id": "Alacanti.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming01.gestec-video.com/hls/artequatreAlacanti.m3u8",
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
                            "name": "12TV Alicante",
                            "web": "https://webtv.12tv.es",
                            "logo": "https://graph.facebook.com/12tv.es/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16126&live=1&avod=0&hls_marker=1&position=preroll&pod_duration=120&app_bundle=com.streamingconnect.viva&ssai_enabled=1&content_channel=12tv&app_domain=mirametv.live&app_category=linear_tv&content_cat=IAB1&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&min_ad_duration=6&max_ad_duration=120&content_id=mirametv_live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TV Castelló",
                            "web": "https://tvcs.tv/en-directe/",
                            "logo": "https://graph.facebook.com/TelevisiondeCastellon/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.kick.com/televisiocastello",
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
                            "name": "TV Artequatre",
                            "web": "https://www.tv-a.es",
                            "logo": "https://graph.facebook.com/tvArtequatre/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming007.gestec-video.com/hls/artequatreTVA.m3u8",
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
                            "name": "Levante TV",
                            "web": "https://www.levante-emv.com/videos/levante-tv",
                            "logo": "https://graph.facebook.com/levantetv/picture?width=200&height=200",
                            "epg_id": "Levante.TV",
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=levante_tv&parent=play.tdtchannels.com",
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
                            "name": "Información TV",
                            "web": "https://www.informacion.es/videos/informaciontv/directo/",
                            "logo": "https://pbs.twimg.com/profile_images/1790304927471796224/0JZiK8vW_200x200.jpg",
                            "epg_id": "Informacion.TV",
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=informaciontv&parent=play.tdtchannels.com",
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
                            "name": "TV 4 La Vall",
                            "web": "https://valldeuxo.gestec-video.com/lavall.php",
                            "logo": "https://graph.facebook.com/TV4LaVall/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://valldeuxo.gestec-video.com/hls/lavall.m3u8",
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
                            "name": "Elche 7 TV",
                            "web": "https://elche7tv.es/tv-en-directo/",
                            "logo": "https://pbs.twimg.com/profile_images/1543985670066245632/cX_NvIkT_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://elche7tv.gestec-video.com/hls/canal2.m3u8",
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
                            "name": "Tele Safor",
                            "web": "https://telesafor.com",
                            "logo": "https://yt3.ggpht.com/ytc/APkrFKZ5UffEAeHVZWc1fbQsPu4VNureSfNMwlMoRmgH=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://video.telesafor.com/hls/video.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal 56",
                            "web": "https://canal56.com/online/",
                            "logo": "https://graph.facebook.com/canal56televisio/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://videos.canal56.com/directe/stream/index.m3u8",
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
                            "name": "Univers TV",
                            "web": "https://www.universvalencia.es",
                            "logo": "https://graph.facebook.com/UniversValenciaDigital/picture?width=200&height=200",
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
                            "name": "Radio Buñol TV",
                            "web": "https://radiotv.xn--buol-hqa.es/",
                            "logo": "https://graph.facebook.com/radiobunyol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://castor.streamthatvideo.co:8081/radiobunyol/tracks-v1a1/mono.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TV Almassora",
                            "web": "https://www.tvalmassora.com/en-directo/en-directo-television-almassora/",
                            "logo": "https://yt3.ggpht.com/IYhYKEgINXNgQGLhReOrma2Pcl151M7Ray9SYDWissgAAZQJUhrRPEe7tLBT9XlsjwChuTNW=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live.fullsport.es/hls/tvalmassora.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Punt 3 Vall Uixó",
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
                            "name": "Tevequatre TV",
                            "web": "https://teve4.com/directe/",
                            "logo": "https://pbs.twimg.com/profile_images/438700741801177088/MdnaVxtC_200x200.png",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=teve4televisio&parent=play.tdtchannels.com",
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
                            "name": "Canal 3 Biar",
                            "web": "https://canal3biar.es/directe/",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_nQt5rluj5KRX0HGcMvHLxSUJuhjZe4Y1GfuA0NjpHf5Q=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://avantstreaming.es/hls/canal3.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Ràdio Bocairent TV",
                            "web": "https://radiobocairent.com",
                            "logo": "https://graph.facebook.com/radiobocairent/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=radiobocairent&parent=play.tdtchannels.com",
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
                            "name": "Ciudades Del Ocio TV",
                            "web": "https://www.ciudadesdelocio.tv",
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
                            "name": "Une Vinalopó",
                            "web": "https://www.unevinalopo.es/directo/",
                            "logo": "https://graph.facebook.com/UneVinalopo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streamingtvi.gestec-video.com/hls/unesd.m3u8",
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
                            "name": "Enguera TV",
                            "web": "https://www.enguera.es/content/enguera-tv",
                            "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJWP8ahafBlFAbCsP3tT17ooK6arGKNmcx6VES4o=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=engueratv&parent=play.tdtchannels.com",
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
                            "web": "https://www.canalextremadura.app/videos/182630-canal-video-24h",
                            "logo": "https://graph.facebook.com/CanalExtremadura/picture?width=200&height=200",
                            "epg_id": "Extremadura.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://canalextremadura-live.flumotion.cloud/canalextremadura/live_all/playlist_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "EXTA"
                            ]
                        },
                        {
                            "name": "TV Extremeña",
                            "web": "https://www.xn--televisionextremea-30b.com/directo/",
                            "logo": "https://graph.facebook.com/TELEVISIONEXTREMENA/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=tvextremena&parent=play.tdtchannels.com",
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
                                    "url": "https://player.twitch.tv/?channel=nuestracomarcatelevision&parent=play.tdtchannels.com",
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
                            "name": "Villafranca TV",
                            "web": "https://www.villafrancadelosbarros.es/blog/",
                            "logo": "https://pbs.twimg.com/profile_images/1180389927709810688/BgzpxkjA_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCIp5TEcJidiaN3p_mguOrTQ/live",
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
                            "name": "Asamblea de Extremadura",
                            "web": "https://www.asambleaex.es",
                            "logo": "https://graph.facebook.com/AsambleaExtremadura/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCDRei0Imqv9iV8mHQdYwGdQ/live",
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
                    "name": "Galicia",
                    "channels": [
                        {
                            "name": "TVG",
                            "web": "https://www.agalega.gal/videos/76475-tvg",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": "TVGAL.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-europa.flumotion.cloud/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG 2",
                            "web": "https://www.agalega.gal/videos/77550-tv-g2",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": "TVG2.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-tvg2.flumotion.cloud/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Xabarin",
                            "web": "https://www.agalega.gal/videos/76534-xabarin-tv",
                            "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-infantil-schlive.flumotion.cloud/crtvglive/smil:channel5PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Pequerrech@s",
                            "web": "https://www.agalega.gal/videos/76535-xabarin-r1",
                            "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-xabarinr1-schlive.flumotion.cloud/crtvglive/smil:channel6PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Cativ@s",
                            "web": "https://www.agalega.gal/videos/76536-xabarin-tv2",
                            "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-xabarinr2-schlive.flumotion.cloud/crtvglive/smil:channel7PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Mociñ@s",
                            "web": "https://www.agalega.gal/videos/76537-xabarin-tv3",
                            "logo": "https://graph.facebook.com/oxabarinclub/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-xabarinr3-schlive.flumotion.cloud/crtvglive/smil:channel8PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Eventos",
                            "web": "https://www.agalega.gal/videos/category/11998-directos",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-events1.flumotion.cloud/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-events2.flumotion.cloud/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-events3.flumotion.cloud/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVG Mira Radio Galega",
                            "web": "https://www.agalega.gal/videos/76478-mira-rg",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-mirarg-schlive.flumotion.cloud/crtvglive/smil:channel1PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Corenta anos da TVG",
                            "web": "https://www.agalega.gal/videos/267948-corenta-anos-da-tvg",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-40-anos-crtvg-schlive.flumotion.cloud/crtvglive/smil:channel9PRG.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TV Ferrol",
                            "web": "https://tvferrol.es/es/contenido.php?c=4",
                            "logo": "https://graph.facebook.com/tvferrol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directo.tvferrol.es/tv.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TeleVigo",
                            "web": "https://www.televigo.com",
                            "logo": "https://graph.facebook.com/televigo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16113&live=1&avod=0&hls_marker=1&position=preroll&pod_duration=120&app_bundle=com.streamingconnect.viva&app_domain=mirametv.live&app_category=linear_tv&ssai_enabled=1&content_cat=IAB1&content_channel=televigo&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&min_ad_duration=6&max_ad_duration=120&content_id=[CONTENT_ID]",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Telemiño",
                            "web": "https://www.laregion.es/teleminho/",
                            "logo": "https://graph.facebook.com/teleminho/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://laregionlive.flumotion.cloud/laregionlive/smil:channel1.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Hermes TV",
                            "web": "https://hermesvigo.com/directo-tv/",
                            "logo": "https://graph.facebook.com/491789551017784/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=hermestelevisionvigo&parent=play.tdtchannels.com",
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
                                    "url": "https://cloud.fastchannel.es/mic/manifiest/anove.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Auria TV",
                            "web": "https://www.auria.es",
                            "logo": "https://yt3.ggpht.com/a-/AAuE7mBbJ5XfzqqDgg1IkOk23GJ6JZntYZtYT-n1CA=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC4xDk-vc3i4CB45U7_wmm5g/live",
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
                            "name": "Parlamento de Galicia",
                            "web": "https://www.es.parlamentodegalicia.es/EmisionDirecto/",
                            "logo": "https://graph.facebook.com/parlamentodegalicia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://pgalicia-live.akamaized.net/hls/live/2040697/pleno/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Xunta de Galicia",
                            "web": "https://www.xunta.gal/video-en-directo",
                            "logo": "https://graph.facebook.com/@xuntadegalicia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://xuntalive.akamaized.net/hls/live/2032287/streamxunta/bitrate_2.m3u8",
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
                                    "url": "https://www.youtube.com/channel/UCff_CBVJDTHP4wOHPjP5BMg/live",
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
                                    "url": "https://tef.servertv.online:3268/live/teflive.m3u8",
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
                            "name": "Canal 4 TV Mallorca",
                            "web": "https://www.grup4.com",
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
                            "web": "https://www.fibwidiario.com/estaticas/fibwi-tv.html",
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
                        },
                        {
                            "name": "SAM Ibiza",
                            "web": "https://listen.samibiza.com/video",
                            "logo": "https://graph.facebook.com/SAMibizaradio/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://hls1.eu.peppermindmedia.com/av:vod1/SAMibiza/index.fmp4.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Parlament de les Illes Balears",
                            "web": "https://www.parlamentib.es",
                            "logo": "https://pbs.twimg.com/profile_images/1628713790303879168/hOxkqhuJ_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCpLm25L3R1VVOQDFiSCCmDA/live",
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
                    "name": "La Rioja",
                    "channels": [
                        {
                            "name": "TV Rioja",
                            "web": "https://www.tvr.es/directo-20210408161442-nt.html",
                            "logo": "https://graph.facebook.com/tvrtelevision/picture?width=200&height=200",
                            "epg_id": "TVR.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5924d3ad0efcf.streamlock.net/riojatv/riojatvlive/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG"
                            ]
                        },
                        {
                            "name": "7 La Rioja",
                            "web": "https://www.7rioja.tv/Directo",
                            "logo": "https://graph.facebook.com/7riojatv/picture?width=200&height=200",
                            "epg_id": "7Rioja.TV",
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/x8dhao1?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Parlamento de La Rioja",
                            "web": "https://mediateca.parlamento-larioja.org/live",
                            "logo": "https://graph.facebook.com/ParlamentodeLaRioja/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://media.parlamento-larioja.org/live/parlarioja/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://media.parlamento-larioja.org/live/parlarioja_subtitulado/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Cocina Familiar",
                            "web": "https://cocina-familiar.com",
                            "logo": "https://graph.facebook.com/cocinafamiliarjr/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16114&live=1&avod=0&hls_marker=1&pod_duration=120&position=preroll&app_bundle=com.streamingconnect.viva&app_category=linear_tv&content_cat=IAB8&content_channel=cocinafamiliar&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&ssai_enabled=1&content_id=mirametv_live&min_ad_duration=6&max_ad_duration=120&app_domain=mirametv.live",
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
                    "name": "Melilla",
                    "channels": [
                        {
                            "name": "Melilla TV",
                            "web": "https://playmelilla.es/directo",
                            "logo": "https://graph.facebook.com/TelevisionMelilla/picture?width=200&height=200",
                            "epg_id": "MelillaTV.TV",
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/x9jhjqk?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Popular TV Melilla",
                            "web": "https://populartvmelilla.com",
                            "logo": "https://pbs.twimg.com/profile_images/61224728/populartvtwitter_200x200.png",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5940924978228.streamlock.net/8009/ngrp:8009_all/playlist.m3u8",
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
                    "name": "País Vasco",
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
                            "web": "https://dotb.eus/tbkanala/",
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
                            "web": "https://gitb.eus/telebista/zuzenekoa",
                            "logo": "https://graph.facebook.com/GoierriIrratiTelebista/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming.gitb.eus/hls/z.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "28 Kanala",
                            "web": "https://28kanala.eus/telebista/zuzenekoa",
                            "logo": "https://graph.facebook.com/28kanala/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming.28kanala.eus/hls/z.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TeleBilbao",
                            "web": "https://www.telebilbao.es/directo/",
                            "logo": "https://graph.facebook.com/312994995454199/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tbilbo.dyndns.org/hls/stream.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "NONAV",
                                "UAG"
                            ]
                        },
                        {
                            "name": "GUKA TB",
                            "web": "https://guka.eus/telebista/zuzenekoa",
                            "logo": "https://graph.facebook.com/guka.eus/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming.ukt.eus/hls/test.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Oizmendi TV",
                            "web": "https://zuzenean.oizmendi.eus",
                            "logo": "https://graph.facebook.com/oizmenditelebista/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://zuzenean.oizmendi.eus/hls/z.m3u8",
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
                                    "url": "https://5940924978228.streamlock.net/j_Directo2/j_Directo2/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "STZ Telebista",
                            "web": "https://stztelebista.com",
                            "logo": "https://graph.facebook.com/StzGrupo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Eusko Legebiltzarra",
                            "web": "https://www.legebiltzarra.eus",
                            "logo": "https://graph.facebook.com/legebiltzarra/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://bideoak.legebiltzarra.eus/zuzenean/stream-3_channel-1/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://bideoak.legebiltzarra.eus/zuzenean/stream-3_channel-2/playlist.m3u8",
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
                    "name": "P. de Asturias",
                    "channels": [
                        {
                            "name": "TPA7",
                            "web": "https://www.rtpa.es/tpa-television",
                            "logo": "https://graph.facebook.com/RTPAoficial/picture?width=200&height=200",
                            "epg_id": "TPA.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Junta General del Principado de Asturias",
                            "web": "https://www.jgpa.es/emision-en-directo",
                            "logo": "https://pbs.twimg.com/profile_images/1898981135515881472/kZzZjI1u_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://wmserver.jgpa.es/live/_definst_/livestream2/playlist.m3u8",
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
                                    "url": "https://www.youtube.com/channel/UCXi-7dpQ1mnf8kxIVCe9mCA/live",
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
                            "extra_info": [
                                "EMB"
                            ]
                        },
                        {
                            "name": "Popular TV Murcia",
                            "web": "https://www.populartvmurcia.com",
                            "logo": "https://pbs.twimg.com/profile_images/61224728/populartvtwitter_200x200.png",
                            "epg_id": "PopularMU.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=12128&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
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
                            "name": "Arabí TV",
                            "web": "https://www.arabitv.es/en-directo/",
                            "logo": "https://graph.facebook.com/arabitvyecla/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streamtv2.elitecomunicacion.cloud:3628/live/arabitv2025live.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal 6 Totana",
                            "web": "http://www.totanaweb.es",
                            "logo": "https://graph.facebook.com/TotanaWeb/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCO_V53zJvyne-sroV8RzU2A/live",
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
                            "name": "Asamblea Regional de Murcia",
                            "web": "https://www.asambleamurcia.es",
                            "logo": "https://graph.facebook.com/asambleamurcia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCGWt3Hunyq2i8Qso_de8x5g/live",
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
                            "epg_id": "TVE_INTER.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://rtvelivestream.rtve.es/rtvesec/int/tvei_eu_main_dvr.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "TV3.CAT",
                            "web": "https://www.3cat.cat/3cat/directes/tv3/",
                            "logo": "https://pbs.twimg.com/profile_images/1269286508625891328/rVes9BS__200x200.png",
                            "epg_id": "TVC.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://directes3-tv-int.3catdirectes.cat/live-content/tvi-hls/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "ETB Basque",
                            "web": "https://www.eitb.eus/es/television/eitb-basque/",
                            "logo": "https://graph.facebook.com/eitb/picture?width=200&height=200",
                            "epg_id": "ETBSAT.TV",
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
                            "name": "TVG América",
                            "web": "https://agalega.gal/videos/76475-tvg",
                            "logo": "https://graph.facebook.com/CRTVG/picture?width=200&height=200",
                            "epg_id": "TVGA.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://crtvg-america.flumotion.cloud/playlist.m3u8",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://new-international-23-secure2.akamaized.net/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCv2BcgqxHSrl2QQfIkjR5Eg/live",
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
                            "name": "GCM Internacional",
                            "web": "https://www.grupocadenamedia.es",
                            "logo": "https://pbs.twimg.com/profile_images/1752299087402041344/eAHH3L02_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16149&live=1&avod=0&hls_marker=1&pod_duration=120&app_bundle=com.streamingconnect.viva&app_category=linear_tv&app_domain=mirametv.live&content_cat=IAB1&content_genre=tv_broadcaster&content_network=streamingconnect&content_rating=TV-G&content_channel=GCMI&content_id=mirametv_live&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&position=[POSITION]&min_ad_duration=6&max_ad_duration=120&ssai_enabled=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "ATV Andorra",
                            "web": "https://www.rtva.ad/en-directe/atv",
                            "logo": "https://graph.facebook.com/rtva.andorra/picture?width=200&height=200",
                            "epg_id": "ATVHD.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://livesg1.rtva.hiway.media/aa2d69af-76a0-4077-a57e-0445c4061f86/manifest.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Lòria TV Andorra",
                            "web": "http://loriatv.com",
                            "logo": "https://graph.facebook.com/LoriaTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCCCnrECJpv84QKM4olodZOQ/live",
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
                            "name": "GBC Gibraltar",
                            "web": "https://www.gbc.gi/tv/watch-live",
                            "logo": "https://graph.facebook.com/GBCNewsroom/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "Euronews Internacional",
                            "web": "https://es.euronews.com/live",
                            "logo": "https://graph.facebook.com/es.euronews/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCSrZ3UV4jOidv8ppoVuvW9Q/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCW2QcKZiU8aUGg4yxCIditg/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "FR"
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCUmEPYxmnyQDeRUcFkslmQw/live",
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
                            "name": "CNN Internacional",
                            "web": "https://cnnespanol.cnn.com",
                            "logo": "https://graph.facebook.com/cnninternational/picture?width=320&height=320",
                            "epg_id": "CNNInt.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://d3696l48vwq25d.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-0g2918mubifjw/index.m3u8",
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
                            "name": "Bloomberg Europe",
                            "web": "https://www.bloomberg.com/live/europe",
                            "logo": "https://pbs.twimg.com/profile_images/991792042094354432/DG1Ruupb_200x200.jpg",
                            "epg_id": "Bloom.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.bloomberg.com/media-manifest/streams/eu.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "France 24 Francia",
                            "web": "https://www.france24.com/es/en-vivo",
                            "logo": "https://graph.facebook.com/FRANCE24/picture?width=200&height=200",
                            "epg_id": "France24.TV",
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCUdOoVWuWmgo1wByzcsyKDQ/live",
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
                            "name": "BFM TV Francia",
                            "web": "https://www.bfmtv.com/en-direct/",
                            "logo": "https://graph.facebook.com/BFMTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live-cdn-stream-euw1.bfmtv.bct.nextradiotv.com/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "FR"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TV5Monde Francia",
                            "web": "https://europe.tv5monde.com/en/live",
                            "logo": "https://graph.facebook.com/tv5mondeofficiel/picture?width=200&height=200",
                            "epg_id": "TV5Monde.TV",
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
                            "name": "franceinfo: Francia",
                            "web": "https://www.francetvinfo.fr/en-direct/tv.html",
                            "logo": "https://pbs.twimg.com/profile_images/1019886363515211776/D2TBSqHw_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCO6K_kkdP-lnSCiO3tPx7WA/live",
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Rai News 24 Italia",
                            "web": "https://www.rainews.it/notiziari/rainews24",
                            "logo": "https://graph.facebook.com/RaiNews/picture?width=200&height=200",
                            "epg_id": "RaiN.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Sport Italia",
                            "web": "https://sportitalialive.it/sihd/",
                            "logo": "https://graph.facebook.com/sportitaliatv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://di-f1hy8rov.vo.lswcdn.net/sportitalia/sihd/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "IT"
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://di-f1hy8rov.vo.lswcdn.net/sportitalia/sisolocalcio/playlist.m3u8",
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
                            "extra_info": []
                        },
                        {
                            "name": "La7 Italia",
                            "web": "https://tg.la7.it/dirette-tv",
                            "logo": "https://graph.facebook.com/tgla7/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://d3749synfikwkv.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-74ylxpgd78bpb/Live.m3u8",
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
                            "web": "https://www.dw.com/es/live-tv/channel-spanish",
                            "logo": "https://graph.facebook.com/dw.espanol/picture?width=200&height=200",
                            "epg_id": "DW.TV",
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
                            "name": "Tagesschau24 Alemania",
                            "web": "https://www.tagesschau.de/multimedia/livestreams/livestream1",
                            "logo": "https://graph.facebook.com/tagesschau/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "ARD Das Erste Alemania",
                            "web": "https://live.daserste.de",
                            "logo": "https://pbs.twimg.com/profile_images/1605959306435756038/_EiuBjQ8_200x200.png",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://daserste-live.ard-mcdn.de/daserste/live/hls/int/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "DE"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "WDR Westdeutschen Alemania",
                            "web": "https://www1.wdr.de/fernsehen/livestream/",
                            "logo": "https://graph.facebook.com/WDR/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "NDR Niedersachsen Alemania",
                            "web": "https://www.ndr.de/fernsehen/livestream/",
                            "logo": "https://graph.facebook.com/ndrniedersachsen/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ndrint.akamaized.net/hls/live/2020766/ndr_int/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "DE"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "BR Bayerischer Alemania",
                            "web": "https://www.br.de",
                            "logo": "https://graph.facebook.com/BR24/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://mcdn.br.de/br/fs/bfs_sued/hls/int/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "DE"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "HR Hessenschau Alemania",
                            "web": "https://www.hessenschau.de/tv-sendung/livestream-fernsehen-118.html",
                            "logo": "https://graph.facebook.com/Hessenschau/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://hr-live.ard-mcdn.de/hr/live/hls/de/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "DE"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "SR Saarland Alemania",
                            "web": "https://www.sr.de",
                            "logo": "https://graph.facebook.com/SRinfo.sr/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://srfs.akamaized.net/hls/live/689649/srfsgeo/index.m3u8",
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
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_1080-30.m3u8",
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
                            "name": "RTP Internacional Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtpinternacional",
                            "logo": "https://graph.facebook.com/rtpinternacional/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "RTP 1 Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtp1",
                            "logo": "https://graph.facebook.com/rtp1.pt/picture?width=200&height=200",
                            "epg_id": "RTP1.TV",
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "RTP 2 Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtp2",
                            "logo": "https://graph.facebook.com/rtpdois/picture?width=200&height=200",
                            "epg_id": "RTP2.TV",
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "RTP 3 Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtp3",
                            "logo": "https://graph.facebook.com/rtp/picture?width=200&height=200",
                            "epg_id": "RTP3.TV",
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "RTP Madeira Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtpmadeira",
                            "logo": "https://graph.facebook.com/rtpmadeira/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "RTP Açores Portugal",
                            "web": "https://www.rtp.pt/play/direto/rtpacores",
                            "logo": "https://graph.facebook.com/rtpacores/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": []
                        },
                        {
                            "name": "CNN Portugal",
                            "web": "https://cnnportugal.iol.pt/direto",
                            "logo": "https://graph.facebook.com/cnnportugal/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Porto Canal Portugal",
                            "web": "https://portocanal.sapo.pt/live",
                            "logo": "https://graph.facebook.com/portocanal/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "LN24 Bélgica",
                            "web": "https://www.ln24.be/videos/2022/07/26/live-24x7-ln24-qssu8l3/",
                            "logo": "https://graph.facebook.com/LN24LesNews24/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live-ln24.digiteka.com/1911668011/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "FR"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Digi24 Rumanía",
                            "web": "https://www.digi24.ro/live/digi24",
                            "logo": "https://graph.facebook.com/Digi24HD/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://pubads.g.doubleclick.net/ssai/event/OQfdjUhHSDSlb1fJVzehsQ/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "RO"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TVP Polonia",
                            "web": "https://polonia.tvp.pl/44562671/tvp-polonia-stream",
                            "logo": "https://graph.facebook.com/tvppolonia/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "RTÉ News Irlanda",
                            "web": "https://www.rte.ie/news/player/",
                            "logo": "https://graph.facebook.com/rtenews/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.rte.ie/embed/?channel=RTENewsNow",
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
                            "name": "Televixin Malta",
                            "web": "https://www.tvm.com.mt/mt/tvmi/live/",
                            "logo": "https://graph.facebook.com/TelevisionMalta/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "TRT World Turquía",
                            "web": "https://www.trt.net.tr/espanol/tv?channel=trtworld&type=tv",
                            "logo": "https://graph.facebook.com/trtworld/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
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
                            "name": "NOW TV Turquía",
                            "web": "https://www.nowtv.com.tr/canli-yayin",
                            "logo": "https://graph.facebook.com/nowtvturkiye/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "STAR TV Turquía",
                            "web": "https://www.startv.com.tr/canli-yayin",
                            "logo": "https://graph.facebook.com/startv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "RTCG SAT Montenegro",
                            "web": "https://rtcg.me/cir/tv/gledaj-tvcgmne.html",
                            "logo": "https://graph.facebook.com/RTCG.me/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://proxysat.ipradio.rs:1936/rtcg/smil:rtcg.smil/playlist.m3u8",
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
                            "name": "RÚV Islandia",
                            "web": "https://www.ruv.is/sjonvarp/beint/ruv",
                            "logo": "https://graph.facebook.com/RUVohf/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "N1 Croacia",
                            "web": "https://n1info.hr/n1-tv-live-stream/",
                            "logo": "https://graph.facebook.com/N1Hrvatska/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://best-str.umn.cdn.united.cloud/stream?stream=sp1400&sp=n1info&channel=n1hrv&u=n1info&p=n1Sh4redSecre7iNf0&player=m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "VizionPlus Albania",
                            "web": "https://www.vizionplus.tv/livestream/",
                            "logo": "https://graph.facebook.com/vizionplustv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tringliveviz.akamaized.net/delta/105/out/u/qwaszxerdfcvrtryuy.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Channel 24 Ucrania",
                            "web": "https://24tv.ua/online",
                            "logo": "https://graph.facebook.com/news24ukraine/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "1+1 Ucrania",
                            "web": "https://1plus1.video/tvguide/embed/1",
                            "logo": "https://graph.facebook.com/1plus1.ua/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/live/j5TqaWCCdUg",
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
                            "name": "ICTV Ucrania",
                            "web": "https://ictv.ua/ua/online/",
                            "logo": "https://graph.facebook.com/ICTVchannel/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCG26bSkEjJc7SqGsxoHNnbA/live",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://freedom.cdn-01.cosmonova.net.ua/mobile-app/main/freedom/master.m3u8",
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
                    "name": "Int. América",
                    "channels": [
                        {
                            "name": "FOX Live Now USA",
                            "web": "https://www.foxnews.com",
                            "logo": "https://graph.facebook.com/livenowfox/picture?width=200&height=200",
                            "epg_id": null,
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
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCeY0bbntWzzVIaj2z3QigXg/live",
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
                            "name": "CBS News USA",
                            "web": "https://www.cbsnews.com/live/",
                            "logo": "https://graph.facebook.com/CBSNews/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Cheddar USA",
                            "web": "https://cheddar.com/live",
                            "logo": "https://graph.facebook.com/cheddar/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://livestream.chdrstatic.com/b93e5b0d43ea306310a379971e384964acbe4990ce193c0bd50078275a9a657d/cheddar-42620/cheddarweblive/cheddar/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Bloomberg USA",
                            "web": "https://www.bloomberg.com/live/us/btv",
                            "logo": "https://pbs.twimg.com/profile_images/991792042094354432/DG1Ruupb_200x200.jpg",
                            "epg_id": null,
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
                            "extra_info": []
                        },
                        {
                            "name": "CourtTV USA",
                            "web": "https://www.courttv.com/title/court-tv-live-stream-web/",
                            "logo": "https://graph.facebook.com/courttv/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "NASA TV Public",
                            "web": "https://www.nasa.gov/multimedia/nasatv/#public",
                            "logo": "https://graph.facebook.com/NASA/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "NASA TV Media",
                            "web": "https://www.nasa.gov/multimedia/nasatv/#media",
                            "logo": "https://graph.facebook.com/NASA/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "WeatherNation USA",
                            "web": "https://www.weathernationtv.com",
                            "logo": "https://graph.facebook.com/WeatherNation/picture?width=200&height=200",
                            "epg_id": null,
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://dppfr4x925mob.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-jhavhys12ky02/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Newsmax TV USA",
                            "web": "https://www.newsmaxtv.com",
                            "logo": "https://graph.facebook.com/newsmax/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://nmx1ota.akamaized.net/hls/live/2107010/Live_1/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Noticias Telemundo USA",
                            "web": "https://www.telemundo.com",
                            "logo": "https://graph.facebook.com/NoticiasTelemundo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCRwA1NUcUnwsly35ikGhp0A/live",
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
                            "name": "America TeVe USA",
                            "web": "https://www.americateve.com/vivo",
                            "logo": "https://graph.facebook.com/americateve/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live.gideo.video/americateve2/master.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TV Florida USA",
                            "web": "https://tvfloridausa.com/ao-vivo/",
                            "logo": "https://graph.facebook.com/tvfloridausa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16147&live=1&avod=0&hls_marker=1&pod_duration=120&ssai_enabled=1&content_network=streamingconnect&position=preroll&app_bundle=com.streamingconnect.viva&app_category=linear_tv&app_domain=mirametv.live&content_cat=IAB1&content_channel=tvflorida&content_genre=tv_broadcaster&content_rating=TV-G&content_id=mirametv_live&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&min_ad_duration=6&max_ad_duration=120&ifa_type=[IFA_TYPE]",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "NTN24 América",
                            "web": "https://www.ntn24.com/en-vivo/",
                            "logo": "https://graph.facebook.com/NTN24/picture?width=200&height=200",
                            "epg_id": "NTN24.TV",
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCEJs1fTF3KszRJGxJY14VrA/live",
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
                            "name": "Canal 6 Multimedios Mexico",
                            "web": "https://www.multimedios.com/video",
                            "logo": "https://graph.facebook.com/multimediostv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://mdstrm.com/live-stream-playlist/57b4dbf5dbbfc8f16bb63ce1.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Milenio Mexico",
                            "web": "https://www.milenio.com/mileniotv",
                            "logo": "https://graph.facebook.com/MilenioDiario/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCFxHplbcoJK9m70c4VyTIxg/live",
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
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/x90qe0k?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Excelsior Mexico",
                            "web": "https://www.excelsior.com.mx/tv",
                            "logo": "https://graph.facebook.com/ExcelsiorMex/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UClqo4ZAAZ01HQdCTlovCgkA/live",
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
                            "name": "FORO TV Mexico",
                            "web": "https://www.nmas.com.mx/en-vivo/?canal=forotv",
                            "logo": "https://pbs.twimg.com/profile_images/1508338964771459074/JG2pfMx1_200x200.jpg",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "ADN40 Mexico",
                            "web": "https://live.adn40.mx",
                            "logo": "https://graph.facebook.com/ADN40mx/picture?width=200&height=200",
                            "epg_id": "ADN40.TV",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8",
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Mexico Travel TV",
                            "web": "https://www.mexicotravelchannel.com.mx",
                            "logo": "https://graph.facebook.com/MexicoTravelChannelTV/picture?width=200&height=200",
                            "epg_id": null,
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Estrella TV Mexico",
                            "web": "https://estrellatv.com/live/en-vivo/",
                            "logo": "https://graph.facebook.com/EstrellaTVNetwork/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00567-estrellamedia-estrellatv-estrellamedia/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00567-estrellamedia-estrellanews-estrellamedia/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00567-estrellamedia-estrellagames-estrellamedia/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "TELE 10 Nayarit Mexico",
                            "web": "https://tele10.nayarit.gob.mx/en-vivo/",
                            "logo": "https://graph.facebook.com/Tele10Nayarit/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live.iplanay.gob.mx/hls/nayarittv.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Noticias Caracol Colombia",
                            "web": "https://noticias.caracoltv.com/ahora",
                            "logo": "https://graph.facebook.com/NoticiasCaracol/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://x.com/i/broadcasts/1YpJkBwRkrPGj",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC2Xq2PK-got3Rtz9ZJ32hLQ/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Teleantioquia Colombia",
                            "web": "https://www.teleantioquia.co/al-aire/",
                            "logo": "https://graph.facebook.com/CanalTeleantioquia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta118.cdnmedia.tv/teleantioquialive/smil:dvrlive.smil/playlist_DVR.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Canal Capital Colombia",
                            "web": "https://www.canalcapital.gov.co/content/canal-capital-vivo",
                            "logo": "https://graph.facebook.com/CanalCapitalOficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdns.livewave.co:8081/canalcapital/index.m3u8",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://play.cdn.enetres.net/6E5C615AA5FF4123ACAF0DAB57B7B8DC021/022/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Canal Telecaribe Colombia",
                            "web": "https://play.telecaribe.co/senal-en-vivo/",
                            "logo": "https://graph.facebook.com/telecaribeEnvivo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta118.cdnmedia.tv/telecaribetvlive/smil:rtmp01.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta118.cdnmedia.tv/telecaribetvlive/smil:rtmp02.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Canal TRO Colombia",
                            "web": "https://www.canaltro.com/senal-en-vivo-2/",
                            "logo": "https://graph.facebook.com/canaltro/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://liveingesta118.cdnmedia.tv/canaltro2live/smil:live.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG",
                                "REFI1"
                            ],
                            "referer": "https://player.instantvideocloud.net/"
                        },
                        {
                            "name": "Citytv Colombia",
                            "web": "https://citytv.eltiempo.com/en-vivo",
                            "logo": "https://graph.facebook.com/citytv.com.co/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCv5Oy_TJFvGKXjeNzzJE_PQ/live",
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
                            "name": "Todo Noticias Argentina",
                            "web": "https://tn.com.ar/envivo/24hs/",
                            "logo": "https://graph.facebook.com/todonoticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCj6PcyLvpnIRT_2W_mwa9Aw/live",
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
                            "name": "C5N Argentina",
                            "web": "https://www.c5n.com/vivo",
                            "logo": "https://graph.facebook.com/C5N.Noticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCFgk2Q2mVO1BklRQhSv6p0w/live",
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
                            "name": "Telefé Noticias Argentina",
                            "web": "https://telefenoticias.com.ar",
                            "logo": "https://graph.facebook.com/telefe/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UChxGASjdNEYHhVKpl667Huw/live",
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
                            "name": "La Nación Argentina",
                            "web": "https://lnmas.lanacion.com.ar",
                            "logo": "https://graph.facebook.com/lanacion/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA/live",
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
                            "name": "América TV Argentina",
                            "web": "https://www.americatv.com.ar/vivo",
                            "logo": "https://graph.facebook.com/AmericaTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC6NVDkuzY2exMOVFw4i9oHw/live",
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
                            "name": "TV Pública Argentina",
                            "web": "https://www.tvpublica.com.ar",
                            "logo": "https://graph.facebook.com/TVPublica/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCs231K71Bnu5295_x0MB5Pg/live",
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
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=elnueveok&parent=play.tdtchannels.com",
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
                            "name": "Exitosa Noticias Perú",
                            "web": "https://www.exitosanoticias.pe/tv/envivo",
                            "logo": "https://graph.facebook.com/Exitosanoticias/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://luna-1-video.mediaserver.digital/exitosatv_233b-4b49-a726-5a451262/index.fmp4.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Panamericana Perú",
                            "web": "https://panamericana.pe/tvenvivo/hd",
                            "logo": "https://graph.facebook.com/panamericana.pe/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.twitch.tv/?channel=panamericanatvpe&parent=play.tdtchannels.com",
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
                            "name": "Willax Perú",
                            "web": "https://willax.tv/en-vivo/",
                            "logo": "https://graph.facebook.com/willaxtv/picture?width=200&height=200",
                            "epg_id": null,
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "TV Perú",
                            "web": "https://www.tvperu.gob.pe/play",
                            "logo": "https://graph.facebook.com/TVPeruOficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnhd.iblups.com/hls/777b4d4cc0984575a7d14f6ee57dbcaf.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "TV Perú Noticias",
                            "web": "https://www.tvperu.gob.pe/noticias/play",
                            "logo": "https://graph.facebook.com/noticias.tvperu/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnhd.iblups.com/hls/902c1a0395264f269f1160efa00660e4.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Canal IPe Perú",
                            "web": "https://www.canalipe.tv/streaming",
                            "logo": "https://graph.facebook.com/canalipe/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdnhd.iblups.com/hls/3f2cb1658d114f2693eff18d83199e67.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Latina Perú",
                            "web": "https://www.latina.pe/tvenvivo",
                            "logo": "https://graph.facebook.com/Latina.pe/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://redirector.rudo.video/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latina/latina.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://redirector.rudo.video/hls-video/567ffde3fa319fadf3419efda25619456231dfea/latinanoticias/latinanoticias.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://redirector.rudo.video/hls-video/plus226/latina2/latina2.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "NET Channel Perú",
                            "web": "https://www.netchanneltv.com",
                            "logo": "https://pbs.twimg.com/profile_images/1839572220722454528/2u2sUAeY_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://media.streambrothers.com:19360/8158/8158.m3u8",
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
                            "name": "TeleSUR Venezuela",
                            "web": "https://www.telesurtv.net/seccion/programas/",
                            "logo": "https://graph.facebook.com/teleSUR/picture?width=200&height=200",
                            "epg_id": "TeleSUR.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://mblesmain01.telesur.ultrabase.net/mbliveMain/hd/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Globovision Venezuela",
                            "web": "https://globovision.com",
                            "logo": "https://graph.facebook.com/globovision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC06Tup55KpXujnN9LzHXBAw/live",
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
                            "name": "Venezolana de Televisión",
                            "web": "https://www.vtv.gob.ve/en-vivo/",
                            "logo": "https://graph.facebook.com/VTVtuCanal/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/k1yNOrgCd2jz9hBaDXQ?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Televen TV Venezuela",
                            "web": "https://app.televen.com/player/tv?channelId=20000841&categoryId=0&channelNumber=1",
                            "logo": "https://graph.facebook.com/TelevenTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://d39cdj6x0ssnqk.cloudfront.net/out/v1/ae3f5ad3ac9d4bcfbedc1894a62782b4/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "GEO"
                            ]
                        },
                        {
                            "name": "VPI TV Venezuela",
                            "web": "https://vpitv.com/en-vivo/",
                            "logo": "https://graph.facebook.com/vpitv/picture?width=200&height=200",
                            "epg_id": null,
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
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://www.dailymotion.com/embed/video/x8z1nnq?autoplay=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "Canal Antigua Guatemala",
                            "web": "https://canalantigua.tv/envivo/",
                            "logo": "https://graph.facebook.com/canalantigua/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "24h Chile",
                            "web": "https://www.24horas.cl/envivo/",
                            "logo": "https://graph.facebook.com/24horas.cl/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ/live",
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
                            "name": "TELE13 Chile",
                            "web": "https://www.t13.cl/en-vivo",
                            "logo": "https://graph.facebook.com/teletrece/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCsRnhjcUCR78Q3Ud6OXCTNg/live",
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
                            "name": "Meganoticias Chile",
                            "web": "https://www.meganoticias.cl/senal-en-vivo/",
                            "logo": "https://graph.facebook.com/meganoticiascl/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q/live",
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
                            "name": "TeleAmazonas Ecuador",
                            "web": "https://www.teleamazonas.com/teleamazonas-en-vivo/",
                            "logo": "https://graph.facebook.com/TeleamazonasEcuador/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCCwRtme3lumNRQXMO2EvCvw/live",
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
                            "name": "Oromar TV Ecuador",
                            "web": "https://oromartv.com/tv-en-vivo/",
                            "logo": "https://graph.facebook.com/oromartv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.oromar.tv/hls/oromartv_hi/index.m3u8",
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
                            "name": "Bolivia 7.1 TV",
                            "web": "https://www.boliviatv.bo/principal/vivo71.php",
                            "logo": "https://graph.facebook.com/BoliviaTvCanalOficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5ca9af4645e15.streamlock.net/boliviatv/videoboliviatv/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Bolivia 7.2 TV",
                            "web": "https://www.boliviatv.bo/principal/vivo72.php",
                            "logo": "https://graph.facebook.com/BoliviaTvCanalOficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5ca3e84a76d30.streamlock.net/boliviatv2/videoboliviatv2/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Red Pat Bolivia",
                            "web": "https://www.redpat.tv/envivoscz",
                            "logo": "https://graph.facebook.com/patboliviahd/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.redpat.tv/proxy/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Cubavisión TV",
                            "web": "https://teveo.cu/live/video/AKDdWvMTYzfsfnNJ/embed?auto=true",
                            "logo": "https://graph.facebook.com/CubavisionInternacional/picture?width=200&height=200",
                            "epg_id": "Cubavision.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cdn.teveo.cu/live/video/A36pWmuWvZBQskuZ/ngrp:gppfydfzpSUn9Udy.stream/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "REF",
                                "NONAV"
                            ],
                            "referer": "https://teveo.cu/live/video/AKDdWvMTYzfsfnNJ/embed?auto=true"
                        },
                        {
                            "name": "CDN 37 República Dominicana",
                            "web": "https://cdn.com.do/envivo/",
                            "logo": "https://graph.facebook.com/cdn.com.do/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Telemicro República Dominicana",
                            "web": "https://telemicro.com.do/players/5bot/",
                            "logo": "https://pbs.twimg.com/profile_images/1587264071346393089/-FeTL7C8_200x200.jpg",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Color Visión República Dominicana",
                            "web": "https://colorvision.com.do/en-vivo/",
                            "logo": "https://graph.facebook.com/colorvisionc9/picture?width=200&height=200",
                            "epg_id": null,
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "HCH Honduras",
                            "web": "https://hch.tv/live/",
                            "logo": "https://pbs.twimg.com/profile_images/1571129300623015936/-HJCmEk3_200x200.jpg",
                            "epg_id": null,
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "ABC TV Paraguay",
                            "web": "https://www.abc.com.py/tv/",
                            "logo": "https://graph.facebook.com/ABCTVpy/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://livecdn.use1-0004.jwplive.com/live/sites/rmOO40BU/media/GQagSggs/live.isml/.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG"
                            ]
                        },
                        {
                            "name": "LaTele Paraguay",
                            "web": "https://www.latele.com.py",
                            "logo": "https://graph.facebook.com/LatelePy/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Trece Paraguay",
                            "web": "https://trece.com.py",
                            "logo": "https://graph.facebook.com/trecepy/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://geo.dailymotion.com/player/x1at3a.html?video=k4nLYiNrBX8W5jDbSlM",
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
                            "name": "Telefuturo Paraguay",
                            "web": "https://www.telefuturo.com.py/envivo",
                            "logo": "https://graph.facebook.com/Telefuturo/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Unicanal Paraguay",
                            "web": "https://unicanal.com.py",
                            "logo": "https://graph.facebook.com/Unicanal/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Noticias NPY Paraguay",
                            "web": "https://www.npy.com.py/en-vivo",
                            "logo": "https://graph.facebook.com/npyoficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Nicavisión TV Nicaragua",
                            "web": "http://www.canal12.com.ni/en-vivo",
                            "logo": "https://graph.facebook.com/200823376627607/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "WTV Nicaragua",
                            "web": "https://wtvnicaragua.com/player/tv-player.html",
                            "logo": "https://graph.facebook.com/WTVNicaraguacanal20/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "TeleDiario Costa Rica",
                            "web": "https://www.telediario.cr/television",
                            "logo": "https://graph.facebook.com/MultimediosCR/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://mdstrm.com/live-stream-playlist/5a7b1e63a8da282c34d65445.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Trece Costa Rica",
                            "web": "https://costaricamedios.cr/envivo",
                            "logo": "https://yt3.ggpht.com/ytc/AMLnZu9k8cMAf0m3UXLYXyfrvzKd3nmOuIYOc5k4ZGOWnA=s200",
                            "epg_id": null,
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
                                "EMB",
                                "EXTB"
                            ]
                        },
                        {
                            "name": "CNN Brasil",
                            "web": "https://www.cnnbrasil.com.br/ao-vivo",
                            "logo": "https://graph.facebook.com/cnnbrasil/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCvdwhh_fDyWccR42-rReZLw/live",
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
                            "name": "SBT Interior Brasil",
                            "web": "https://sbtinterior.com/aovivo/",
                            "logo": "https://graph.facebook.com/sbtnointerior/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Record News Brasil",
                            "web": "https://noticias.r7.com/record-news",
                            "logo": "https://graph.facebook.com/recordnews/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCuiLR4p6wQ3xLEm15pEn1Xw/live",
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
                            "name": "Rede Massa Brasil",
                            "web": "https://www.redemassa.com.br/aovivo/",
                            "logo": "https://graph.facebook.com/RedeMassa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCX0P-o4zRG7vkGl226MfRYg/live",
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
                            "name": "CGTN",
                            "web": "https://espanol.cgtn.com/en-directo",
                            "logo": "https://graph.facebook.com/cgtnenespanol/picture?width=200&height=200",
                            "epg_id": "CGTN.TV",
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://espanol-livews.cgtn.com/hls/LSveOGBaBw41Ea7ukkVAUdKQ220802LSTexu6xAuFH8VZNBLE1ZNEa220802cd/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://news.cgtn.com/resource/live/espanol/cgtn-e.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "CGTN News",
                            "web": "https://www.cgtn.com/tv",
                            "logo": "https://graph.facebook.com/ChinaGlobalTVNetwork/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://english-livebkali.cgtn.com/live/encgtn.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "CGTN Documentary",
                            "web": "https://www.cgtn.com/channel/documentary",
                            "logo": "https://graph.facebook.com/ChinaGlobalTVNetwork/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://english-livebkali.cgtn.com/live/doccgtn.m3u8",
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
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Nippon News TV Japan",
                            "web": "https://news.ntv.co.jp/live",
                            "logo": "https://graph.facebook.com/ntvnews24/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://n24-cdn-live-x.ntv.co.jp/ch01/index.m3u8?",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Arirang TV Korea",
                            "web": "https://www.arirang.com/live",
                            "logo": "https://graph.facebook.com/arirangtv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://amdlive-ch01-g-ctnd-com.akamaized.net/arirang_1gch/smil:arirang_1gch.smil/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "KBS World Korea",
                            "web": "https://world.kbs.co.kr",
                            "logo": "https://graph.facebook.com/KBSWORLD/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC5BMQOsAB8hKUyHu9KI6yig/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCWw_gejTX29Yn89LLpcINZQ/live",
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
                            "name": "Al Arabiya Emiratos Árabes",
                            "web": "https://www.alarabiya.net/ar/live-stream",
                            "logo": "https://graph.facebook.com/AlArabiya/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Ary News Pakistan",
                            "web": "https://live.arynews.tv",
                            "logo": "https://graph.facebook.com/arynewsasia/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCMmpLL2ucRHAXbNHiCPyIyg/live",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://jk3lz82elw79-hls-live.5centscdn.com/newgeonews/07811dc6c422334ce36a09ff5cd6fe71.sdp/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Express News Pakistan",
                            "web": "https://www.express.pk/live/",
                            "logo": "https://graph.facebook.com/expressnewspk/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCTur7oM6mLL0rM2k0znuZpQ/live",
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
                            "name": "India Today",
                            "web": "https://www.indiatoday.in/livetv",
                            "logo": "https://graph.facebook.com/IndiaToday/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Times Now India",
                            "web": "https://timesofindia.indiatimes.com/live-tv",
                            "logo": "https://graph.facebook.com/Timesnow/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCckHqySbfy5FcPP6MD_S-Yg/live",
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
                            "name": "Republic World TV India",
                            "web": "https://www.republicworld.com/livetv",
                            "logo": "https://graph.facebook.com/RepublicWorld/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://vg-republictvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-366023/main.m3u8",
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
                            "logo": "https://pbs.twimg.com/profile_images/1645382928422109184/lUdeHBAs_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live.presstv.ir/hls/hispantv_5_482/index.m3u8",
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
                            "name": "TVBS News Taiwán",
                            "web": "https://news.tvbs.com.tw/live/news4live",
                            "logo": "https://graph.facebook.com/tvbsfb/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC5nwNW4KdC0SzrhF9BXEYOQ/live",
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
                            "name": "SET News Taiwán",
                            "web": "https://live.setn.com",
                            "logo": "https://graph.facebook.com/setnews/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC2TuODJhC03pLgd6MpWP0iw/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCoNYj9OFHZn3ACmmeRCPwbA/live",
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
                            "name": "UNTV News & Rescue Filipinas",
                            "web": "https://www.untvweb.com/news/",
                            "logo": "https://graph.facebook.com/UNTVNewsRescue/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC3XaG-7UVi2vD8ZZEMNnnpw/live",
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
                            "name": "RTHK 31 32 Hong Kong",
                            "web": "https://www.rthk.hk/tv",
                            "logo": "https://graph.facebook.com/RTHK.HK/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://www.rthk.hk/feeds/dtt/rthktv31_https.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://www.rthk.hk/feeds/dtt/rthktv32_https.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Teledifusão de Macau",
                            "web": "https://www.tdm.com.mo/zh-hant/live",
                            "logo": "https://graph.facebook.com/Canal.Macau/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://live5.tdm.com.mo/ch2/ch2.live/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "PT"
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://live5.tdm.com.mo/ch1/ch1.live/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://live5.tdm.com.mo/ch3/ch3.live/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Oman TV",
                            "web": "https://www.omaninfo.om/omantv",
                            "logo": "https://graph.facebook.com/OmanTvGeneral/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EMB"
                            ]
                        }
                    ]
                },
                {
                    "name": "Int. África",
                    "channels": [
                        {
                            "name": "Medi1 TV Marruecos",
                            "web": "https://medi1tv.com",
                            "logo": "https://graph.facebook.com/Medi1TV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming1.medi1tv.com/live/smil:medi1tv.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming1.medi1tv.com/live/smil:medi1fr.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://streaming1.medi1tv.com/live/smil:medi1ar.smil/playlist.m3u8?DVR",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "SNRT Al Aoula Marruecos",
                            "web": "https://snrtlive.ma/fr/al-aoula",
                            "logo": "https://graph.facebook.com/AlAoulaTVMaroc/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://snrt.player.easybroadcast.io/events/73_aloula_w1dqfwm",
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
                            "name": "SNRT Laayoune El Aaiún Marruecos",
                            "web": "https://snrtlive.ma/fr/laayoune",
                            "logo": "https://yt3.googleusercontent.com/ytc/AIdro_lmtJVOIgmbIZIBq75f-RE14vGPXH6I5Ldx68nUeGioig=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://snrt.player.easybroadcast.io/events/73_laayoune_pgagr52",
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
                            "name": "SNRT Arryadia Marruecos",
                            "web": "https://snrtlive.ma/fr/arryadia",
                            "logo": "https://graph.facebook.com/ArryadiaTVMaroc/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://snrt.player.easybroadcast.io/events/73_arryadia_k2tgcj0",
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
                            "name": "SNRT Athaqafia Marruecos",
                            "web": "https://snrtlive.ma/fr/athaqafia",
                            "logo": "https://yt3.ggpht.com/Sc4Au03kwE6G7HTqUswWbB11CofXBg0Fk-ztHkpBE-VNjsGNOSFrgEwB3eIWBJ8Vhs4goP1z=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://snrt.player.easybroadcast.io/events/73_arrabia_hthcj4p",
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
                            "name": "SNRT Al Maghribia Marruecos",
                            "web": "https://snrtlive.ma/fr/almaghribia",
                            "logo": "https://pbs.twimg.com/profile_images/1387335238947414017/CVzIRZfG_200x200.png",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://snrt.player.easybroadcast.io/events/73_almaghribia_83tz85q",
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
                            "name": "AfricaNews",
                            "web": "https://www.africanews.com/live/",
                            "logo": "https://graph.facebook.com/africanews.channel/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UC1_E8NeF5QHY2dtdLRBCCLA/live",
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
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UChd1DEecCRlxaa0-hvPACCw/live",
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
                            "name": "Channels TV Nigeria",
                            "web": "https://www.channelstv.com",
                            "logo": "https://graph.facebook.com/channelsforum/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCEXGDNclvmg6RW0vipJYsTQ/live",
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
                            "name": "TVGE 1 Guinea Ecuatorial",
                            "web": "https://www.tvgelive.gq/live.php",
                            "logo": "https://www.tvgelive.gq/images/logo-dark.png",
                            "epg_id": null,
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
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=12830&live=1",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "SenTV Senegal",
                            "web": "https://sentv.sn/Sentv",
                            "logo": "https://graph.facebook.com/sentvtelevision/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCKbMNmSR3KlI9v3xeInHEYA/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        }
                    ]
                },
                {
                    "name": "Int. Otros",
                    "channels": [
                        {
                            "name": "ABC News Australia",
                            "web": "https://iview.abc.net.au/video/NS1413V001S00",
                            "logo": "https://graph.facebook.com/abcnews.au/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://abc-news-dmd-streams-1.akamaized.net/out/v1/abc83881886746b0802dc3e7ca2bc792/index.m3u8",
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
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Bloomberg Quicktake",
                            "web": "https://www.bloomberg.com/qt/live",
                            "logo": "https://yt3.ggpht.com/fTP5oS376nZhVbS55-OocogCJCDH4UXIyRrirF6keIya4AN4I54TmLkFnnjvE4FRq5UMv8BO=s200",
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
                            "web": "https://www.fashiontv.com/watch/18717158?entity_id=312066",
                            "logo": "https://graph.facebook.com/FTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=5457&live=1",
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
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://59ec5453559f0.streamlock.net/miamitv/smil:WEB/playlist.m3u8",
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
                                    "url": "https://59ec5453559f0.streamlock.net/JennyLive/smil:41235/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://59ec5453559f0.streamlock.net/miamitvmusic/smil:WEB/playlist.m3u8",
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
                            "web": "https://www.youtube.com/@ClassicMrBean",
                            "logo": "https://graph.facebook.com/MrBean/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCEwIUtFBhaI2L2PuKv0KL2g/live",
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
                        },
                        {
                            "name": "Earth TV",
                            "web": "https://www.earthtv.com/en",
                            "logo": "https://graph.facebook.com/earthTV/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "stream",
                                    "url": "https://player.earthtv.com/?token=EAIY6wE4osiMWEgG.CgdlYXJ0aHR2EgtMTnJTM2E0QUJjbxoLSGljWUp6RUFCNUU.Zi8kA2JhC9NepQoaRue05uR6yMmW-UeiwnpJerMi7bkIV-yj4jU9M1PjaQP-d8sBdROeIiGkz8BeflskG9M25w",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTB"
                            ]
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
                                    "url": "https://www.youtube.com/user/FIBAWorld/live",
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
                            "name": "Premier Padel",
                            "web": "https://premierpadel.com/es/wheretowatch",
                            "logo": "https://graph.facebook.com/premierpadel/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/@PremierPadelTV",
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
                            "name": "Red Bull TV",
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
                            "name": "Motorsport.tv",
                            "web": "https://motorsport.tv/apps/735/2189280-2276194",
                            "logo": "https://graph.facebook.com/Motorsport.tvUK/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://7daa9e4f.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X01vdG9yc3BvcnR0dl9ITFM/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Meridiano Venezuela",
                            "web": "https://meridiano.net/meridianotv.html",
                            "logo": "https://graph.facebook.com/Meridiano.Dearmas/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCcYfZbinuodyF8rVkl4u7Lw/live",
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
                            "name": "Stadium USA",
                            "web": "https://watchstadium.com/live/",
                            "logo": "https://pbs.twimg.com/profile_images/1912970794524610560/M1vEMVlm_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://2d006483e2aa43fe812f7b464cb2916d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung_Stadium/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Garage TV Argentina",
                            "web": "https://elgarage.com",
                            "logo": "https://pbs.twimg.com/profile_images/1169992187314167808/TeabGtEB_200x200.jpg",
                            "epg_id": null,
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
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Best Cable Sports Perú",
                            "web": "https://bestcableperu.com.pe/lima/enVivo/bestCableSport",
                            "logo": "https://pbs.twimg.com/profile_images/1574548998999998464/IK17LZ5K_200x200.jpg",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "MoreThanSports TV",
                            "web": "https://morethansports.tv",
                            "logo": "https://graph.facebook.com/mtssportstv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Int. Table Soccer Federation",
                            "web": "https://www.tablesoccer.org",
                            "logo": "https://graph.facebook.com/ITSF.tablesoccer/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=7333",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Bike Channel",
                            "web": "https://bikechannel.it/live-tv",
                            "logo": "https://graph.facebook.com/bikechannelofficial/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.prod-01.milano.nxmedge.net/argocdn/bikechannel/video.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "IT"
                                }
                            ],
                            "extra_info": []
                        }
                    ]
                },
                {
                    "name": "Musicales",
                    "channels": [
                        {
                            "name": "Sol Música España",
                            "web": "https://tuamc.tv/sol-musica",
                            "logo": "https://graph.facebook.com/solmusica/picture?width=200&height=200",
                            "epg_id": "SolMusica.TV",
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
                            "name": "Activa TV España",
                            "web": "https://www.emisorasmusicales.net/activa-tv/",
                            "logo": "https://graph.facebook.com/activafm.radiomusical/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Cadena Elite España",
                            "web": "https://www.cadenaelite.es",
                            "logo": "https://graph.facebook.com/cadena.elitegranada/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Molahits TV España",
                            "web": "https://www.molatv.cat",
                            "logo": "https://graph.facebook.com/molahitstv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ventdelnord.tv:8080/mola/directe.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "La Urban TV España",
                            "web": "https://www.urbanrevolution.es/emision-en-directo-de-la-urban-tv/",
                            "logo": "https://graph.facebook.com/urbanrevolution.es/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Verbena TV España",
                            "web": "https://verbenafm.com",
                            "logo": "https://pbs.twimg.com/profile_images/1463159511133442059/uVV15n4k_200x200.jpg",
                            "epg_id": null,
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
                            "name": "Ibiza Global TV España",
                            "web": "https://www.ibizaglobalradio.com/ibiza-global-tv.html",
                            "logo": "https://graph.facebook.com/ibizaglobaltv/picture?width=200&height=200",
                            "epg_id": "IbizaGlobal.TV",
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "Spektra TV España",
                            "web": "https://spektratv.com",
                            "logo": "https://graph.facebook.com/spektramusictv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Café del Mar Ibiza España",
                            "web": "https://cafedelmar.com",
                            "logo": "https://graph.facebook.com/cafedelmaribizaofficialpage/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCha0QKR45iw7FCUQ3-1PnhQ/live",
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
                            "name": "Tropical Moon Salsa TV",
                            "web": "https://tropicalmoontv.com/canales/",
                            "logo": "https://graph.facebook.com/tropicalmoonfm/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16185&live=1&avod=0&hls_marker=1&pod_duration=120&position=preroll&app_bundle=com.streamingconnect.viva&app_category=linear_tv&content_channel=salsatv&content_cat=IAB14&content_genre=tv_broadcaster&content_id=mirametv_live&content_network=streamingconnect&content_rating=TV-G&ssai_enabled=1&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&min_ad_duration=6&max_ad_duration=120&app_domain=mirametv.live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Tropical Moon Cumbia TV",
                            "web": "https://tropicalmoontv.com/canales/",
                            "logo": "https://graph.facebook.com/tropicalmoonfm/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?cb=[CACHEBUSTER]&network_id=16184&live=1&avod=0&hls_marker=1&pod_duration=120&position=preroll&app_bundle=com.streamingconnect.viva&app_category=linear_tv&content_channel=cumbiatv&content_cat=IAB14&content_genre=tv_broadcaster&content_id=mirametv_live&content_network=streamingconnect&content_rating=TV-G&ssai_enabled=1&us_privacy=[US_PRIVACY]&gdpr=[GDPR]&ifa_type=[IFA_TYPE]&min_ad_duration=6&max_ad_duration=120&app_domain=mirametv.live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
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
                                    "url": "https://www.youtube.com/channel/UCsN8M73DMWa8SPp5o_0IAQQ/live",
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
                            "name": "RTL 102.5 Italia",
                            "web": "https://www.rtl.it/radiovisione",
                            "logo": "https://graph.facebook.com/RTL102.5/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Number1 FM Turquía",
                            "web": "https://www.numberone.com.tr/2015/12/18/nr1-tv-canli-yayin/",
                            "logo": "https://graph.facebook.com/Number1FM/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Kronehit Austria",
                            "web": "https://www.kronehit.at/",
                            "logo": "https://graph.facebook.com/kronehit/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "4FUN TV Polonia",
                            "web": "https://4fun.tv",
                            "logo": "https://graph.facebook.com/4FUN.TV/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "QMusic Países Bajos",
                            "web": "https://qmusic.nl/live/kijk",
                            "logo": "https://graph.facebook.com/QmusicNL/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Ocko Chequia",
                            "web": "https://ocko.tv/zive",
                            "logo": "https://graph.facebook.com/tvocko/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ocko-live.ssl.cdn.cra.cz/channels/ocko/playlist/cze/live_hq.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "CZ"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Star Chequia",
                            "web": "https://ocko.tv/zive?channel=star",
                            "logo": "https://graph.facebook.com/ockostar/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist/cze/live_hq.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "CZ"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Expres Chequia",
                            "web": "https://ocko.tv/zive?channel=expres",
                            "logo": "https://graph.facebook.com/OckoExpres/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist/cze/live_hq.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "CZ"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "m2o Italia",
                            "web": "https://www.m2o.it/m2o-tv/",
                            "logo": "https://graph.facebook.com/radiom2o/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Radio Capital Italia",
                            "web": "https://www.capital.it/tv/",
                            "logo": "https://graph.facebook.com/RadioCapitalfm/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "IT"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Radio ZETA Italia",
                            "web": "https://play.rtl.it/live/18/radio-zeta-radiovisione/",
                            "logo": "https://graph.facebook.com/radiozeta.it/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "IT"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Rock TV Romania",
                            "web": "https://www.rockfm.ro/rocktv",
                            "logo": "https://graph.facebook.com/rockfmro/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "On TV Portugal",
                            "web": "https://www.onfm.pt",
                            "logo": "https://graph.facebook.com/ONFM93.8/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "NRG91 Grecia",
                            "web": "https://nrg91.gr/nrgtv.html",
                            "logo": "https://yt3.ggpht.com/KGxBhcmGT-UX_3Hhnfw7Gwnypyn4XzUQ3_OElJuNKllBcZmE58-z_FpozwfIxl9fA7z9RPnVBwE=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://5c389faa13be3.streamlock.net:9553/onweb/live/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Retro Music TV Chequia",
                            "web": "http://retromusic.cz/#retro_tv",
                            "logo": "https://graph.facebook.com/retromusic/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Power TV Turquía",
                            "web": "https://www.powerapp.com.tr/tvs/power-tvs/powertv/",
                            "logo": "https://graph.facebook.com/powerapp/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "CMC Croacia",
                            "web": "https://cmc.com.hr/program/cmc-tv-stream/",
                            "logo": "https://graph.facebook.com/CroatianMusicChannel/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://stream.cmctv.hr:49998/cmc/live.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Sky Folk Macedonia",
                            "web": "https://skyfolk.mk",
                            "logo": "https://graph.facebook.com/skyfolk.mk/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://eu.live.skyfolk.mk/live.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "1Muz Bielorrusia",
                            "web": "http://www.1muz.com",
                            "logo": "https://graph.facebook.com/onemusicchannel/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "http://hz1.teleport.cc/HLS/HD.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "http://hz1.teleport.cc/HLS/SD.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "RU.TV Rusia",
                            "web": "https://ru.tv/watch/online",
                            "logo": "https://yt3.ggpht.com/NRCQpVxbetuJyjtPjotQ4H7rq3nfFm0J2VEc2aBs7XQV7-lBFqZMfu2tGZNGOfl7TPPdQjCMxQ=s200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://hls-03-video.webcaramba.com/rutv/live.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Muzzik TV Serbia",
                            "web": "https://muzzik.spectar.tv/#/mts",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Rock&Roll Serbia",
                            "web": "https://muzzik.spectar.tv/#/mtsclassic",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Pop Star Serbia",
                            "web": "https://muzzik.spectar.tv/#/ccc",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Worldwide Serbia",
                            "web": "https://muzzik.spectar.tv/#/wwm",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Jeka Serbia",
                            "web": "https://muzzik.spectar.tv/#/jeka",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Tiktak Serbia",
                            "web": "https://muzzik.spectar.tv/#/mediteraneo_muzik",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik ZZ TV Serbia",
                            "web": "https://muzzik.spectar.tv/#/wwm_africa",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Sense Serbia",
                            "web": "https://muzzik.spectar.tv/#/dB",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik MTS Serbia",
                            "web": "https://muzzik.spectar.tv/#/electro",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Flashback Serbia",
                            "web": "https://muzzik.spectar.tv/#/adr",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Moba Serbia",
                            "web": "https://muzzik.spectar.tv/#/moba",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
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
                                "UAG"
                            ]
                        },
                        {
                            "name": "Muzzik Electro Serbia",
                            "web": "https://muzzik.spectar.tv/#/zz4000",
                            "logo": "https://graph.facebook.com/muzzik.television/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://muzzik-live.morescreens.com/mts-9/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": [
                                "UAG"
                            ]
                        },
                        {
                            "name": "5k V2Beat TV",
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
                            "name": "Dance TV Estonia",
                            "web": "https://www.dancetv.net",
                            "logo": "https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://m1b2.worldcast.tv/dancetelevisiontwo/2/dancetelevisiontwo.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://m2b2.worldcast.tv:7443/dancetelevisionthree/2/dancetelevisionthree.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://m2b2.worldcast.tv:7443/dancetelevisionfour/2/dancetelevisionfour.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://m2b2.worldcast.tv:7443/dancetelevisionfive/2/dancetelevisionfive.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://mbit1.worldcast.tv/dancetelevisioneight/multibit.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "m3u8",
                                    "url": "https://mbit1.worldcast.tv/dancetelevisionnine/multibit.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "The K-POP Korea",
                            "web": "https://mtv.sbs.co.kr/channel.html",
                            "logo": "https://pbs.twimg.com/profile_images/1942537722054225920/QrqP6eqf_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCoRXPcv8XK5fAplLbk9PTww/live",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                },
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCITH7URIRpb8yoshUwGE9jg/live",
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
                            "name": "VM Latino Costa Rica",
                            "web": "https://vmlatino.com/en-vivo/",
                            "logo": "https://graph.facebook.com/vmlatinocr/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Venus Media Paraguay",
                            "web": "https://www.venus.com.py/envivo",
                            "logo": "https://pbs.twimg.com/profile_images/1758522981175754752/6DxX5Hbv_200x200.jpg",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Top Latino TV Perú",
                            "web": "https://toplatino.net/tv/",
                            "logo": "https://graph.facebook.com/toplatinotv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "La Mega Mundial USA",
                            "web": "https://www.lamegamundial.com",
                            "logo": "https://graph.facebook.com/lamegaworldwide/picture?width=200&height=200",
                            "epg_id": null,
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
                                "EXTA"
                            ]
                        },
                        {
                            "name": "30A Music USA",
                            "web": "https://30a-tv.com/30a/30a-tv-music-channel/",
                            "logo": "https://graph.facebook.com/30atv/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Ditty TV USA",
                            "web": "https://dittytv.com/watch/",
                            "logo": "https://graph.facebook.com/DittyTV/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "RadioU TV USA",
                            "web": "https://radiou.com/tv/",
                            "logo": "https://graph.facebook.com/RadioU/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://1826200335.rsc.cdn77.org/1826200335/index.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": [
                                "REF",
                                "NONAV"
                            ],
                            "referer": "https://radiou.com/tv/"
                        },
                        {
                            "name": "Retro Plus TV Chile",
                            "web": "https://www.retroplustv.com/#se%C3%B1ales",
                            "logo": "https://graph.facebook.com/retroplustv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://scl.edge.grupoz.cl/retroplustvuno/live/playlist.m3u8",
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
                            "name": "Portal Foxmix Chile",
                            "web": "https://www.portalfoxmix.cl/tv/",
                            "logo": "https://yt3.ggpht.com/ytc/AAUvwnj90kC8kqjZ69oiVT718JUs9iedB5o1w9cKfApo=s200",
                            "epg_id": null,
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
                            "name": "Spirit TV USA",
                            "web": "https://myspirit.tv",
                            "logo": "https://graph.facebook.com/MySpirittv/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Radio María España",
                            "web": "https://radiomaria.es/directo/",
                            "logo": "https://graph.facebook.com/RadioMariaSpa/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCbX1IDSwem3w0HfBP4F_BYw/live",
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
                            "name": "Abadia de Montserrat España",
                            "web": "https://abadiamontserrat.cat/montserrat-tv/",
                            "logo": "https://graph.facebook.com/AbadiaMontserrat/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCFrlaCzXVVlK_eiVNvYoezA/live",
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
                            "name": "Ecclesia COPE España",
                            "web": "https://www.cope.es/religion",
                            "logo": "https://graph.facebook.com/ecclesiacope/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Solidaria TV España",
                            "web": "https://es.solidariatv.com/en-vivo",
                            "logo": "https://graph.facebook.com/solidariatv/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "RTV Vida España",
                            "web": "https://vidartv.com/television/",
                            "logo": "https://pbs.twimg.com/profile_images/1359486927406321664/WZXLfd2h_200x200.jpg",
                            "epg_id": null,
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
                            "name": "RTV Diocesana Toledo España",
                            "web": "https://rtvd.org",
                            "logo": "https://pbs.twimg.com/profile_images/1730156030795939840/NtRBSxdr_200x200.jpg",
                            "epg_id": null,
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
                            "name": "TBN España",
                            "web": "https://xn--tbnespaa-j3a.es",
                            "logo": "https://graph.facebook.com/TBNEspana/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Cetelmon TV España",
                            "web": "https://www.cetelmon.tv",
                            "logo": "https://graph.facebook.com/cetelmon.television/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "http://player.cetelmon.tv/protecteddfd43c2f3a8b41f3f28582bf8993aca6/992_high.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": null
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "Vatican News",
                            "web": "https://www.vaticannews.va/es.html",
                            "logo": "https://graph.facebook.com/vaticannews.es/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "youtube",
                                    "url": "https://www.youtube.com/channel/UCnB5vfb9FMMNTnC6-kAT3fQ/live",
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
                            "name": "EWTN",
                            "web": "https://ewtn.es/en-directo/",
                            "logo": "https://graph.facebook.com/ewtnespanol/picture?width=200&height=200",
                            "epg_id": "EWTN.TV",
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
                            "name": "ESNE",
                            "web": "https://elsembradorministries.com/esne_deployment/tv",
                            "logo": "https://graph.facebook.com/elsembradoresne/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [],
                            "extra_info": [
                                "EXTA"
                            ]
                        },
                        {
                            "name": "CBN USA",
                            "web": "https://www1.cbn.com/tv/cbn-espanol",
                            "logo": "https://graph.facebook.com/cbnonline/picture?width=200&height=200",
                            "epg_id": null,
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
                                    "url": "https://bcovlive-a.akamaihd.net/re8d9f611ee4a490a9bb59e52db91414d/us-east-1/734546207001/playlist.m3u8",
                                    "geo2": null,
                                    "res": null,
                                    "lang": "EN"
                                }
                            ],
                            "extra_info": []
                        },
                        {
                            "name": "María Visión Mexico",
                            "web": "https://www.mariavision.com/mariavisionenvivo",
                            "logo": "https://graph.facebook.com/mariavision/picture?width=200&height=200",
                            "epg_id": null,
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
                            "name": "Enlace TV Costa Rica",
                            "web": "https://www.enlace.org/envivo/",
                            "logo": "https://graph.facebook.com/enlacetv/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://livecdn.enlace.plus/enlace/smil:enlace-hd.smil/playlist.m3u8",
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
                            "web": "https://www.redevida.com.br/ao-vivo",
                            "logo": "https://graph.facebook.com/redevida/picture?width=200&height=200",
                            "epg_id": null,
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index.m3u8",
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
                            "options": [
                                {
                                    "format": "m3u8",
                                    "url": "https://3abn.bozztv.com/3abn2/Lat_live/smil:Lat_live.smil/playlist.m3u8",
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
                        }
                    ]
                }
            ]
        }
    ],
    "updated": 1756074875
};