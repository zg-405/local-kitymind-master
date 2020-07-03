var jsonp;
var a = "";
var childwin;
$(document).ready(function () {

    setCookie('modify_flag', 0 ,1);

    //json数据存放
    jsonp = '{\n' +
        '  "root": {\n' +
        '    "data": {\n' +
        '      "id": "8d859eaa143a",\n' +
        '      "created": 1592453867,\n' +
        '      "text": "数字钢卷"\n' +
        '    },\n' +
        '    "children": [\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3ko77u5v3s0",\n' +
        '          "created": 1592528392809,\n' +
        '          "text": "；铁水",\n' +
        '          "layout": null\n' +
        '        },\n' +
        '        "children": []\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3ko7dwxzts0",\n' +
        '          "created": 1592528406037,\n' +
        '          "text": "转炉",\n' +
        '          "layout": null\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3ko8bk4cpc0",\n' +
        '              "created": 1592528479273,\n' +
        '              "text": "精炼 ",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3ko8lx0tbc0",\n' +
        '              "created": 1592528501821,\n' +
        '              "text": "热轧",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3ko8lx0tbc0",\n' +
        '              "created": 1592528501821,\n' +
        '              "text": "冷轧",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3ko9w20rm00",\n' +
        '              "created": 1592528602255,\n' +
        '              "text": "？不同的json传入不同的页面",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "123123131",\n' +
        '          "created": 123123123,\n' +
        '          "text": "告诫",\n' +
        '          "expandState": "expand",\n' +
        '          "layout": null\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kuum1weug0",\n' +
        '              "created": 1592547152787,\n' +
        '              "text": "先大略做出来，精细的活现在不考虑",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3kupkaaom80",\n' +
        '          "created": 1592546757120,\n' +
        '          "text": "背景及主题",\n' +
        '          "expandState": "expand",\n' +
        '          "layout": null\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kusuhwqao0",\n' +
        '              "created": 1592547014440,\n' +
        '              "text": "保留，并更改到其他地方",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kupu1y6ww0",\n' +
        '              "created": 1592546778383,\n' +
        '              "text": "主题改为紧凑",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kuqoosejs0",\n' +
        '              "created": 1592546845067,\n' +
        '              "text": "原本右键事件去除，可以自定义事件",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kuq2peh2g0",\n' +
        '              "created": 1592546797215,\n' +
        '              "text": "查看是否有按层级划分主题，暂没找到功能（每一层不同的颜色）",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kv15sicrk0",\n' +
        '              "created": 1592547665939,\n' +
        '              "text": "左下小手默认选中",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3kuquad6p40",\n' +
        '          "created": 1592546857256,\n' +
        '          "text": "单击节点出来明细框（明细框只读）",\n' +
        '          "layout_filetree-down_offset": {\n' +
        '            "x": 73,\n' +
        '            "y": 16\n' +
        '          },\n' +
        '          "layout": null\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kurdvvars0",\n' +
        '              "created": 1592546899915,\n' +
        '              "text": "明细框可以是另一个json，亦或其他",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kurjz20bk0",\n' +
        '              "created": 1592546913168,\n' +
        '              "text": "明细框在右边",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3kurpq7xb40",\n' +
        '              "created": 1592546925695,\n' +
        '              "text": "明细框 可以不是本json内容，以某种形式关联",\n' +
        '              "layout": null\n' +
        '            },\n' +
        '            "children": []\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3o4tg76e2o0",\n' +
        '          "created": 1592879952650,\n' +
        '          "text": "右键事件样式可以不变，事件内容更改",\n' +
        '          "layout_bottom_offset": {\n' +
        '            "x": 23.000000342726707,\n' +
        '            "y": 0\n' +
        '          }\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3o9kk1jiag0",\n' +
        '              "created": 1592893361288,\n' +
        '              "text": "右键事件和明细表",\n' +
        '              "expandState": "expand"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3p6ao9e4zk0",\n' +
        '                  "created": 1592985683455,\n' +
        '                  "text": "双击编辑需要取消",\n' +
        '                  "expandState": "expand"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              },\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3o4txlfkvc0",\n' +
        '                  "created": 1592879990517,\n' +
        '                  "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                  "expandState": "expand"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              },\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3o8zyfoqrc0",\n' +
        '                  "created": 1592891746971,\n' +
        '                  "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                  "expandState": "collapse"\n' +
        '                },\n' +
        '                "children": [\n' +
        '                  {\n' +
        '                    "data": {\n' +
        '                      "id": "c3o4uyq4ryg0",\n' +
        '                      "created": 1592880071342,\n' +
        '                      "text": "插入主题，在其他页面进行更改json",\n' +
        '                      "expandState": "expand"\n' +
        '                    },\n' +
        '                    "children": [\n' +
        '                      {\n' +
        '                        "data": {\n' +
        '                          "id": "c3o9ouh6km00",\n' +
        '                          "created": 1592893697458,\n' +
        '                          "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                        },\n' +
        '                        "children": []\n' +
        '                      },\n' +
        '                      {\n' +
        '                        "data": {\n' +
        '                          "id": "c3o4wsmbr2w0",\n' +
        '                          "created": 1592880214780,\n' +
        '                          "text": "点击某节点后，进行插入删除操作"\n' +
        '                        },\n' +
        '                        "children": [\n' +
        '                          {\n' +
        '                            "data": {\n' +
        '                              "id": "c3o9n3bpmww0",\n' +
        '                              "created": 1592893559990,\n' +
        '                              "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                            },\n' +
        '                            "children": []\n' +
        '                          },\n' +
        '                          {\n' +
        '                            "data": {\n' +
        '                              "id": "c3o9nw5cmnc0",\n' +
        '                              "created": 1592893622732,\n' +
        '                              "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                            },\n' +
        '                            "children": []\n' +
        '                          },\n' +
        '                          {\n' +
        '                            "data": {\n' +
        '                              "id": "c3o9oiara200",\n' +
        '                              "created": 1592893670949,\n' +
        '                              "text": "上述终归有瑕疵，继续思考"\n' +
        '                            },\n' +
        '                            "children": []\n' +
        '                          }\n' +
        '                        ]\n' +
        '                      }\n' +
        '                    ]\n' +
        '                  }\n' +
        '                ]\n' +
        '              }\n' +
        '            ]\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3o9l10ws7c0",\n' +
        '              "created": 1592893398255,\n' +
        '              "text": "【ok】【外观主题】有点难，最后做",\n' +
        '              "expandState": "expand"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3o9lm8ae7k0",\n' +
        '                  "created": 1592893444414,\n' +
        '                  "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              },\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3o4vfykyv40",\n' +
        '                  "created": 1592880108858,\n' +
        '                  "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                  "expandState": "expand"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              }\n' +
        '            ]\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3o4w0ntiqo0",\n' +
        '              "created": 1592880153920,\n' +
        '              "text": "json表数据"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3o4w0r2rtk0",\n' +
        '                  "created": 1592880154117,\n' +
        '                  "text": "数据太多的情况下，对应的响应速度"\n' +
        '                },\n' +
        '                "children": [{\n' +
        '                  "data": {\n' +
        '                    "id": "c3o4tg76e2o0",\n' +
        '                    "created": 1592879952650,\n' +
        '                    "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                    "layout_bottom_offset": {\n' +
        '                      "x": 23.000000342726707,\n' +
        '                      "y": 0\n' +
        '                    }\n' +
        '                  },\n' +
        '                  "children": [\n' +
        '                    {\n' +
        '                      "data": {\n' +
        '                        "id": "c3o9kk1jiag0",\n' +
        '                        "created": 1592893361288,\n' +
        '                        "text": "右键事件和明细表",\n' +
        '                        "expandState": "expand"\n' +
        '                      },\n' +
        '                      "children": [\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3p6ao9e4zk0",\n' +
        '                            "created": 1592985683455,\n' +
        '                            "text": "双击编辑需要取消",\n' +
        '                            "expandState": "expand"\n' +
        '                          },\n' +
        '                          "children": []\n' +
        '                        },\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3o4txlfkvc0",\n' +
        '                            "created": 1592879990517,\n' +
        '                            "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                            "expandState": "expand"\n' +
        '                          },\n' +
        '                          "children": []\n' +
        '                        },\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3o8zyfoqrc0",\n' +
        '                            "created": 1592891746971,\n' +
        '                            "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                            "expandState": "collapse"\n' +
        '                          },\n' +
        '                          "children": [\n' +
        '                            {\n' +
        '                              "data": {\n' +
        '                                "id": "c3o4uyq4ryg0",\n' +
        '                                "created": 1592880071342,\n' +
        '                                "text": "插入主题，在其他页面进行更改json",\n' +
        '                                "expandState": "expand"\n' +
        '                              },\n' +
        '                              "children": [\n' +
        '                                {\n' +
        '                                  "data": {\n' +
        '                                    "id": "c3o9ouh6km00",\n' +
        '                                    "created": 1592893697458,\n' +
        '                                    "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                  },\n' +
        '                                  "children": []\n' +
        '                                },\n' +
        '                                {\n' +
        '                                  "data": {\n' +
        '                                    "id": "c3o4wsmbr2w0",\n' +
        '                                    "created": 1592880214780,\n' +
        '                                    "text": "点击某节点后，进行插入删除操作"\n' +
        '                                  },\n' +
        '                                  "children": [\n' +
        '                                    {\n' +
        '                                      "data": {\n' +
        '                                        "id": "c3o9n3bpmww0",\n' +
        '                                        "created": 1592893559990,\n' +
        '                                        "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                      },\n' +
        '                                      "children": []\n' +
        '                                    },\n' +
        '                                    {\n' +
        '                                      "data": {\n' +
        '                                        "id": "c3o9nw5cmnc0",\n' +
        '                                        "created": 1592893622732,\n' +
        '                                        "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                      },\n' +
        '                                      "children": []\n' +
        '                                    },\n' +
        '                                    {\n' +
        '                                      "data": {\n' +
        '                                        "id": "c3o9oiara200",\n' +
        '                                        "created": 1592893670949,\n' +
        '                                        "text": "上述终归有瑕疵，继续思考"\n' +
        '                                      },\n' +
        '                                      "children": []\n' +
        '                                    }\n' +
        '                                  ]\n' +
        '                                }\n' +
        '                              ]\n' +
        '                            }\n' +
        '                          ]\n' +
        '                        }\n' +
        '                      ]\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "data": {\n' +
        '                        "id": "c3o9l10ws7c0",\n' +
        '                        "created": 1592893398255,\n' +
        '                        "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                        "expandState": "expand"\n' +
        '                      },\n' +
        '                      "children": [\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3o9lm8ae7k0",\n' +
        '                            "created": 1592893444414,\n' +
        '                            "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                          },\n' +
        '                          "children": []\n' +
        '                        },\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3o4vfykyv40",\n' +
        '                            "created": 1592880108858,\n' +
        '                            "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                            "expandState": "expand"\n' +
        '                          },\n' +
        '                          "children": []\n' +
        '                        }\n' +
        '                      ]\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "data": {\n' +
        '                        "id": "c3o4w0ntiqo0",\n' +
        '                        "created": 1592880153920,\n' +
        '                        "text": "json表数据"\n' +
        '                      },\n' +
        '                      "children": [\n' +
        '                        {\n' +
        '                          "data": {\n' +
        '                            "id": "c3o4w0r2rtk0",\n' +
        '                            "created": 1592880154117,\n' +
        '                            "text": "数据太多的情况下，对应的响应速度"\n' +
        '                          },\n' +
        '                          "children": [ {\n' +
        '                            "data": {\n' +
        '                              "id": "c3o4tg76e2o0",\n' +
        '                              "created": 1592879952650,\n' +
        '                              "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                              "layout_bottom_offset": {\n' +
        '                                "x": 23.000000342726707,\n' +
        '                                "y": 0\n' +
        '                              }\n' +
        '                            },\n' +
        '                            "children": [\n' +
        '                              {\n' +
        '                                "data": {\n' +
        '                                  "id": "c3o9kk1jiag0",\n' +
        '                                  "created": 1592893361288,\n' +
        '                                  "text": "右键事件和明细表",\n' +
        '                                  "expandState": "expand"\n' +
        '                                },\n' +
        '                                "children": [\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3p6ao9e4zk0",\n' +
        '                                      "created": 1592985683455,\n' +
        '                                      "text": "双击编辑需要取消",\n' +
        '                                      "expandState": "expand"\n' +
        '                                    },\n' +
        '                                    "children": []\n' +
        '                                  },\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3o4txlfkvc0",\n' +
        '                                      "created": 1592879990517,\n' +
        '                                      "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                      "expandState": "expand"\n' +
        '                                    },\n' +
        '                                    "children": []\n' +
        '                                  },\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3o8zyfoqrc0",\n' +
        '                                      "created": 1592891746971,\n' +
        '                                      "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                      "expandState": "collapse"\n' +
        '                                    },\n' +
        '                                    "children": [\n' +
        '                                      {\n' +
        '                                        "data": {\n' +
        '                                          "id": "c3o4uyq4ryg0",\n' +
        '                                          "created": 1592880071342,\n' +
        '                                          "text": "插入主题，在其他页面进行更改json",\n' +
        '                                          "expandState": "expand"\n' +
        '                                        },\n' +
        '                                        "children": [\n' +
        '                                          {\n' +
        '                                            "data": {\n' +
        '                                              "id": "c3o9ouh6km00",\n' +
        '                                              "created": 1592893697458,\n' +
        '                                              "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                            },\n' +
        '                                            "children": []\n' +
        '                                          },\n' +
        '                                          {\n' +
        '                                            "data": {\n' +
        '                                              "id": "c3o4wsmbr2w0",\n' +
        '                                              "created": 1592880214780,\n' +
        '                                              "text": "点击某节点后，进行插入删除操作"\n' +
        '                                            },\n' +
        '                                            "children": [\n' +
        '                                              {\n' +
        '                                                "data": {\n' +
        '                                                  "id": "c3o9n3bpmww0",\n' +
        '                                                  "created": 1592893559990,\n' +
        '                                                  "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                },\n' +
        '                                                "children": []\n' +
        '                                              },\n' +
        '                                              {\n' +
        '                                                "data": {\n' +
        '                                                  "id": "c3o9nw5cmnc0",\n' +
        '                                                  "created": 1592893622732,\n' +
        '                                                  "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                },\n' +
        '                                                "children": []\n' +
        '                                              },\n' +
        '                                              {\n' +
        '                                                "data": {\n' +
        '                                                  "id": "c3o9oiara200",\n' +
        '                                                  "created": 1592893670949,\n' +
        '                                                  "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                },\n' +
        '                                                "children": [ {\n' +
        '                                                  "data": {\n' +
        '                                                    "id": "c3o4tg76e2o0",\n' +
        '                                                    "created": 1592879952650,\n' +
        '                                                    "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                    "layout_bottom_offset": {\n' +
        '                                                      "x": 23.000000342726707,\n' +
        '                                                      "y": 0\n' +
        '                                                    }\n' +
        '                                                  },\n' +
        '                                                  "children": [\n' +
        '                                                    {\n' +
        '                                                      "data": {\n' +
        '                                                        "id": "c3o9kk1jiag0",\n' +
        '                                                        "created": 1592893361288,\n' +
        '                                                        "text": "右键事件和明细表",\n' +
        '                                                        "expandState": "expand"\n' +
        '                                                      },\n' +
        '                                                      "children": [\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3p6ao9e4zk0",\n' +
        '                                                            "created": 1592985683455,\n' +
        '                                                            "text": "双击编辑需要取消",\n' +
        '                                                            "expandState": "expand"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        },\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o4txlfkvc0",\n' +
        '                                                            "created": 1592879990517,\n' +
        '                                                            "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                            "expandState": "expand"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        },\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o8zyfoqrc0",\n' +
        '                                                            "created": 1592891746971,\n' +
        '                                                            "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                            "expandState": "collapse"\n' +
        '                                                          },\n' +
        '                                                          "children": [\n' +
        '                                                            {\n' +
        '                                                              "data": {\n' +
        '                                                                "id": "c3o4uyq4ryg0",\n' +
        '                                                                "created": 1592880071342,\n' +
        '                                                                "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                "expandState": "expand"\n' +
        '                                                              },\n' +
        '                                                              "children": [\n' +
        '                                                                {\n' +
        '                                                                  "data": {\n' +
        '                                                                    "id": "c3o9ouh6km00",\n' +
        '                                                                    "created": 1592893697458,\n' +
        '                                                                    "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                  },\n' +
        '                                                                  "children": []\n' +
        '                                                                },\n' +
        '                                                                {\n' +
        '                                                                  "data": {\n' +
        '                                                                    "id": "c3o4wsmbr2w0",\n' +
        '                                                                    "created": 1592880214780,\n' +
        '                                                                    "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                  },\n' +
        '                                                                  "children": [\n' +
        '                                                                    {\n' +
        '                                                                      "data": {\n' +
        '                                                                        "id": "c3o9n3bpmww0",\n' +
        '                                                                        "created": 1592893559990,\n' +
        '                                                                        "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                      },\n' +
        '                                                                      "children": []\n' +
        '                                                                    },\n' +
        '                                                                    {\n' +
        '                                                                      "data": {\n' +
        '                                                                        "id": "c3o9nw5cmnc0",\n' +
        '                                                                        "created": 1592893622732,\n' +
        '                                                                        "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                      },\n' +
        '                                                                      "children": []\n' +
        '                                                                    },\n' +
        '                                                                    {\n' +
        '                                                                      "data": {\n' +
        '                                                                        "id": "c3o9oiara200",\n' +
        '                                                                        "created": 1592893670949,\n' +
        '                                                                        "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                      },\n' +
        '                                                                      "children": []\n' +
        '                                                                    }\n' +
        '                                                                  ]\n' +
        '                                                                }\n' +
        '                                                              ]\n' +
        '                                                            }\n' +
        '                                                          ]\n' +
        '                                                        }\n' +
        '                                                      ]\n' +
        '                                                    },\n' +
        '                                                    {\n' +
        '                                                      "data": {\n' +
        '                                                        "id": "c3o9l10ws7c0",\n' +
        '                                                        "created": 1592893398255,\n' +
        '                                                        "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                        "expandState": "expand"\n' +
        '                                                      },\n' +
        '                                                      "children": [\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o9lm8ae7k0",\n' +
        '                                                            "created": 1592893444414,\n' +
        '                                                            "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        },\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o4vfykyv40",\n' +
        '                                                            "created": 1592880108858,\n' +
        '                                                            "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                            "expandState": "expand"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        }\n' +
        '                                                      ]\n' +
        '                                                    },\n' +
        '                                                    {\n' +
        '                                                      "data": {\n' +
        '                                                        "id": "c3o4w0ntiqo0",\n' +
        '                                                        "created": 1592880153920,\n' +
        '                                                        "text": "json表数据"\n' +
        '                                                      },\n' +
        '                                                      "children": [\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o4w0r2rtk0",\n' +
        '                                                            "created": 1592880154117,\n' +
        '                                                            "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                          },\n' +
        '                                                          "children": [{\n' +
        '                                                            "data": {\n' +
        '                                                              "id": "c3o4tg76e2o0",\n' +
        '                                                              "created": 1592879952650,\n' +
        '                                                              "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                              "layout_bottom_offset": {\n' +
        '                                                                "x": 23.000000342726707,\n' +
        '                                                                "y": 0\n' +
        '                                                              }\n' +
        '                                                            },\n' +
        '                                                            "children": [\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o9kk1jiag0",\n' +
        '                                                                  "created": 1592893361288,\n' +
        '                                                                  "text": "右键事件和明细表",\n' +
        '                                                                  "expandState": "expand"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3p6ao9e4zk0",\n' +
        '                                                                      "created": 1592985683455,\n' +
        '                                                                      "text": "双击编辑需要取消",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4txlfkvc0",\n' +
        '                                                                      "created": 1592879990517,\n' +
        '                                                                      "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o8zyfoqrc0",\n' +
        '                                                                      "created": 1592891746971,\n' +
        '                                                                      "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                      "expandState": "collapse"\n' +
        '                                                                    },\n' +
        '                                                                    "children": [\n' +
        '                                                                      {\n' +
        '                                                                        "data": {\n' +
        '                                                                          "id": "c3o4uyq4ryg0",\n' +
        '                                                                          "created": 1592880071342,\n' +
        '                                                                          "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                          "expandState": "expand"\n' +
        '                                                                        },\n' +
        '                                                                        "children": [\n' +
        '                                                                          {\n' +
        '                                                                            "data": {\n' +
        '                                                                              "id": "c3o9ouh6km00",\n' +
        '                                                                              "created": 1592893697458,\n' +
        '                                                                              "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                            },\n' +
        '                                                                            "children": []\n' +
        '                                                                          },\n' +
        '                                                                          {\n' +
        '                                                                            "data": {\n' +
        '                                                                              "id": "c3o4wsmbr2w0",\n' +
        '                                                                              "created": 1592880214780,\n' +
        '                                                                              "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                            },\n' +
        '                                                                            "children": [\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9n3bpmww0",\n' +
        '                                                                                  "created": 1592893559990,\n' +
        '                                                                                  "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                },\n' +
        '                                                                                "children": []\n' +
        '                                                                              },\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9nw5cmnc0",\n' +
        '                                                                                  "created": 1592893622732,\n' +
        '                                                                                  "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                },\n' +
        '                                                                                "children": []\n' +
        '                                                                              },\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9oiara200",\n' +
        '                                                                                  "created": 1592893670949,\n' +
        '                                                                                  "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                },\n' +
        '                                                                                "children": []\n' +
        '                                                                              }\n' +
        '                                                                            ]\n' +
        '                                                                          }\n' +
        '                                                                        ]\n' +
        '                                                                      }\n' +
        '                                                                    ]\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              },\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o9l10ws7c0",\n' +
        '                                                                  "created": 1592893398255,\n' +
        '                                                                  "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                  "expandState": "expand"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o9lm8ae7k0",\n' +
        '                                                                      "created": 1592893444414,\n' +
        '                                                                      "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4vfykyv40",\n' +
        '                                                                      "created": 1592880108858,\n' +
        '                                                                      "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              },\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o4w0ntiqo0",\n' +
        '                                                                  "created": 1592880153920,\n' +
        '                                                                  "text": "json表数据"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4w0r2rtk0",\n' +
        '                                                                      "created": 1592880154117,\n' +
        '                                                                      "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              }\n' +
        '                                                            ]\n' +
        '                                                          }]\n' +
        '                                                        }\n' +
        '                                                      ]\n' +
        '                                                    }\n' +
        '                                                  ]\n' +
        '                                                }]\n' +
        '                                              }\n' +
        '                                            ]\n' +
        '                                          }\n' +
        '                                        ]\n' +
        '                                      }\n' +
        '                                    ]\n' +
        '                                  }\n' +
        '                                ]\n' +
        '                              },\n' +
        '                              {\n' +
        '                                "data": {\n' +
        '                                  "id": "c3o9l10ws7c0",\n' +
        '                                  "created": 1592893398255,\n' +
        '                                  "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                  "expandState": "expand"\n' +
        '                                },\n' +
        '                                "children": [\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3o9lm8ae7k0",\n' +
        '                                      "created": 1592893444414,\n' +
        '                                      "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                    },\n' +
        '                                    "children": []\n' +
        '                                  },\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3o4vfykyv40",\n' +
        '                                      "created": 1592880108858,\n' +
        '                                      "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                      "expandState": "expand"\n' +
        '                                    },\n' +
        '                                    "children": []\n' +
        '                                  }\n' +
        '                                ]\n' +
        '                              },\n' +
        '                              {\n' +
        '                                "data": {\n' +
        '                                  "id": "c3o4w0ntiqo0",\n' +
        '                                  "created": 1592880153920,\n' +
        '                                  "text": "json表数据"\n' +
        '                                },\n' +
        '                                "children": [\n' +
        '                                  {\n' +
        '                                    "data": {\n' +
        '                                      "id": "c3o4w0r2rtk0",\n' +
        '                                      "created": 1592880154117,\n' +
        '                                      "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                    },\n' +
        '                                    "children": [{\n' +
        '                                      "data": {\n' +
        '                                        "id": "c3o4tg76e2o0",\n' +
        '                                        "created": 1592879952650,\n' +
        '                                        "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                        "layout_bottom_offset": {\n' +
        '                                          "x": 23.000000342726707,\n' +
        '                                          "y": 0\n' +
        '                                        }\n' +
        '                                      },\n' +
        '                                      "children": [\n' +
        '                                        {\n' +
        '                                          "data": {\n' +
        '                                            "id": "c3o9kk1jiag0",\n' +
        '                                            "created": 1592893361288,\n' +
        '                                            "text": "右键事件和明细表",\n' +
        '                                            "expandState": "expand"\n' +
        '                                          },\n' +
        '                                          "children": [\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3p6ao9e4zk0",\n' +
        '                                                "created": 1592985683455,\n' +
        '                                                "text": "双击编辑需要取消",\n' +
        '                                                "expandState": "expand"\n' +
        '                                              },\n' +
        '                                              "children": []\n' +
        '                                            },\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3o4txlfkvc0",\n' +
        '                                                "created": 1592879990517,\n' +
        '                                                "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                "expandState": "expand"\n' +
        '                                              },\n' +
        '                                              "children": []\n' +
        '                                            },\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3o8zyfoqrc0",\n' +
        '                                                "created": 1592891746971,\n' +
        '                                                "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                "expandState": "collapse"\n' +
        '                                              },\n' +
        '                                              "children": [\n' +
        '                                                {\n' +
        '                                                  "data": {\n' +
        '                                                    "id": "c3o4uyq4ryg0",\n' +
        '                                                    "created": 1592880071342,\n' +
        '                                                    "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                    "expandState": "expand"\n' +
        '                                                  },\n' +
        '                                                  "children": [\n' +
        '                                                    {\n' +
        '                                                      "data": {\n' +
        '                                                        "id": "c3o9ouh6km00",\n' +
        '                                                        "created": 1592893697458,\n' +
        '                                                        "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                      },\n' +
        '                                                      "children": []\n' +
        '                                                    },\n' +
        '                                                    {\n' +
        '                                                      "data": {\n' +
        '                                                        "id": "c3o4wsmbr2w0",\n' +
        '                                                        "created": 1592880214780,\n' +
        '                                                        "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                      },\n' +
        '                                                      "children": [\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o9n3bpmww0",\n' +
        '                                                            "created": 1592893559990,\n' +
        '                                                            "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        },\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o9nw5cmnc0",\n' +
        '                                                            "created": 1592893622732,\n' +
        '                                                            "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                          },\n' +
        '                                                          "children": []\n' +
        '                                                        },\n' +
        '                                                        {\n' +
        '                                                          "data": {\n' +
        '                                                            "id": "c3o9oiara200",\n' +
        '                                                            "created": 1592893670949,\n' +
        '                                                            "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                          },\n' +
        '                                                          "children": [ {\n' +
        '                                                            "data": {\n' +
        '                                                              "id": "c3o4tg76e2o0",\n' +
        '                                                              "created": 1592879952650,\n' +
        '                                                              "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                              "layout_bottom_offset": {\n' +
        '                                                                "x": 23.000000342726707,\n' +
        '                                                                "y": 0\n' +
        '                                                              }\n' +
        '                                                            },\n' +
        '                                                            "children": [\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o9kk1jiag0",\n' +
        '                                                                  "created": 1592893361288,\n' +
        '                                                                  "text": "右键事件和明细表",\n' +
        '                                                                  "expandState": "expand"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3p6ao9e4zk0",\n' +
        '                                                                      "created": 1592985683455,\n' +
        '                                                                      "text": "双击编辑需要取消",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4txlfkvc0",\n' +
        '                                                                      "created": 1592879990517,\n' +
        '                                                                      "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o8zyfoqrc0",\n' +
        '                                                                      "created": 1592891746971,\n' +
        '                                                                      "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                      "expandState": "collapse"\n' +
        '                                                                    },\n' +
        '                                                                    "children": [\n' +
        '                                                                      {\n' +
        '                                                                        "data": {\n' +
        '                                                                          "id": "c3o4uyq4ryg0",\n' +
        '                                                                          "created": 1592880071342,\n' +
        '                                                                          "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                          "expandState": "expand"\n' +
        '                                                                        },\n' +
        '                                                                        "children": [\n' +
        '                                                                          {\n' +
        '                                                                            "data": {\n' +
        '                                                                              "id": "c3o9ouh6km00",\n' +
        '                                                                              "created": 1592893697458,\n' +
        '                                                                              "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                            },\n' +
        '                                                                            "children": []\n' +
        '                                                                          },\n' +
        '                                                                          {\n' +
        '                                                                            "data": {\n' +
        '                                                                              "id": "c3o4wsmbr2w0",\n' +
        '                                                                              "created": 1592880214780,\n' +
        '                                                                              "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                            },\n' +
        '                                                                            "children": [\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9n3bpmww0",\n' +
        '                                                                                  "created": 1592893559990,\n' +
        '                                                                                  "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                },\n' +
        '                                                                                "children": []\n' +
        '                                                                              },\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9nw5cmnc0",\n' +
        '                                                                                  "created": 1592893622732,\n' +
        '                                                                                  "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                },\n' +
        '                                                                                "children": []\n' +
        '                                                                              },\n' +
        '                                                                              {\n' +
        '                                                                                "data": {\n' +
        '                                                                                  "id": "c3o9oiara200",\n' +
        '                                                                                  "created": 1592893670949,\n' +
        '                                                                                  "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                },\n' +
        '                                                                                "children": [ {\n' +
        '                                                                                  "data": {\n' +
        '                                                                                    "id": "c3o4tg76e2o0",\n' +
        '                                                                                    "created": 1592879952650,\n' +
        '                                                                                    "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                    "layout_bottom_offset": {\n' +
        '                                                                                      "x": 23.000000342726707,\n' +
        '                                                                                      "y": 0\n' +
        '                                                                                    }\n' +
        '                                                                                  },\n' +
        '                                                                                  "children": [\n' +
        '                                                                                    {\n' +
        '                                                                                      "data": {\n' +
        '                                                                                        "id": "c3o9kk1jiag0",\n' +
        '                                                                                        "created": 1592893361288,\n' +
        '                                                                                        "text": "右键事件和明细表",\n' +
        '                                                                                        "expandState": "expand"\n' +
        '                                                                                      },\n' +
        '                                                                                      "children": [\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3p6ao9e4zk0",\n' +
        '                                                                                            "created": 1592985683455,\n' +
        '                                                                                            "text": "双击编辑需要取消",\n' +
        '                                                                                            "expandState": "expand"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        },\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o4txlfkvc0",\n' +
        '                                                                                            "created": 1592879990517,\n' +
        '                                                                                            "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                            "expandState": "expand"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        },\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o8zyfoqrc0",\n' +
        '                                                                                            "created": 1592891746971,\n' +
        '                                                                                            "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                            "expandState": "collapse"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": [\n' +
        '                                                                                            {\n' +
        '                                                                                              "data": {\n' +
        '                                                                                                "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                "created": 1592880071342,\n' +
        '                                                                                                "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                "expandState": "expand"\n' +
        '                                                                                              },\n' +
        '                                                                                              "children": [\n' +
        '                                                                                                {\n' +
        '                                                                                                  "data": {\n' +
        '                                                                                                    "id": "c3o9ouh6km00",\n' +
        '                                                                                                    "created": 1592893697458,\n' +
        '                                                                                                    "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                  },\n' +
        '                                                                                                  "children": []\n' +
        '                                                                                                },\n' +
        '                                                                                                {\n' +
        '                                                                                                  "data": {\n' +
        '                                                                                                    "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                    "created": 1592880214780,\n' +
        '                                                                                                    "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                  },\n' +
        '                                                                                                  "children": [\n' +
        '                                                                                                    {\n' +
        '                                                                                                      "data": {\n' +
        '                                                                                                        "id": "c3o9n3bpmww0",\n' +
        '                                                                                                        "created": 1592893559990,\n' +
        '                                                                                                        "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                      },\n' +
        '                                                                                                      "children": []\n' +
        '                                                                                                    },\n' +
        '                                                                                                    {\n' +
        '                                                                                                      "data": {\n' +
        '                                                                                                        "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                        "created": 1592893622732,\n' +
        '                                                                                                        "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                      },\n' +
        '                                                                                                      "children": []\n' +
        '                                                                                                    },\n' +
        '                                                                                                    {\n' +
        '                                                                                                      "data": {\n' +
        '                                                                                                        "id": "c3o9oiara200",\n' +
        '                                                                                                        "created": 1592893670949,\n' +
        '                                                                                                        "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                      },\n' +
        '                                                                                                      "children": [ {\n' +
        '                                                                                                        "data": {\n' +
        '                                                                                                          "id": "c3o4tg76e2o0",\n' +
        '                                                                                                          "created": 1592879952650,\n' +
        '                                                                                                          "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                          "layout_bottom_offset": {\n' +
        '                                                                                                            "x": 23.000000342726707,\n' +
        '                                                                                                            "y": 0\n' +
        '                                                                                                          }\n' +
        '                                                                                                        },\n' +
        '                                                                                                        "children": [\n' +
        '                                                                                                          {\n' +
        '                                                                                                            "data": {\n' +
        '                                                                                                              "id": "c3o9kk1jiag0",\n' +
        '                                                                                                              "created": 1592893361288,\n' +
        '                                                                                                              "text": "右键事件和明细表",\n' +
        '                                                                                                              "expandState": "expand"\n' +
        '                                                                                                            },\n' +
        '                                                                                                            "children": [\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                  "created": 1592985683455,\n' +
        '                                                                                                                  "text": "双击编辑需要取消",\n' +
        '                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              },\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                  "created": 1592879990517,\n' +
        '                                                                                                                  "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              },\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                  "created": 1592891746971,\n' +
        '                                                                                                                  "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                  "expandState": "collapse"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": [\n' +
        '                                                                                                                  {\n' +
        '                                                                                                                    "data": {\n' +
        '                                                                                                                      "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                      "created": 1592880071342,\n' +
        '                                                                                                                      "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                      "expandState": "expand"\n' +
        '                                                                                                                    },\n' +
        '                                                                                                                    "children": [\n' +
        '                                                                                                                      {\n' +
        '                                                                                                                        "data": {\n' +
        '                                                                                                                          "id": "c3o9ouh6km00",\n' +
        '                                                                                                                          "created": 1592893697458,\n' +
        '                                                                                                                          "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                        },\n' +
        '                                                                                                                        "children": []\n' +
        '                                                                                                                      },\n' +
        '                                                                                                                      {\n' +
        '                                                                                                                        "data": {\n' +
        '                                                                                                                          "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                          "created": 1592880214780,\n' +
        '                                                                                                                          "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                        },\n' +
        '                                                                                                                        "children": [\n' +
        '                                                                                                                          {\n' +
        '                                                                                                                            "data": {\n' +
        '                                                                                                                              "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                              "created": 1592893559990,\n' +
        '                                                                                                                              "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                            },\n' +
        '                                                                                                                            "children": []\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          {\n' +
        '                                                                                                                            "data": {\n' +
        '                                                                                                                              "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                              "created": 1592893622732,\n' +
        '                                                                                                                              "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                            },\n' +
        '                                                                                                                            "children": []\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          {\n' +
        '                                                                                                                            "data": {\n' +
        '                                                                                                                              "id": "c3o9oiara200",\n' +
        '                                                                                                                              "created": 1592893670949,\n' +
        '                                                                                                                              "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                            },\n' +
        '                                                                                                                            "children": [ {\n' +
        '                                                                                                                              "data": {\n' +
        '                                                                                                                                "id": "c3o4tg76e2o0",\n' +
        '                                                                                                                                "created": 1592879952650,\n' +
        '                                                                                                                                "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                                                "layout_bottom_offset": {\n' +
        '                                                                                                                                  "x": 23.000000342726707,\n' +
        '                                                                                                                                  "y": 0\n' +
        '                                                                                                                                }\n' +
        '                                                                                                                              },\n' +
        '                                                                                                                              "children": [\n' +
        '                                                                                                                                {\n' +
        '                                                                                                                                  "data": {\n' +
        '                                                                                                                                    "id": "c3o9kk1jiag0",\n' +
        '                                                                                                                                    "created": 1592893361288,\n' +
        '                                                                                                                                    "text": "右键事件和明细表",\n' +
        '                                                                                                                                    "expandState": "expand"\n' +
        '                                                                                                                                  },\n' +
        '                                                                                                                                  "children": [\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                                        "created": 1592985683455,\n' +
        '                                                                                                                                        "text": "双击编辑需要取消",\n' +
        '                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    },\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                                        "created": 1592879990517,\n' +
        '                                                                                                                                        "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    },\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                                        "created": 1592891746971,\n' +
        '                                                                                                                                        "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                                        "expandState": "collapse"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": [\n' +
        '                                                                                                                                        {\n' +
        '                                                                                                                                          "data": {\n' +
        '                                                                                                                                            "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                                            "created": 1592880071342,\n' +
        '                                                                                                                                            "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                                            "expandState": "expand"\n' +
        '                                                                                                                                          },\n' +
        '                                                                                                                                          "children": [\n' +
        '                                                                                                                                            {\n' +
        '                                                                                                                                              "data": {\n' +
        '                                                                                                                                                "id": "c3o9ouh6km00",\n' +
        '                                                                                                                                                "created": 1592893697458,\n' +
        '                                                                                                                                                "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                                              },\n' +
        '                                                                                                                                              "children": []\n' +
        '                                                                                                                                            },\n' +
        '                                                                                                                                            {\n' +
        '                                                                                                                                              "data": {\n' +
        '                                                                                                                                                "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                                                "created": 1592880214780,\n' +
        '                                                                                                                                                "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                                              },\n' +
        '                                                                                                                                              "children": [\n' +
        '                                                                                                                                                {\n' +
        '                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                    "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                                                    "created": 1592893559990,\n' +
        '                                                                                                                                                    "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                                                  },\n' +
        '                                                                                                                                                  "children": []\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                {\n' +
        '                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                    "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                                                    "created": 1592893622732,\n' +
        '                                                                                                                                                    "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                                                  },\n' +
        '                                                                                                                                                  "children": []\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                {\n' +
        '                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                    "id": "c3o9oiara200",\n' +
        '                                                                                                                                                    "created": 1592893670949,\n' +
        '                                                                                                                                                    "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                                                  },\n' +
        '                                                                                                                                                  "children": [ {\n' +
        '                                                                                                                                                    "data": {\n' +
        '                                                                                                                                                      "id": "c3o4tg76e2o0",\n' +
        '                                                                                                                                                      "created": 1592879952650,\n' +
        '                                                                                                                                                      "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                                                                      "layout_bottom_offset": {\n' +
        '                                                                                                                                                        "x": 23.000000342726707,\n' +
        '                                                                                                                                                        "y": 0\n' +
        '                                                                                                                                                      }\n' +
        '                                                                                                                                                    },\n' +
        '                                                                                                                                                    "children": [\n' +
        '                                                                                                                                                      {\n' +
        '                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                          "id": "c3o9kk1jiag0",\n' +
        '                                                                                                                                                          "created": 1592893361288,\n' +
        '                                                                                                                                                          "text": "右键事件和明细表",\n' +
        '                                                                                                                                                          "expandState": "expand"\n' +
        '                                                                                                                                                        },\n' +
        '                                                                                                                                                        "children": [\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                                                              "created": 1592985683455,\n' +
        '                                                                                                                                                              "text": "双击编辑需要取消",\n' +
        '                                                                                                                                                              "expandState": "expand"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          },\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                                                              "created": 1592879990517,\n' +
        '                                                                                                                                                              "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                                                              "expandState": "expand"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          },\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                                                              "created": 1592891746971,\n' +
        '                                                                                                                                                              "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                                                              "expandState": "collapse"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": [\n' +
        '                                                                                                                                                              {\n' +
        '                                                                                                                                                                "data": {\n' +
        '                                                                                                                                                                  "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                                                                  "created": 1592880071342,\n' +
        '                                                                                                                                                                  "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                                                                },\n' +
        '                                                                                                                                                                "children": [\n' +
        '                                                                                                                                                                  {\n' +
        '                                                                                                                                                                    "data": {\n' +
        '                                                                                                                                                                      "id": "c3o9ouh6km00",\n' +
        '                                                                                                                                                                      "created": 1592893697458,\n' +
        '                                                                                                                                                                      "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                                                                    },\n' +
        '                                                                                                                                                                    "children": []\n' +
        '                                                                                                                                                                  },\n' +
        '                                                                                                                                                                  {\n' +
        '                                                                                                                                                                    "data": {\n' +
        '                                                                                                                                                                      "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                                                                      "created": 1592880214780,\n' +
        '                                                                                                                                                                      "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                                                                    },\n' +
        '                                                                                                                                                                    "children": [\n' +
        '                                                                                                                                                                      {\n' +
        '                                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                                          "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                                                                          "created": 1592893559990,\n' +
        '                                                                                                                                                                          "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                                                                        },\n' +
        '                                                                                                                                                                        "children": []\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      {\n' +
        '                                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                                          "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                                                                          "created": 1592893622732,\n' +
        '                                                                                                                                                                          "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                                                                        },\n' +
        '                                                                                                                                                                        "children": []\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      {\n' +
        '                                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                                          "id": "c3o9oiara200",\n' +
        '                                                                                                                                                                          "created": 1592893670949,\n' +
        '                                                                                                                                                                          "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                                                                        },\n' +
        '                                                                                                                                                                        "children": []\n' +
        '                                                                                                                                                                      }\n' +
        '                                                                                                                                                                    ]\n' +
        '                                                                                                                                                                  }\n' +
        '                                                                                                                                                                ]\n' +
        '                                                                                                                                                              }\n' +
        '                                                                                                                                                            ]\n' +
        '                                                                                                                                                          }\n' +
        '                                                                                                                                                        ]\n' +
        '                                                                                                                                                      },\n' +
        '                                                                                                                                                      {\n' +
        '                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                          "id": "c3o9l10ws7c0",\n' +
        '                                                                                                                                                          "created": 1592893398255,\n' +
        '                                                                                                                                                          "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                                                                          "expandState": "expand"\n' +
        '                                                                                                                                                        },\n' +
        '                                                                                                                                                        "children": [\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                                                              "created": 1592893444414,\n' +
        '                                                                                                                                                              "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          },\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o4vfykyv40",\n' +
        '                                                                                                                                                              "created": 1592880108858,\n' +
        '                                                                                                                                                              "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                                                              "expandState": "expand"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          }\n' +
        '                                                                                                                                                        ]\n' +
        '                                                                                                                                                      },\n' +
        '                                                                                                                                                      {\n' +
        '                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                          "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                                                                          "created": 1592880153920,\n' +
        '                                                                                                                                                          "text": "json表数据"\n' +
        '                                                                                                                                                        },\n' +
        '                                                                                                                                                        "children": [\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                                                              "created": 1592880154117,\n' +
        '                                                                                                                                                              "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": [{\n' +
        '                                                                                                                                                              "data": {\n' +
        '                                                                                                                                                                "id": "c3o4tg76e2o0",\n' +
        '                                                                                                                                                                "created": 1592879952650,\n' +
        '                                                                                                                                                                "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                                                                                "layout_bottom_offset": {\n' +
        '                                                                                                                                                                  "x": 23.000000342726707,\n' +
        '                                                                                                                                                                  "y": 0\n' +
        '                                                                                                                                                                }\n' +
        '                                                                                                                                                              },\n' +
        '                                                                                                                                                              "children": [\n' +
        '                                                                                                                                                                {\n' +
        '                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                    "id": "c3o9kk1jiag0",\n' +
        '                                                                                                                                                                    "created": 1592893361288,\n' +
        '                                                                                                                                                                    "text": "右键事件和明细表",\n' +
        '                                                                                                                                                                    "expandState": "expand"\n' +
        '                                                                                                                                                                  },\n' +
        '                                                                                                                                                                  "children": [\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                                                                        "created": 1592985683455,\n' +
        '                                                                                                                                                                        "text": "双击编辑需要取消",\n' +
        '                                                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": []\n' +
        '                                                                                                                                                                    },\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                                                                        "created": 1592879990517,\n' +
        '                                                                                                                                                                        "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": []\n' +
        '                                                                                                                                                                    },\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                                                                        "created": 1592891746971,\n' +
        '                                                                                                                                                                        "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                                                                        "expandState": "collapse"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": [\n' +
        '                                                                                                                                                                        {\n' +
        '                                                                                                                                                                          "data": {\n' +
        '                                                                                                                                                                            "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                                                                            "created": 1592880071342,\n' +
        '                                                                                                                                                                            "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                                                                            "expandState": "expand"\n' +
        '                                                                                                                                                                          },\n' +
        '                                                                                                                                                                          "children": [\n' +
        '                                                                                                                                                                            {\n' +
        '                                                                                                                                                                              "data": {\n' +
        '                                                                                                                                                                                "id": "c3o9ouh6km00",\n' +
        '                                                                                                                                                                                "created": 1592893697458,\n' +
        '                                                                                                                                                                                "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                                                                              },\n' +
        '                                                                                                                                                                              "children": []\n' +
        '                                                                                                                                                                            },\n' +
        '                                                                                                                                                                            {\n' +
        '                                                                                                                                                                              "data": {\n' +
        '                                                                                                                                                                                "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                                                                                "created": 1592880214780,\n' +
        '                                                                                                                                                                                "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                                                                              },\n' +
        '                                                                                                                                                                              "children": [\n' +
        '                                                                                                                                                                                {\n' +
        '                                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                                    "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                                                                                    "created": 1592893559990,\n' +
        '                                                                                                                                                                                    "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                                                                                  },\n' +
        '                                                                                                                                                                                  "children": []\n' +
        '                                                                                                                                                                                },\n' +
        '                                                                                                                                                                                {\n' +
        '                                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                                    "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                                                                                    "created": 1592893622732,\n' +
        '                                                                                                                                                                                    "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                                                                                  },\n' +
        '                                                                                                                                                                                  "children": []\n' +
        '                                                                                                                                                                                },\n' +
        '                                                                                                                                                                                {\n' +
        '                                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                                    "id": "c3o9oiara200",\n' +
        '                                                                                                                                                                                    "created": 1592893670949,\n' +
        '                                                                                                                                                                                    "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                                                                                  },\n' +
        '                                                                                                                                                                                  "children": []\n' +
        '                                                                                                                                                                                }\n' +
        '                                                                                                                                                                              ]\n' +
        '                                                                                                                                                                            }\n' +
        '                                                                                                                                                                          ]\n' +
        '                                                                                                                                                                        }\n' +
        '                                                                                                                                                                      ]\n' +
        '                                                                                                                                                                    }\n' +
        '                                                                                                                                                                  ]\n' +
        '                                                                                                                                                                },\n' +
        '                                                                                                                                                                {\n' +
        '                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                    "id": "c3o9l10ws7c0",\n' +
        '                                                                                                                                                                    "created": 1592893398255,\n' +
        '                                                                                                                                                                    "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                                                                                    "expandState": "expand"\n' +
        '                                                                                                                                                                  },\n' +
        '                                                                                                                                                                  "children": [\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                                                                        "created": 1592893444414,\n' +
        '                                                                                                                                                                        "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": []\n' +
        '                                                                                                                                                                    },\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3o4vfykyv40",\n' +
        '                                                                                                                                                                        "created": 1592880108858,\n' +
        '                                                                                                                                                                        "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": []\n' +
        '                                                                                                                                                                    }\n' +
        '                                                                                                                                                                  ]\n' +
        '                                                                                                                                                                },\n' +
        '                                                                                                                                                                {\n' +
        '                                                                                                                                                                  "data": {\n' +
        '                                                                                                                                                                    "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                                                                                    "created": 1592880153920,\n' +
        '                                                                                                                                                                    "text": "json表数据"\n' +
        '                                                                                                                                                                  },\n' +
        '                                                                                                                                                                  "children": [\n' +
        '                                                                                                                                                                    {\n' +
        '                                                                                                                                                                      "data": {\n' +
        '                                                                                                                                                                        "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                                                                        "created": 1592880154117,\n' +
        '                                                                                                                                                                        "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                                                                      },\n' +
        '                                                                                                                                                                      "children": []\n' +
        '                                                                                                                                                                    }\n' +
        '                                                                                                                                                                  ]\n' +
        '                                                                                                                                                                }\n' +
        '                                                                                                                                                              ]\n' +
        '                                                                                                                                                            }]\n' +
        '                                                                                                                                                          }\n' +
        '                                                                                                                                                        ]\n' +
        '                                                                                                                                                      }\n' +
        '                                                                                                                                                    ]\n' +
        '                                                                                                                                                  }]\n' +
        '                                                                                                                                                }\n' +
        '                                                                                                                                              ]\n' +
        '                                                                                                                                            }\n' +
        '                                                                                                                                          ]\n' +
        '                                                                                                                                        }\n' +
        '                                                                                                                                      ]\n' +
        '                                                                                                                                    }\n' +
        '                                                                                                                                  ]\n' +
        '                                                                                                                                },\n' +
        '                                                                                                                                {\n' +
        '                                                                                                                                  "data": {\n' +
        '                                                                                                                                    "id": "c3o9l10ws7c0",\n' +
        '                                                                                                                                    "created": 1592893398255,\n' +
        '                                                                                                                                    "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                                                    "expandState": "expand"\n' +
        '                                                                                                                                  },\n' +
        '                                                                                                                                  "children": [\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                                        "created": 1592893444414,\n' +
        '                                                                                                                                        "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    },\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o4vfykyv40",\n' +
        '                                                                                                                                        "created": 1592880108858,\n' +
        '                                                                                                                                        "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    }\n' +
        '                                                                                                                                  ]\n' +
        '                                                                                                                                },\n' +
        '                                                                                                                                {\n' +
        '                                                                                                                                  "data": {\n' +
        '                                                                                                                                    "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                                                    "created": 1592880153920,\n' +
        '                                                                                                                                    "text": "json表数据"\n' +
        '                                                                                                                                  },\n' +
        '                                                                                                                                  "children": [\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                                        "created": 1592880154117,\n' +
        '                                                                                                                                        "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": [{\n' +
        '                                                                                                                                        "data": {\n' +
        '                                                                                                                                          "id": "c3o4tg76e2o0",\n' +
        '                                                                                                                                          "created": 1592879952650,\n' +
        '                                                                                                                                          "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                                                          "layout_bottom_offset": {\n' +
        '                                                                                                                                            "x": 23.000000342726707,\n' +
        '                                                                                                                                            "y": 0\n' +
        '                                                                                                                                          }\n' +
        '                                                                                                                                        },\n' +
        '                                                                                                                                        "children": [\n' +
        '                                                                                                                                          {\n' +
        '                                                                                                                                            "data": {\n' +
        '                                                                                                                                              "id": "c3o9kk1jiag0",\n' +
        '                                                                                                                                              "created": 1592893361288,\n' +
        '                                                                                                                                              "text": "右键事件和明细表",\n' +
        '                                                                                                                                              "expandState": "expand"\n' +
        '                                                                                                                                            },\n' +
        '                                                                                                                                            "children": [\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                                                  "created": 1592985683455,\n' +
        '                                                                                                                                                  "text": "双击编辑需要取消",\n' +
        '                                                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": []\n' +
        '                                                                                                                                              },\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                                                  "created": 1592879990517,\n' +
        '                                                                                                                                                  "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": []\n' +
        '                                                                                                                                              },\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                                                  "created": 1592891746971,\n' +
        '                                                                                                                                                  "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                                                  "expandState": "collapse"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": [\n' +
        '                                                                                                                                                  {\n' +
        '                                                                                                                                                    "data": {\n' +
        '                                                                                                                                                      "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                                                      "created": 1592880071342,\n' +
        '                                                                                                                                                      "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                                                      "expandState": "expand"\n' +
        '                                                                                                                                                    },\n' +
        '                                                                                                                                                    "children": [\n' +
        '                                                                                                                                                      {\n' +
        '                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                          "id": "c3o9ouh6km00",\n' +
        '                                                                                                                                                          "created": 1592893697458,\n' +
        '                                                                                                                                                          "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                                                        },\n' +
        '                                                                                                                                                        "children": []\n' +
        '                                                                                                                                                      },\n' +
        '                                                                                                                                                      {\n' +
        '                                                                                                                                                        "data": {\n' +
        '                                                                                                                                                          "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                                                          "created": 1592880214780,\n' +
        '                                                                                                                                                          "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                                                        },\n' +
        '                                                                                                                                                        "children": [\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                                                              "created": 1592893559990,\n' +
        '                                                                                                                                                              "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          },\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                                                              "created": 1592893622732,\n' +
        '                                                                                                                                                              "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          },\n' +
        '                                                                                                                                                          {\n' +
        '                                                                                                                                                            "data": {\n' +
        '                                                                                                                                                              "id": "c3o9oiara200",\n' +
        '                                                                                                                                                              "created": 1592893670949,\n' +
        '                                                                                                                                                              "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                                                            },\n' +
        '                                                                                                                                                            "children": []\n' +
        '                                                                                                                                                          }\n' +
        '                                                                                                                                                        ]\n' +
        '                                                                                                                                                      }\n' +
        '                                                                                                                                                    ]\n' +
        '                                                                                                                                                  }\n' +
        '                                                                                                                                                ]\n' +
        '                                                                                                                                              }\n' +
        '                                                                                                                                            ]\n' +
        '                                                                                                                                          },\n' +
        '                                                                                                                                          {\n' +
        '                                                                                                                                            "data": {\n' +
        '                                                                                                                                              "id": "c3o9l10ws7c0",\n' +
        '                                                                                                                                              "created": 1592893398255,\n' +
        '                                                                                                                                              "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                                                              "expandState": "expand"\n' +
        '                                                                                                                                            },\n' +
        '                                                                                                                                            "children": [\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                                                  "created": 1592893444414,\n' +
        '                                                                                                                                                  "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": []\n' +
        '                                                                                                                                              },\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3o4vfykyv40",\n' +
        '                                                                                                                                                  "created": 1592880108858,\n' +
        '                                                                                                                                                  "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": []\n' +
        '                                                                                                                                              }\n' +
        '                                                                                                                                            ]\n' +
        '                                                                                                                                          },\n' +
        '                                                                                                                                          {\n' +
        '                                                                                                                                            "data": {\n' +
        '                                                                                                                                              "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                                                              "created": 1592880153920,\n' +
        '                                                                                                                                              "text": "json表数据"\n' +
        '                                                                                                                                            },\n' +
        '                                                                                                                                            "children": [\n' +
        '                                                                                                                                              {\n' +
        '                                                                                                                                                "data": {\n' +
        '                                                                                                                                                  "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                                                  "created": 1592880154117,\n' +
        '                                                                                                                                                  "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                                                },\n' +
        '                                                                                                                                                "children": []\n' +
        '                                                                                                                                              }\n' +
        '                                                                                                                                            ]\n' +
        '                                                                                                                                          }\n' +
        '                                                                                                                                        ]\n' +
        '                                                                                                                                      }]\n' +
        '                                                                                                                                    }\n' +
        '                                                                                                                                  ]\n' +
        '                                                                                                                                }\n' +
        '                                                                                                                              ]\n' +
        '                                                                                                                            }]\n' +
        '                                                                                                                          }\n' +
        '                                                                                                                        ]\n' +
        '                                                                                                                      }\n' +
        '                                                                                                                    ]\n' +
        '                                                                                                                  }\n' +
        '                                                                                                                ]\n' +
        '                                                                                                              }\n' +
        '                                                                                                            ]\n' +
        '                                                                                                          },\n' +
        '                                                                                                          {\n' +
        '                                                                                                            "data": {\n' +
        '                                                                                                              "id": "c3o9l10ws7c0",\n' +
        '                                                                                                              "created": 1592893398255,\n' +
        '                                                                                                              "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                              "expandState": "expand"\n' +
        '                                                                                                            },\n' +
        '                                                                                                            "children": [\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                  "created": 1592893444414,\n' +
        '                                                                                                                  "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              },\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o4vfykyv40",\n' +
        '                                                                                                                  "created": 1592880108858,\n' +
        '                                                                                                                  "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                  "expandState": "expand"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              }\n' +
        '                                                                                                            ]\n' +
        '                                                                                                          },\n' +
        '                                                                                                          {\n' +
        '                                                                                                            "data": {\n' +
        '                                                                                                              "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                              "created": 1592880153920,\n' +
        '                                                                                                              "text": "json表数据"\n' +
        '                                                                                                            },\n' +
        '                                                                                                            "children": [\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                  "created": 1592880154117,\n' +
        '                                                                                                                  "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": [{\n' +
        '                                                                                                                  "data": {\n' +
        '                                                                                                                    "id": "c3o4tg76e2o0",\n' +
        '                                                                                                                    "created": 1592879952650,\n' +
        '                                                                                                                    "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                                                    "layout_bottom_offset": {\n' +
        '                                                                                                                      "x": 23.000000342726707,\n' +
        '                                                                                                                      "y": 0\n' +
        '                                                                                                                    }\n' +
        '                                                                                                                  },\n' +
        '                                                                                                                  "children": [\n' +
        '                                                                                                                    {\n' +
        '                                                                                                                      "data": {\n' +
        '                                                                                                                        "id": "c3o9kk1jiag0",\n' +
        '                                                                                                                        "created": 1592893361288,\n' +
        '                                                                                                                        "text": "右键事件和明细表",\n' +
        '                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                      },\n' +
        '                                                                                                                      "children": [\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                                            "created": 1592985683455,\n' +
        '                                                                                                                            "text": "双击编辑需要取消",\n' +
        '                                                                                                                            "expandState": "expand"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": []\n' +
        '                                                                                                                        },\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3o4txlfkvc0",\n' +
        '                                                                                                                            "created": 1592879990517,\n' +
        '                                                                                                                            "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                                            "expandState": "expand"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": []\n' +
        '                                                                                                                        },\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                                            "created": 1592891746971,\n' +
        '                                                                                                                            "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                                            "expandState": "collapse"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": [\n' +
        '                                                                                                                            {\n' +
        '                                                                                                                              "data": {\n' +
        '                                                                                                                                "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                                                "created": 1592880071342,\n' +
        '                                                                                                                                "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                                                "expandState": "expand"\n' +
        '                                                                                                                              },\n' +
        '                                                                                                                              "children": [\n' +
        '                                                                                                                                {\n' +
        '                                                                                                                                  "data": {\n' +
        '                                                                                                                                    "id": "c3o9ouh6km00",\n' +
        '                                                                                                                                    "created": 1592893697458,\n' +
        '                                                                                                                                    "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                                                  },\n' +
        '                                                                                                                                  "children": []\n' +
        '                                                                                                                                },\n' +
        '                                                                                                                                {\n' +
        '                                                                                                                                  "data": {\n' +
        '                                                                                                                                    "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                                                    "created": 1592880214780,\n' +
        '                                                                                                                                    "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                                                  },\n' +
        '                                                                                                                                  "children": [\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                                        "created": 1592893559990,\n' +
        '                                                                                                                                        "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    },\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                                        "created": 1592893622732,\n' +
        '                                                                                                                                        "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    },\n' +
        '                                                                                                                                    {\n' +
        '                                                                                                                                      "data": {\n' +
        '                                                                                                                                        "id": "c3o9oiara200",\n' +
        '                                                                                                                                        "created": 1592893670949,\n' +
        '                                                                                                                                        "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                                      },\n' +
        '                                                                                                                                      "children": []\n' +
        '                                                                                                                                    }\n' +
        '                                                                                                                                  ]\n' +
        '                                                                                                                                }\n' +
        '                                                                                                                              ]\n' +
        '                                                                                                                            }\n' +
        '                                                                                                                          ]\n' +
        '                                                                                                                        }\n' +
        '                                                                                                                      ]\n' +
        '                                                                                                                    },\n' +
        '                                                                                                                    {\n' +
        '                                                                                                                      "data": {\n' +
        '                                                                                                                        "id": "c3o9l10ws7c0",\n' +
        '                                                                                                                        "created": 1592893398255,\n' +
        '                                                                                                                        "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                                        "expandState": "expand"\n' +
        '                                                                                                                      },\n' +
        '                                                                                                                      "children": [\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                                            "created": 1592893444414,\n' +
        '                                                                                                                            "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": []\n' +
        '                                                                                                                        },\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3o4vfykyv40",\n' +
        '                                                                                                                            "created": 1592880108858,\n' +
        '                                                                                                                            "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                                            "expandState": "expand"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": []\n' +
        '                                                                                                                        }\n' +
        '                                                                                                                      ]\n' +
        '                                                                                                                    },\n' +
        '                                                                                                                    {\n' +
        '                                                                                                                      "data": {\n' +
        '                                                                                                                        "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                                        "created": 1592880153920,\n' +
        '                                                                                                                        "text": "json表数据"\n' +
        '                                                                                                                      },\n' +
        '                                                                                                                      "children": [\n' +
        '                                                                                                                        {\n' +
        '                                                                                                                          "data": {\n' +
        '                                                                                                                            "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                                            "created": 1592880154117,\n' +
        '                                                                                                                            "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                                          },\n' +
        '                                                                                                                          "children": []\n' +
        '                                                                                                                        }\n' +
        '                                                                                                                      ]\n' +
        '                                                                                                                    }\n' +
        '                                                                                                                  ]\n' +
        '                                                                                                                }]\n' +
        '                                                                                                              }\n' +
        '                                                                                                            ]\n' +
        '                                                                                                          }\n' +
        '                                                                                                        ]\n' +
        '                                                                                                      }]\n' +
        '                                                                                                    }\n' +
        '                                                                                                  ]\n' +
        '                                                                                                }\n' +
        '                                                                                              ]\n' +
        '                                                                                            }\n' +
        '                                                                                          ]\n' +
        '                                                                                        }\n' +
        '                                                                                      ]\n' +
        '                                                                                    },\n' +
        '                                                                                    {\n' +
        '                                                                                      "data": {\n' +
        '                                                                                        "id": "c3o9l10ws7c0",\n' +
        '                                                                                        "created": 1592893398255,\n' +
        '                                                                                        "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                        "expandState": "expand"\n' +
        '                                                                                      },\n' +
        '                                                                                      "children": [\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o9lm8ae7k0",\n' +
        '                                                                                            "created": 1592893444414,\n' +
        '                                                                                            "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        },\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o4vfykyv40",\n' +
        '                                                                                            "created": 1592880108858,\n' +
        '                                                                                            "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                            "expandState": "expand"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        }\n' +
        '                                                                                      ]\n' +
        '                                                                                    },\n' +
        '                                                                                    {\n' +
        '                                                                                      "data": {\n' +
        '                                                                                        "id": "c3o4w0ntiqo0",\n' +
        '                                                                                        "created": 1592880153920,\n' +
        '                                                                                        "text": "json表数据"\n' +
        '                                                                                      },\n' +
        '                                                                                      "children": [\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o4w0r2rtk0",\n' +
        '                                                                                            "created": 1592880154117,\n' +
        '                                                                                            "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": [{\n' +
        '                                                                                            "data": {\n' +
        '                                                                                              "id": "c3o4tg76e2o0",\n' +
        '                                                                                              "created": 1592879952650,\n' +
        '                                                                                              "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                                              "layout_bottom_offset": {\n' +
        '                                                                                                "x": 23.000000342726707,\n' +
        '                                                                                                "y": 0\n' +
        '                                                                                              }\n' +
        '                                                                                            },\n' +
        '                                                                                            "children": [\n' +
        '                                                                                              {\n' +
        '                                                                                                "data": {\n' +
        '                                                                                                  "id": "c3o9kk1jiag0",\n' +
        '                                                                                                  "created": 1592893361288,\n' +
        '                                                                                                  "text": "右键事件和明细表",\n' +
        '                                                                                                  "expandState": "expand"\n' +
        '                                                                                                },\n' +
        '                                                                                                "children": [\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3p6ao9e4zk0",\n' +
        '                                                                                                      "created": 1592985683455,\n' +
        '                                                                                                      "text": "双击编辑需要取消",\n' +
        '                                                                                                      "expandState": "expand"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": []\n' +
        '                                                                                                  },\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3o4txlfkvc0",\n' +
        '                                                                                                      "created": 1592879990517,\n' +
        '                                                                                                      "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                                      "expandState": "expand"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": []\n' +
        '                                                                                                  },\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3o8zyfoqrc0",\n' +
        '                                                                                                      "created": 1592891746971,\n' +
        '                                                                                                      "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                                      "expandState": "collapse"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": [\n' +
        '                                                                                                      {\n' +
        '                                                                                                        "data": {\n' +
        '                                                                                                          "id": "c3o4uyq4ryg0",\n' +
        '                                                                                                          "created": 1592880071342,\n' +
        '                                                                                                          "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                                          "expandState": "expand"\n' +
        '                                                                                                        },\n' +
        '                                                                                                        "children": [\n' +
        '                                                                                                          {\n' +
        '                                                                                                            "data": {\n' +
        '                                                                                                              "id": "c3o9ouh6km00",\n' +
        '                                                                                                              "created": 1592893697458,\n' +
        '                                                                                                              "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                                            },\n' +
        '                                                                                                            "children": []\n' +
        '                                                                                                          },\n' +
        '                                                                                                          {\n' +
        '                                                                                                            "data": {\n' +
        '                                                                                                              "id": "c3o4wsmbr2w0",\n' +
        '                                                                                                              "created": 1592880214780,\n' +
        '                                                                                                              "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                                            },\n' +
        '                                                                                                            "children": [\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o9n3bpmww0",\n' +
        '                                                                                                                  "created": 1592893559990,\n' +
        '                                                                                                                  "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              },\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o9nw5cmnc0",\n' +
        '                                                                                                                  "created": 1592893622732,\n' +
        '                                                                                                                  "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              },\n' +
        '                                                                                                              {\n' +
        '                                                                                                                "data": {\n' +
        '                                                                                                                  "id": "c3o9oiara200",\n' +
        '                                                                                                                  "created": 1592893670949,\n' +
        '                                                                                                                  "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                                                },\n' +
        '                                                                                                                "children": []\n' +
        '                                                                                                              }\n' +
        '                                                                                                            ]\n' +
        '                                                                                                          }\n' +
        '                                                                                                        ]\n' +
        '                                                                                                      }\n' +
        '                                                                                                    ]\n' +
        '                                                                                                  }\n' +
        '                                                                                                ]\n' +
        '                                                                                              },\n' +
        '                                                                                              {\n' +
        '                                                                                                "data": {\n' +
        '                                                                                                  "id": "c3o9l10ws7c0",\n' +
        '                                                                                                  "created": 1592893398255,\n' +
        '                                                                                                  "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                                                  "expandState": "expand"\n' +
        '                                                                                                },\n' +
        '                                                                                                "children": [\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3o9lm8ae7k0",\n' +
        '                                                                                                      "created": 1592893444414,\n' +
        '                                                                                                      "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": []\n' +
        '                                                                                                  },\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3o4vfykyv40",\n' +
        '                                                                                                      "created": 1592880108858,\n' +
        '                                                                                                      "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                                      "expandState": "expand"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": []\n' +
        '                                                                                                  }\n' +
        '                                                                                                ]\n' +
        '                                                                                              },\n' +
        '                                                                                              {\n' +
        '                                                                                                "data": {\n' +
        '                                                                                                  "id": "c3o4w0ntiqo0",\n' +
        '                                                                                                  "created": 1592880153920,\n' +
        '                                                                                                  "text": "json表数据"\n' +
        '                                                                                                },\n' +
        '                                                                                                "children": [\n' +
        '                                                                                                  {\n' +
        '                                                                                                    "data": {\n' +
        '                                                                                                      "id": "c3o4w0r2rtk0",\n' +
        '                                                                                                      "created": 1592880154117,\n' +
        '                                                                                                      "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                                                    },\n' +
        '                                                                                                    "children": []\n' +
        '                                                                                                  }\n' +
        '                                                                                                ]\n' +
        '                                                                                              }\n' +
        '                                                                                            ]\n' +
        '                                                                                          }]\n' +
        '                                                                                        }\n' +
        '                                                                                      ]\n' +
        '                                                                                    }\n' +
        '                                                                                  ]\n' +
        '                                                                                }]\n' +
        '                                                                              }\n' +
        '                                                                            ]\n' +
        '                                                                          }\n' +
        '                                                                        ]\n' +
        '                                                                      }\n' +
        '                                                                    ]\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              },\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o9l10ws7c0",\n' +
        '                                                                  "created": 1592893398255,\n' +
        '                                                                  "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                  "expandState": "expand"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o9lm8ae7k0",\n' +
        '                                                                      "created": 1592893444414,\n' +
        '                                                                      "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  },\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4vfykyv40",\n' +
        '                                                                      "created": 1592880108858,\n' +
        '                                                                      "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                      "expandState": "expand"\n' +
        '                                                                    },\n' +
        '                                                                    "children": []\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              },\n' +
        '                                                              {\n' +
        '                                                                "data": {\n' +
        '                                                                  "id": "c3o4w0ntiqo0",\n' +
        '                                                                  "created": 1592880153920,\n' +
        '                                                                  "text": "json表数据"\n' +
        '                                                                },\n' +
        '                                                                "children": [\n' +
        '                                                                  {\n' +
        '                                                                    "data": {\n' +
        '                                                                      "id": "c3o4w0r2rtk0",\n' +
        '                                                                      "created": 1592880154117,\n' +
        '                                                                      "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                    },\n' +
        '                                                                    "children": [{\n' +
        '                                                                      "data": {\n' +
        '                                                                        "id": "c3o4tg76e2o0",\n' +
        '                                                                        "created": 1592879952650,\n' +
        '                                                                        "text": "右键事件样式可以不变，事件内容更改",\n' +
        '                                                                        "layout_bottom_offset": {\n' +
        '                                                                          "x": 23.000000342726707,\n' +
        '                                                                          "y": 0\n' +
        '                                                                        }\n' +
        '                                                                      },\n' +
        '                                                                      "children": [\n' +
        '                                                                        {\n' +
        '                                                                          "data": {\n' +
        '                                                                            "id": "c3o9kk1jiag0",\n' +
        '                                                                            "created": 1592893361288,\n' +
        '                                                                            "text": "右键事件和明细表",\n' +
        '                                                                            "expandState": "expand"\n' +
        '                                                                          },\n' +
        '                                                                          "children": [\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3p6ao9e4zk0",\n' +
        '                                                                                "created": 1592985683455,\n' +
        '                                                                                "text": "双击编辑需要取消",\n' +
        '                                                                                "expandState": "expand"\n' +
        '                                                                              },\n' +
        '                                                                              "children": []\n' +
        '                                                                            },\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3o4txlfkvc0",\n' +
        '                                                                                "created": 1592879990517,\n' +
        '                                                                                "text": "明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表",\n' +
        '                                                                                "expandState": "expand"\n' +
        '                                                                              },\n' +
        '                                                                              "children": []\n' +
        '                                                                            },\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3o8zyfoqrc0",\n' +
        '                                                                                "created": 1592891746971,\n' +
        '                                                                                "text": "【本来就拥有的事件，无需修改】右键插入主题，删除主题",\n' +
        '                                                                                "expandState": "collapse"\n' +
        '                                                                              },\n' +
        '                                                                              "children": [\n' +
        '                                                                                {\n' +
        '                                                                                  "data": {\n' +
        '                                                                                    "id": "c3o4uyq4ryg0",\n' +
        '                                                                                    "created": 1592880071342,\n' +
        '                                                                                    "text": "插入主题，在其他页面进行更改json",\n' +
        '                                                                                    "expandState": "expand"\n' +
        '                                                                                  },\n' +
        '                                                                                  "children": [\n' +
        '                                                                                    {\n' +
        '                                                                                      "data": {\n' +
        '                                                                                        "id": "c3o9ouh6km00",\n' +
        '                                                                                        "created": 1592893697458,\n' +
        '                                                                                        "text": "插入主题，寻找插入主题的方法，写入main.button内"\n' +
        '                                                                                      },\n' +
        '                                                                                      "children": []\n' +
        '                                                                                    },\n' +
        '                                                                                    {\n' +
        '                                                                                      "data": {\n' +
        '                                                                                        "id": "c3o4wsmbr2w0",\n' +
        '                                                                                        "created": 1592880214780,\n' +
        '                                                                                        "text": "点击某节点后，进行插入删除操作"\n' +
        '                                                                                      },\n' +
        '                                                                                      "children": [\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o9n3bpmww0",\n' +
        '                                                                                            "created": 1592893559990,\n' +
        '                                                                                            "text": "插入删除需要更改json文件，回到了第一个问题，"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        },\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o9nw5cmnc0",\n' +
        '                                                                                            "created": 1592893622732,\n' +
        '                                                                                            "text": "是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        },\n' +
        '                                                                                        {\n' +
        '                                                                                          "data": {\n' +
        '                                                                                            "id": "c3o9oiara200",\n' +
        '                                                                                            "created": 1592893670949,\n' +
        '                                                                                            "text": "上述终归有瑕疵，继续思考"\n' +
        '                                                                                          },\n' +
        '                                                                                          "children": []\n' +
        '                                                                                        }\n' +
        '                                                                                      ]\n' +
        '                                                                                    }\n' +
        '                                                                                  ]\n' +
        '                                                                                }\n' +
        '                                                                              ]\n' +
        '                                                                            }\n' +
        '                                                                          ]\n' +
        '                                                                        },\n' +
        '                                                                        {\n' +
        '                                                                          "data": {\n' +
        '                                                                            "id": "c3o9l10ws7c0",\n' +
        '                                                                            "created": 1592893398255,\n' +
        '                                                                            "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                                                            "expandState": "expand"\n' +
        '                                                                          },\n' +
        '                                                                          "children": [\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3o9lm8ae7k0",\n' +
        '                                                                                "created": 1592893444414,\n' +
        '                                                                                "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                                                              },\n' +
        '                                                                              "children": []\n' +
        '                                                                            },\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3o4vfykyv40",\n' +
        '                                                                                "created": 1592880108858,\n' +
        '                                                                                "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                                                "expandState": "expand"\n' +
        '                                                                              },\n' +
        '                                                                              "children": []\n' +
        '                                                                            }\n' +
        '                                                                          ]\n' +
        '                                                                        },\n' +
        '                                                                        {\n' +
        '                                                                          "data": {\n' +
        '                                                                            "id": "c3o4w0ntiqo0",\n' +
        '                                                                            "created": 1592880153920,\n' +
        '                                                                            "text": "json表数据"\n' +
        '                                                                          },\n' +
        '                                                                          "children": [\n' +
        '                                                                            {\n' +
        '                                                                              "data": {\n' +
        '                                                                                "id": "c3o4w0r2rtk0",\n' +
        '                                                                                "created": 1592880154117,\n' +
        '                                                                                "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                                                              },\n' +
        '                                                                              "children": []\n' +
        '                                                                            }\n' +
        '                                                                          ]\n' +
        '                                                                        }\n' +
        '                                                                      ]\n' +
        '                                                                    }]\n' +
        '                                                                  }\n' +
        '                                                                ]\n' +
        '                                                              }\n' +
        '                                                            ]\n' +
        '                                                          }]\n' +
        '                                                        }\n' +
        '                                                      ]\n' +
        '                                                    }\n' +
        '                                                  ]\n' +
        '                                                }\n' +
        '                                              ]\n' +
        '                                            }\n' +
        '                                          ]\n' +
        '                                        },\n' +
        '                                        {\n' +
        '                                          "data": {\n' +
        '                                            "id": "c3o9l10ws7c0",\n' +
        '                                            "created": 1592893398255,\n' +
        '                                            "text": "【ok】【外观主题】有点难，最后做",\n' +
        '                                            "expandState": "expand"\n' +
        '                                          },\n' +
        '                                          "children": [\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3o9lm8ae7k0",\n' +
        '                                                "created": 1592893444414,\n' +
        '                                                "text": "本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"\n' +
        '                                              },\n' +
        '                                              "children": []\n' +
        '                                            },\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3o4vfykyv40",\n' +
        '                                                "created": 1592880108858,\n' +
        '                                                "text": "外观主题这两个，拿出来，可以用文字，不必须用图片",\n' +
        '                                                "expandState": "expand"\n' +
        '                                              },\n' +
        '                                              "children": []\n' +
        '                                            }\n' +
        '                                          ]\n' +
        '                                        },\n' +
        '                                        {\n' +
        '                                          "data": {\n' +
        '                                            "id": "c3o4w0ntiqo0",\n' +
        '                                            "created": 1592880153920,\n' +
        '                                            "text": "json表数据"\n' +
        '                                          },\n' +
        '                                          "children": [\n' +
        '                                            {\n' +
        '                                              "data": {\n' +
        '                                                "id": "c3o4w0r2rtk0",\n' +
        '                                                "created": 1592880154117,\n' +
        '                                                "text": "数据太多的情况下，对应的响应速度"\n' +
        '                                              },\n' +
        '                                              "children": []\n' +
        '                                            }\n' +
        '                                          ]\n' +
        '                                        }\n' +
        '                                      ]\n' +
        '                                    }]\n' +
        '                                  }\n' +
        '                                ]\n' +
        '                              }\n' +
        '                            ]\n' +
        '                          }]\n' +
        '                        }\n' +
        '                      ]\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }]\n' +
        '              }\n' +
        '            ]\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3shb63vfq00",\n' +
        '          "created": 1593321434383,\n' +
        '          "text": "点击节点，下方添加，删除"\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3shbhpy2u80",\n' +
        '              "created": 1593321459662,\n' +
        '              "text": "三个视图，减少空间"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3shbr7idnk0",\n' +
        '              "created": 1593321480315,\n' +
        '              "text": "右键取消，【编辑开关关闭】"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3sitdkkjns0",\n' +
        '                  "created": 1593325682295,\n' +
        '                  "text": "右键事件：全局搜索 右键 ， 呼出热盒注释就可以"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              }\n' +
        '            ]\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3shc3jlm1c0",\n' +
        '              "created": 1593321507168,\n' +
        '              "text": "如何合并表，导出，"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3shd0ofwg00",\n' +
        '              "created": 1593321579294,\n' +
        '              "text": "缩放调低"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3sisytnvo80",\n' +
        '              "created": 1593325650193,\n' +
        '              "text": "ERROR"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3sit59fmj40",\n' +
        '                  "created": 1593325664207,\n' +
        '                  "text": "TAB键会触发两次"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              }\n' +
        '            ]\n' +
        '          }\n' +
        '        ]\n' +
        '      },\n' +
        '      {\n' +
        '        "data": {\n' +
        '          "id": "c3v44du31ds0",\n' +
        '          "created": 1593588908097,\n' +
        '          "text": "上方按钮以json形式输出在某个地方，一排，好维护"\n' +
        '        },\n' +
        '        "children": [\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3vqd4q19ko0",\n' +
        '              "created": 1593651657957,\n' +
        '              "text": "取消快捷键"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3v44wi9s2w0",\n' +
        '              "created": 1593588948742,\n' +
        '              "text": "添加节点，只保留添加下级，选择分类"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3v46q0akts0",\n' +
        '                  "created": 1593589091322,\n' +
        '                  "text": "关注浏览器关闭事件，不持续刷新，不持续访问数据库"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              },\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3v47gyr50o0",\n' +
        '                  "created": 1593589150002,\n' +
        '                  "text": "百度脑图保存规则"\n' +
        '                },\n' +
        '                "children": [\n' +
        '                  {\n' +
        '                    "data": {\n' +
        '                      "id": "c3v4g1ukngg0",\n' +
        '                      "created": 1593589822375,\n' +
        '                      "text": "所有的内容都实时保存到本地，每隔 10 秒同步至云端，此外 Ctrl + S 操作也会将脑图内容同步至云端。"\n' +
        '                    },\n' +
        '                    "children": []\n' +
        '                  }\n' +
        '                ]\n' +
        '              }\n' +
        '            ]\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3v45e25r9s0",\n' +
        '              "created": 1593588986950,\n' +
        '              "text": "单击后，拿到id值就可以，不需要其他"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3v4689wjew0",\n' +
        '              "created": 1593589052721,\n' +
        '              "text": "上方按钮，尽量多的保留下来，文字就行，排排站"\n' +
        '            },\n' +
        '            "children": [\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3v482yuvq80",\n' +
        '                  "created": 1593589197898,\n' +
        '                  "text": "echas控件"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              },\n' +
        '              {\n' +
        '                "data": {\n' +
        '                  "id": "c3v4896l3n40",\n' +
        '                  "created": 1593589211426,\n' +
        '                  "text": "选择一个控件，不要自己写，写的又难看，又慢"\n' +
        '                },\n' +
        '                "children": []\n' +
        '              }\n' +
        '            ]\n' +
        '          },\n' +
        '          {\n' +
        '            "data": {\n' +
        '              "id": "c3vr38jz44o0",\n' +
        '              "created": 1593653703766,\n' +
        '              "text": "删除不必要的代码，整理js与css"\n' +
        '            },\n' +
        '            "children": []\n' +
        '          }\n' +
        '        ]\n' +
        '      }\n' +
        '    ]\n' +
        '  },\n' +
        '  "template": "filetree",\n' +
        '  "theme": "fresh-blue-compat",\n' +
        '  "version": "1.4.33"\n' +
        '}';
    //document.getElementsByName("vdIframe")[0].setAttribute('link', jsonp);

    $("#aaabbb").val(jsonp);

    console.log("偶然情况下，进入页面后，默认点击拖拽按钮，在刚进入页面的时候，如果以拖拽模式下的鼠标点击节点，会导致下面input框拿不到焦点")
    console.log(" ===   逻辑错误，应判断第一次获得焦点时的数据，而不是每次获得焦点，用户在输入又更改回来的情况下，依然报不等")
    console.log("点击节点后，就拿到当前的节点可更改的数据，")


    setTimeout(function(){
        var begin_data;
        var end_data;

        $(".par").focus(function (e) {//获得焦点
            console.log("获得焦点")
            console.log("a---------"+this.value)
            //获得焦点后，拿出数据
            begin_data = this.value;

        })
        $(".par").blur(function () {//失去焦点
            console.log("失去焦点")
            console.log("b------"+this.value)
            //失去焦点后，拿出数据
            end_data = this.value;

            //数据对比   a==b
            if(begin_data == end_data){
                console.log("<<<<<<<<<<<<<<<<<<<相等，不需要改变>>>>>>>>>>>>>>>>>>>")

                window.onunload=function(){  //可以关闭，不会阻止
                    return false;
                }

            }else{
                console.log("<<<<<<<<<<<<<<<<<<<不等，需改变>>>>>>>>>>>>>>>>>>>")

                window.onbeforeunload=function(){  //阻止关闭
                    return false;
                }

                //在cookie中更改状态值，并设定十秒后进行数据库覆盖
                haveModified();
            }

            //失去焦点后，拿出数据，与获得焦点时的数据对比，如不同，触发更改
            //触发定时器，异步ajax保存数据



        })

    },1000);
})

