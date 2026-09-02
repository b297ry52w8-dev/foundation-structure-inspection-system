window.DICT = {
  contractStatus:['未生效','履约中','已到期','已终止'],
  approvalStatus:['待发起','审批中','已驳回','审批完成'],
  receiptStatus:['正常','已作废'],
  receiptMethod:['银行转账','现金','微信转账','支付宝转账','个人转账','其他'],
  invoiceStatus:['正常','已作废'],
  paymentStatus:['未收款','部分收款','已收款'],
  enabled:['启用','禁用'],
  dispatchStatus:['未派发','已派发'],
  urgeStatus:['未催办','已催办'],
  overtime:['是','否'],
  extractMethod:['自取','邮寄'],
  provideMaterial:['设计施工图纸','原材料试验报告','其他'],
  sampleType:['委托方','见证方','检测方'],
  taskStatus:['待派发','待检测','检测中','检毕','已取消'],
  taskApproval:['待发起','审核中','已驳回','审核通过'],
  reportStatus:['编制中','已完成','已作废'],
  reportApproval:['待发起','审核中','已驳回','审核通过']
};

window.APP_NAV = [
  {id:'home',label:'首页',icon:'⌂',path:'/home',children:[]},
  {id:'contract',label:'合同管理',icon:'▤',path:'/contracts',children:[
    {label:'合同清单',path:'/contracts',icon:'▦'},
    {label:'收款管理',path:'/receipts',icon:'￥'},
    {label:'开票管理',path:'/invoices',icon:'▧'}]},
  {id:'marketing',label:'营销管理',icon:'◇',path:'/customers',children:[
    {label:'客户管理',path:'/customers',icon:'♙'},
    {label:'工程管理',path:'/projects',icon:'▥'},
    {label:'委托单管理',path:'/entrusts',icon:'☷'}]},
  {id:'inspection',label:'检测管理',icon:'⌁',path:'/tasks',children:[
    {label:'检测任务',path:'/tasks',icon:'✓'},
    {label:'样品管理',path:'/samples',icon:'▣'},
    {label:'报告编制',path:'/reports',icon:'▤'}]},
  {id:'statistics',label:'统计分析',icon:'◫',path:'/statistics',children:[
    {label:'统计分析',path:'/statistics',icon:'▥'}]},
  {id:'base',label:'基础数据',icon:'⚙',path:'/business-types',children:[
    {label:'业务类型',path:'/business-types',icon:'♙'},
    {label:'检测项目',path:'/inspection-items',icon:'⌁'},
    {label:'检测规范',path:'/standards',icon:'▤'},
    {label:'设备管理',path:'/equipment',icon:'▣'},
    {label:'流程配置',path:'/flows',icon:'⌘'}]}
];

window.TAG_CLASS = {
  '未生效':'tag-gray','履约中':'tag-blue','已到期':'tag-orange','已终止':'tag-red',
  '待发起':'tag-gray','审批中':'tag-blue','审核中':'tag-blue','已驳回':'tag-red','审批完成':'tag-green','审核通过':'tag-green',
  '正常':'tag-green','已作废':'tag-red','未收款':'tag-gray','部分收款':'tag-orange','已收款':'tag-green',
  '启用':'tag-green','禁用':'tag-gray','未派发':'tag-red','已派发':'tag-blue','未催办':'tag-gray','已催办':'tag-orange',
  '是':'tag-red','否':'tag-green','待派发':'tag-red','待检测':'tag-orange','检测中':'tag-purple','检毕':'tag-green','已取消':'tag-gray',
  '编制中':'tag-blue','已完成':'tag-green','待领用':'tag-orange','已领用':'tag-blue','已归还':'tag-green','在库':'tag-green','使用中':'tag-blue','停用':'tag-gray'
};
