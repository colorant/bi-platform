define(["constant","report/component-box/components/select-vm-template"],function(a,b){function c(a){var b=a.rootId+a.serverData.id,c=$.extend(!0,{},e);return c.id=b+d,c.name=a.serverData.id,c}var d=a.COMPONENT_ID_SUFFIX.SELECT,e={clzType:"VUI",clzKey:"ECUI_SELECT",dataOpt:{textNone:"未选择",textAll:"全部"}};return{type:"SELECT",mold:"ECUI_SELECT",iconClass:"select",caption:"下拉框",defaultWidth:300,defaultHeight:33,defaultValue:"false",vm:{render:function(a){return b.render({id:a.rootId+a.serverData.id+d})}},processRenderData:c,entityDescription:e}});