//单击节点触发子页面的exportNodeData（）事件
function addpp() {
    childwin = $("#iframe1Id")[0].contentWindow;
    childwin.getNodeData()
};

//     选择模板/主题    param:_v:对应的value，_a ==0切换模板   ==1切换主题
function show_sub(_v, _a) {
    if (_v) {
        if (_a == 0) {
            var jsonp2 = JSON.parse(jsonp);//转为对象
            jsonp2.template = _v;//更改参数
            jsonp = JSON.stringify(jsonp2) //转为字符串
            //document.getElementsByName("vdIframe")[0].setAttribute('link', jsonp);
            $("#aaabbb").val(jsonp);
            document.getElementById("iframe1Id").src = "index.html"; // 方法一: 通过和替换iframe的src来实现局部刷新
        } else if (_a == 1) {
            var jsonp2 = JSON.parse(jsonp);//转为对象
            jsonp2.theme = _v;//更改参数
            jsonp = JSON.stringify(jsonp2) //转为字符串
            //document.getElementsByName("vdIframe")[0].setAttribute('link', jsonp);
            $("#aaabbb").val(jsonp);
            document.getElementById("iframe1Id").src = "index.html"; // 方法一: 通过和替换iframe的src来实现局部刷新
        }
    } else {
        alert("请选择")
    }
};

