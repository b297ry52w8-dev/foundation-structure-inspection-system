(function(){
  const customers=['中建路桥集团有限公司','华北建设工程有限公司','河北远创建筑集团','中铁基础设施有限公司','城投工程建设有限公司','冀东交通工程集团','新城建设发展有限公司','华通岩土工程有限公司','远景基础工程有限公司','泽润城市建设有限公司'];
  const items=['桩承载力检测','桩完整性检测','地基承载力检测','锚杆抗拔检测'];
  const companies=['中能检测技术有限公司','河北建研检测有限公司','华北工程质量检测中心'];
  const contracts=Array.from({length:12},(_,i)=>({
    id:'HT2026'+String(i+1).padStart(6,'0'),name:['华北物流园地基检测合同','滨河新城基础检测服务合同','轨道交通配套工程检测合同','云谷产业园桩基检测合同','城市更新结构检测合同','综合保税区基础检测合同'][i%6],
    customer:customers[i%customers.length],untaxed:180000+i*79350,taxRate:6,amount:(190800+i*84111).toFixed(2),
    start:`2026-${String((i%5)+1).padStart(2,'0')}-01`,end:`2027-${String((i%5)+1).padStart(2,'0')}-28`,
    status:['未生效','履约中','履约中','已到期','已终止','履约中'][i%6],approval:['待发起','审批中','审批完成','审批完成','审批完成','已驳回'][i%6],attachments:['合同扫描件.pdf','技术条款.docx']
  }));
  const invoices=Array.from({length:10},(_,i)=>({id:'FP2026'+String(i+1).padStart(6,'0'),customer:customers[i],contract:contracts[(i+1)%contracts.length].id,contractName:contracts[(i+1)%contracts.length].name,amount:(68000+i*31750).toFixed(2),taskCount:(i%4)+1,date:`2026-0${(i%6)+2}-${String(8+i).padStart(2,'0')}`,status:i===7?'已作废':'正常',payment:['未收款','部分收款','已收款'][i%3],paymentTime:i%3===0?'—':`2026-07-${String(10+i).padStart(2,'0')}`,attachment:'增值税发票.pdf'}));
  const receipts=Array.from({length:10},(_,i)=>({id:'SK2026'+String(i+1).padStart(6,'0'),customer:customers[(i+2)%customers.length],contract:contracts[(i+2)%contracts.length].id,contractName:contracts[(i+2)%contracts.length].name,invoiceCount:(i%3)+1,amount:(42000+i*18650).toFixed(2),date:`2026-0${(i%6)+2}-${String(11+i).padStart(2,'0')}`,method:DICT.receiptMethod[i%DICT.receiptMethod.length],registrar:['张三','李娜','王磊'][i%3],status:i===8?'已作废':'正常'}));
  const customerRows=customers.map((name,i)=>({id:'KH2026'+String(i+1).padStart(5,'0'),name,short:name.replace('有限公司','').slice(0,6),businessTypeId:i%3===0?'BT001':'BT002',contact:['张伟','刘洋','王强','陈静'][i%4],phone:'13'+String(860000000+i*17321).padStart(9,'0').slice(-9),status:i===8?'禁用':'启用',credit:'91130100MA'+String(100000+i)}));
  const projects=Array.from({length:10},(_,i)=>({id:'GC2026'+String(i+1).padStart(5,'0'),name:['滨河新城A区项目','华北物流园项目','轨道交通配套项目','云谷产业园项目','城市更新示范项目'][i%5],contract:contracts[(i+1)%contracts.length].id,customer:contracts[(i+1)%contracts.length].customer,amount:contracts[(i+1)%contracts.length].amount,status:i===7?'禁用':'启用',used:i%3===0}));
  const entrustSeed=[
    ['WT202608280001','滨河新城1号楼桩基委托','1#桩','桩承载力检测'],['WT202608280001','滨河新城1号楼桩基委托','2#桩','桩承载力检测'],['WT202608280001','滨河新城1号楼桩基委托','2#桩','桩完整性检测'],
    ['WT202608280002','物流园仓库基础委托','A-12桩','桩完整性检测'],['WT202608280002','物流园仓库基础委托','A-13桩','桩承载力检测'],['WT202608280003','云谷园区检测委托','地基一区','地基承载力检测'],
    ['WT202608280004','轨交配套检测委托','3#锚杆','锚杆抗拔检测'],['WT202608280004','轨交配套检测委托','4#锚杆','锚杆抗拔检测'],['WT202608280005','城市更新检测委托','B区5#桩','桩完整性检测'],['WT202608280006','综合保税区检测委托','C-08桩','桩承载力检测'],['WT202608280006','综合保税区检测委托','C-09桩','桩承载力检测'],['WT202608280007','新区学校检测委托','教学楼地基','地基承载力检测']
  ];
  const entrusts=entrustSeed.map((x,i)=>({id:x[0],name:x[1],position:x[2],item:x[3],client:customers[i%customers.length],company:i<3?'—':companies[i%companies.length],dispatch:i<3?'未派发':'已派发',urge:i%4===0?'已催办':'未催办',created:`2026-08-${String(18+i).padStart(2,'0')}`,dispatchDate:i<3?'—':`2026-08-${String(20+i).padStart(2,'0')}`,deadline:`2026-09-${String(5+i).padStart(2,'0')}`,overtime:i===8?'是':'否',inspector:i<5?'—':['李工','王工','赵工'][i%3],cancelled:i===11}));
  const statusList=['待派发','待检测','检测中','检测中','检测中','检毕','已取消'];
  const tasks=Array.from({length:14},(_,i)=>({id:'RW2026'+String(i+1).padStart(6,'0'),position:entrusts[i%entrusts.length].position,item:entrusts[i%entrusts.length].item,entrust:entrusts[i%entrusts.length].name,entrustId:entrusts[i%entrusts.length].id,company:companies[i%companies.length],inspector:i===0?'—':['李工','王工','赵工','陈工'][i%4],status:statusList[i%statusList.length],assigned:i===0?'—':`2026-08-${String(10+i).padStart(2,'0')} 09:30`,approval:['待发起','待发起','待发起','审核中','已驳回','审核通过','待发起'][i%7],node:i%7===3?'技术负责人审核':'—',approvalTime:i%7>=4?`2026-08-${String(18+i).padStart(2,'0')} 14:20`:'—',equipment:i%4!==1,received:i%3!==1,deadline:`2026-09-${String(8+i).padStart(2,'0')}`,created:'2026-08-20 09:00',startTime:['检测中','检毕'].includes(statusList[i%statusList.length])?'2026-08-28 09:30':'',sampleImageCount:['检测中','检毕'].includes(statusList[i%statusList.length])?2:0,recordAttachments:['检测中','检毕'].includes(statusList[i%statusList.length])?['现场检测记录.pdf']:[],version:i%5===4?2:1}));
  const samples=tasks.filter(t=>t.status==='检毕').concat(tasks.slice(0,7)).slice(0,10).map((t,i)=>({position:t.position,item:t.item,taskId:t.id,entrust:t.entrust,entrustId:t.entrustId,inspector:['李工','王工','赵工'][i%3],imageCount:(i%6)+1,created:`2026-08-${String(20+i).padStart(2,'0')} 16:20`}));
  const reports=Array.from({length:9},(_,i)=>({id:'BG2026'+String(i+1).padStart(6,'0'),taskCount:(i%4)+1,taskIds:i%4===3?tasks.slice(i+1,i+1+(i%4)+1).map(x=>x.id):[],entrust:entrusts[i%entrusts.length].id,created:`2026-08-${String(12+i).padStart(2,'0')} 10:00`,author:['张工','李工','王工'][i%3],status:['编制中','编制中','编制中','已完成'][i%4],approval:['待发起','审核中','已驳回','审核通过'][i%4],version:i%3+1,attachment:i%4===0?'':'检测报告.pdf'}));
  const businessTypes=[
    {id:'BT001',name:'铁塔检测',status:'启用',sort:1},
    {id:'BT002',name:'地基及结构检测',status:'启用',sort:2}
  ];
  const inspectionItems=['桩承载力检测','桩完整性检测','地基承载力检测','锚杆抗拔检测','基坑监测','主体结构检测','钢结构检测','沉降观测'].map((n,i)=>({id:'XM'+String(i+1).padStart(4,'0'),name:n,status:i===7?'禁用':'启用',used:i<5}));
  const standards=Array.from({length:9},(_,i)=>({id:'GF2026'+String(i+1).padStart(4,'0'),name:['建筑基桩检测技术规范 JGJ 106','建筑地基检测技术规范 JGJ 340','岩土锚杆与喷射混凝土支护工程技术规范 GB 50086','建筑地基基础设计规范 GB 50007'][i%4],items:[items[i%items.length],items[(i+1)%items.length]],status:i===8?'禁用':'启用'}));
  const equipment=Array.from({length:10},(_,i)=>({id:'SB2026'+String(i+1).padStart(5,'0'),name:['静载测试仪','基桩动测仪','低应变检测仪','锚杆拉拔仪','位移传感器'][i%5],model:['RS-JYB','RSM-PRT','ZBL-P810','HC-30T','WY-50'][i%5],status:['在库','使用中','在库','停用'][i%4],calibration:`2027-0${(i%6)+1}-15`}));
  const applications=Array.from({length:8},(_,i)=>({id:'SQ2026'+String(i+1).padStart(5,'0'),taskId:tasks[(i+1)%tasks.length].id,applicant:['李工','王工','赵工'][i%3],devices:(i%3)+1,date:`2026-08-${String(12+i).padStart(2,'0')}`,status:['待领用','已领用','已归还'][i%3]}));
  const store={contracts,invoices,receipts,customers:customerRows,projects,entrusts,tasks,samples,reports,businessTypes,inspectionItems,standards,equipment,applications};
  const cached=localStorage.getItem('fdi_mock');
  if(cached){
    const legacy=JSON.parse(cached);
    if(!Array.isArray(legacy.businessTypes))legacy.businessTypes=businessTypes;
    if(Array.isArray(legacy.customers))legacy.customers=legacy.customers.map((customer,index)=>{
      const migrated={...customer,businessTypeId:customer.businessTypeId||customerRows[index%customerRows.length].businessTypeId};
      delete migrated.type;
      return migrated;
    });
    if(Array.isArray(legacy.tasks))legacy.tasks=legacy.tasks.map(task=>({...task,created:task.created||'2026-08-20 09:00',startTime:task.startTime||(['检测中','检毕'].includes(task.status)?'2026-08-28 09:30':''),sampleImageCount:Number.isFinite(task.sampleImageCount)?task.sampleImageCount:(['检测中','检毕'].includes(task.status)?2:0),recordAttachments:Array.isArray(task.recordAttachments)?task.recordAttachments:(['检测中','检毕'].includes(task.status)?['现场检测记录.pdf']:[])}));
    if(Array.isArray(legacy.reports))legacy.reports=legacy.reports.map((report,index)=>({...report,status:report.status==='已作废'?(report.approval==='审核通过'?'已完成':'编制中'):report.status,taskIds:Array.isArray(report.taskIds)?report.taskIds:(report.status==='已完成'||report.status==='已作废'?tasks.slice(index+1,index+1+(Number(report.taskCount)||0)).map(x=>x.id):[])}));
    delete legacy[['customer','Types'].join('')];
    window.DB=Object.assign(store,legacy);
    localStorage.setItem('fdi_mock',JSON.stringify(window.DB));
  }else window.DB=store;
  window.saveDB=()=>localStorage.setItem('fdi_mock',JSON.stringify(DB));
})();