function addNode(param) {
    var childwin = $("#iframe1Id")[0].contentWindow;

    if (param == 0) {   //添加下级
        childwin.addChildNode();
    } else if (param == 1) {   //添加上级
        childwin.addParentNode();
    } else if (param == 2) {   //添加同级
        childwin.addSiblingNode();
    } else if (param == 3) {   //后移
        childwin.ArrangeDown();
    } else if (param == 4) {   //前移
        childwin.ArrangeUp();
    } else if (param == 5) {   //展开到一级节点/关闭
        childwin.expandtolevel1();
    } else if (param == 6) {   //展开全部节点
        childwin.expandtoleaf();
    } else if (param == 7) {   //导出数据
        childwin.parseJSON();
    }
}

/*function myFunction() {
    return "我在这写点东西...";
}*/

//前端页面内容修改触发
var timerId = null;//记录定时器名称
//更改cookie状态，定时器10s去保存到数据库
function haveModified() {
    setCookie('modify_flag', 1 ,1);//重新设置cookie，1表示：有修改
    //定时器
    clearTimeout(timerId);//清除之前的定时器（为了重新计时，否则会有多个定时器同时进行，传递多次数据）
    timerId = setTimeout(storeChangeDelay, 5000);//设置定时器
}

/*function asdasd() {
    return "保存到数据库";
}*/

//ajax异步
function storeChangeDelay() {
    alert("ajax异步")
   /* $.ajax({
        type: "POST",
        dataType: "json",
        data: {projectId: projectId, projectLists: arrProjectNodes},
        url: 'Project/Project/modifyProject',
        success: function (data) {
            if (data.errno == 0) {
                $.cookie('projectlist_modify_flag', 0);//修改的内容已经保存，将该cookie置为0
            } else {
                console.log('there are some errors in project.js:storeChange ajax' + data.errno + ': ' + data.msg);
            }
        },
        error: function (er) {
            console.log('some error in project.js:storeChange ajax');
        }
    });*/
}

//ajax同步
function storeChangeRealTime() {
    alert("ajax同步")
    /*$.ajax({
        async: false,//这是与storeChangeDelay不同的地方，表示使用同步方式传输数据
        type: "POST",
        dataType: "json",
        data: {projectId: projectId, projectLists: arrProjectNodes},
        url: 'Project/Project/modifyProject',
        success: function (data) {
            if (data.errno == 0) {
                $.cookie('projectlist_modify_flag', 0);//修改的内容已经保存，将该cookie置为0
            } else {
                console.log('there are some errors in project.js:storeChange ajax' + data.errno + ': ' + data.msg);
            }
        },
        error: function (er) {
            console.log('some error in project.js:storeChange ajax');
        }
    });*/
}


var timerId = null;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays  * 30 * 60 * 1000));//三十分钟
    var expires = "expires=" + d.toGMTString();//过期时间
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {

    var decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.substring(decodedCookie.length-1,decodedCookie.length);//得到cookie的value

}
