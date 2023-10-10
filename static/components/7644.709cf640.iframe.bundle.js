"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[7644],{"./node_modules/dagre-d3-es/src/graphlib/json.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>write});var isUndefined=__webpack_require__("./node_modules/lodash-es/isUndefined.js"),_baseClone=__webpack_require__("./node_modules/lodash-es/_baseClone.js");const lodash_es_clone=function clone(value){return(0,_baseClone.Z)(value,4)};var map=__webpack_require__("./node_modules/lodash-es/map.js");__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/graph.js");function write(g){var json={options:{directed:g.isDirected(),multigraph:g.isMultigraph(),compound:g.isCompound()},nodes:writeNodes(g),edges:writeEdges(g)};return isUndefined.Z(g.graph())||(json.value=lodash_es_clone(g.graph())),json}function writeNodes(g){return map.Z(g.nodes(),(function(v){var nodeValue=g.node(v),parent=g.parent(v),node={v};return isUndefined.Z(nodeValue)||(node.value=nodeValue),isUndefined.Z(parent)||(node.parent=parent),node}))}function writeEdges(g){return map.Z(g.edges(),(function(e){var edgeValue=g.edge(e),edge={v:e.v,w:e.w};return isUndefined.Z(e.name)||(edge.name=e.name),isUndefined.Z(edgeValue)||(edge.value=edgeValue),edge}))}},"./node_modules/mermaid/dist/index-f9462f3f.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>render});var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/json.js"),_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/mermaid/dist/edges-f15a7e05.js"),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mermaid/dist/mermaid-0d192ec3.js"),dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),_createText_80c3befb_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/mermaid/dist/createText-80c3befb.js"),d3__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3/src/index.js");let clusterDb={},descendants={},parents={};const isDescendant=(id,ancenstorId)=>(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("In isDecendant",ancenstorId," ",id," = ",descendants[ancenstorId].includes(id)),!!descendants[ancenstorId].includes(id)),copy=(clusterId,graph,newGraph,rootId)=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Copying children of ",clusterId,"root",rootId,"data",graph.node(clusterId),rootId);const nodes=graph.children(clusterId)||[];clusterId!==rootId&&nodes.push(clusterId),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Copying (nodes) clusterId",clusterId,"nodes",nodes),nodes.forEach((node=>{if(graph.children(node).length>0)copy(node,graph,newGraph,rootId);else{const data=graph.node(node);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("cp ",node," to ",rootId," with parent ",clusterId),newGraph.setNode(node,data),rootId!==graph.parent(node)&&(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Setting parent",node,graph.parent(node)),newGraph.setParent(node,graph.parent(node))),clusterId!==rootId&&node!==clusterId?(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Setting parent",node,clusterId),newGraph.setParent(node,clusterId)):(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("In copy ",clusterId,"root",rootId,"data",graph.node(clusterId),rootId),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not Setting parent for node=",node,"cluster!==rootId",clusterId!==rootId,"node!==clusterId",node!==clusterId));const edges=graph.edges(node);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Copying Edges",edges),edges.forEach((edge=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge",edge);const data2=graph.edge(edge.v,edge.w,edge.name);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge data",data2,rootId);try{((edge,clusterId)=>(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Decendants of ",clusterId," is ",descendants[clusterId]),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge is ",edge),edge.v!==clusterId&&edge.w!==clusterId&&(descendants[clusterId]?descendants[clusterId].includes(edge.v)||isDescendant(edge.v,clusterId)||isDescendant(edge.w,clusterId)||descendants[clusterId].includes(edge.w):(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Tilt, ",clusterId,",not in decendants"),!1))))(edge,rootId)?(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Copying as ",edge.v,edge.w,data2,edge.name),newGraph.setEdge(edge.v,edge.w,data2,edge.name),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("newGraph edges ",newGraph.edges(),newGraph.edge(newGraph.edges()[0]))):_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Skipping copy of edge ",edge.v,"--\x3e",edge.w," rootId: ",rootId," clusterId:",clusterId)}catch(e){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.error(e)}}))}_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Removing node",node),graph.removeNode(node)}))},extractDescendants=(id,graph)=>{const children=graph.children(id);let res=[...children];for(const child of children)parents[child]=id,res=[...res,...extractDescendants(child,graph)];return res},findNonClusterChild=(id,graph)=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching",id);const children=graph.children(id);if(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Searching children of id ",id,children),children.length<1)return _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("This is a valid node",id),id;for(const child of children){const _id=findNonClusterChild(child,graph);if(_id)return _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Found replacement for",id," => ",_id),_id}},getAnchorId=id=>clusterDb[id]&&clusterDb[id].externalConnections&&clusterDb[id]?clusterDb[id].id:id,extractor=(graph,depth)=>{if(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("extractor - ",depth,dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph),graph.children("D")),depth>10)return void _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.error("Bailing out");let nodes=graph.nodes(),hasChildren=!1;for(const node of nodes){const children=graph.children(node);hasChildren=hasChildren||children.length>0}if(hasChildren){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Nodes = ",nodes,depth);for(const node of nodes)if(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Extracting node",node,clusterDb,clusterDb[node]&&!clusterDb[node].externalConnections,!graph.parent(node),graph.node(node),graph.children("D")," Depth ",depth),clusterDb[node])if(!clusterDb[node].externalConnections&&graph.children(node)&&graph.children(node).length>0){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Cluster without external connections, without a parent and with children",node,depth);let dir="TB"===graph.graph().rankdir?"LR":"TB";clusterDb[node]&&clusterDb[node].clusterData&&clusterDb[node].clusterData.dir&&(dir=clusterDb[node].clusterData.dir,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing dir",clusterDb[node].clusterData.dir,dir));const clusterGraph=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__.k({multigraph:!0,compound:!0}).setGraph({rankdir:dir,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Old graph before copy",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph)),copy(node,graph,clusterGraph,node),graph.setNode(node,{clusterNode:!0,id:node,clusterData:clusterDb[node].clusterData,labelText:clusterDb[node].labelText,graph:clusterGraph}),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New graph after copy node: (",node,")",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(clusterGraph)),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Old graph after copy",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph))}else _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Cluster ** ",node," **not meeting the criteria !externalConnections:",!clusterDb[node].externalConnections," no parent: ",!graph.parent(node)," children ",graph.children(node)&&graph.children(node).length>0,graph.children("D"),depth),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(clusterDb);else _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster",node,depth);nodes=graph.nodes(),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("New list of nodes",nodes);for(const node of nodes){const data=graph.node(node);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn(" Now next level",node,data),data.clusterNode&&extractor(data.graph,depth+1)}}else _mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Done, no node has children",graph.nodes())},sorter=(graph,nodes)=>{if(0===nodes.length)return[];let result=Object.assign(nodes);return nodes.forEach((node=>{const children=graph.children(node),sorted=sorter(graph,children);result=[...result,...sorted]})),result},shapes={rect:(parent,node)=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Creating subgraph rect for ",node.id,node);const shapeSvg=parent.insert("g").attr("class","cluster"+(node.class?" "+node.class:"")).attr("id",node.id),rect2=shapeSvg.insert("rect",":first-child"),useHtmlLabels=(0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.m)((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.c)().flowchart.htmlLabels),label=shapeSvg.insert("g").attr("class","cluster-label"),text="markdown"===node.labelType?(0,_createText_80c3befb_js__WEBPACK_IMPORTED_MODULE_5__.c)(label,node.labelText,{style:node.labelStyle,useHtmlLabels}):label.node().appendChild((0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.c)(node.labelText,node.labelStyle,void 0,!0));let bbox=text.getBBox();if((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.m)((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.c)().flowchart.htmlLabels)){const div=text.children[0],dv=(0,d3__WEBPACK_IMPORTED_MODULE_3__.Ys)(text);bbox=div.getBoundingClientRect(),dv.attr("width",bbox.width),dv.attr("height",bbox.height)}const padding=0*node.padding,halfPadding=padding/2,width=node.width<=bbox.width+padding?bbox.width+padding:node.width;node.width<=bbox.width+padding?node.diff=(bbox.width-node.width)/2-node.padding/2:node.diff=-node.padding/2,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Data ",node,JSON.stringify(node)),rect2.attr("style",node.style).attr("rx",node.rx).attr("ry",node.ry).attr("x",node.x-width/2).attr("y",node.y-node.height/2-halfPadding).attr("width",width).attr("height",node.height+padding),useHtmlLabels?label.attr("transform","translate("+(node.x-bbox.width/2)+", "+(node.y-node.height/2)+")"):label.attr("transform","translate("+node.x+", "+(node.y-node.height/2)+")");const rectBox=rect2.node().getBBox();return node.width=rectBox.width,node.height=rectBox.height,node.intersect=function(point){return(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.i)(node,point)},shapeSvg},roundedWithTitle:(parent,node)=>{const shapeSvg=parent.insert("g").attr("class",node.classes).attr("id",node.id),rect2=shapeSvg.insert("rect",":first-child"),label=shapeSvg.insert("g").attr("class","cluster-label"),innerRect=shapeSvg.append("rect"),text=label.node().appendChild((0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.c)(node.labelText,node.labelStyle,void 0,!0));let bbox=text.getBBox();if((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.m)((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.c)().flowchart.htmlLabels)){const div=text.children[0],dv=(0,d3__WEBPACK_IMPORTED_MODULE_3__.Ys)(text);bbox=div.getBoundingClientRect(),dv.attr("width",bbox.width),dv.attr("height",bbox.height)}bbox=text.getBBox();const padding=0*node.padding,halfPadding=padding/2,width=node.width<=bbox.width+node.padding?bbox.width+node.padding:node.width;node.width<=bbox.width+node.padding?node.diff=(bbox.width+0*node.padding-node.width)/2:node.diff=-node.padding/2,rect2.attr("class","outer").attr("x",node.x-width/2-halfPadding).attr("y",node.y-node.height/2-halfPadding).attr("width",width+padding).attr("height",node.height+padding),innerRect.attr("class","inner").attr("x",node.x-width/2-halfPadding).attr("y",node.y-node.height/2-halfPadding+bbox.height-1).attr("width",width+padding).attr("height",node.height+padding-bbox.height-3),label.attr("transform","translate("+(node.x-bbox.width/2)+", "+(node.y-node.height/2-node.padding/3+((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.m)((0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.c)().flowchart.htmlLabels)?5:3))+")");const rectBox=rect2.node().getBBox();return node.height=rectBox.height,node.intersect=function(point){return(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.i)(node,point)},shapeSvg},noteGroup:(parent,node)=>{const shapeSvg=parent.insert("g").attr("class","note-cluster").attr("id",node.id),rect2=shapeSvg.insert("rect",":first-child"),padding=0*node.padding,halfPadding=padding/2;rect2.attr("rx",node.rx).attr("ry",node.ry).attr("x",node.x-node.width/2-halfPadding).attr("y",node.y-node.height/2-halfPadding).attr("width",node.width+padding).attr("height",node.height+padding).attr("fill","none");const rectBox=rect2.node().getBBox();return node.width=rectBox.width,node.height=rectBox.height,node.intersect=function(point){return(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.i)(node,point)},shapeSvg},divider:(parent,node)=>{const shapeSvg=parent.insert("g").attr("class",node.classes).attr("id",node.id),rect2=shapeSvg.insert("rect",":first-child"),padding=0*node.padding,halfPadding=padding/2;rect2.attr("class","divider").attr("x",node.x-node.width/2-halfPadding).attr("y",node.y-node.height/2).attr("width",node.width+padding).attr("height",node.height+padding);const rectBox=rect2.node().getBBox();return node.width=rectBox.width,node.height=rectBox.height,node.diff=-node.padding/2,node.intersect=function(point){return(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.i)(node,point)},shapeSvg}};let clusterElems={};const recursiveRender=async(_elem,graph,diagramtype,id,parentCluster)=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph in recursive render: XXX",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph),parentCluster);const dir=graph.graph().rankdir;_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Dir in recursive render - dir:",dir);const elem=_elem.insert("g").attr("class","root");graph.nodes()?_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Recursive render XXX",graph.nodes()):_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("No nodes found for",graph),graph.edges().length>0&&_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Recursive edges",graph.edge(graph.edges()[0]));const clusters=elem.insert("g").attr("class","clusters"),edgePaths=elem.insert("g").attr("class","edgePaths"),edgeLabels=elem.insert("g").attr("class","edgeLabels"),nodes=elem.insert("g").attr("class","nodes");await Promise.all(graph.nodes().map((async function(v){const node=graph.node(v);if(void 0!==parentCluster){const data=JSON.parse(JSON.stringify(parentCluster.clusterData));_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Setting data for cluster XXX (",v,") ",data,parentCluster),graph.setNode(parentCluster.id,data),graph.parent(v)||(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Setting parent",v,parentCluster.id),graph.setParent(v,parentCluster.id,data))}if(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("(Insert) Node XXX"+v+": "+JSON.stringify(graph.node(v))),node&&node.clusterNode){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster identified",v,node.width,graph.node(v));const o=await recursiveRender(nodes,node.graph,diagramtype,id,graph.node(v)),newEl=o.elem;(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.u)(node,newEl),node.diff=o.diff||0,_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node bounds (abc123)",v,node,node.width,node.x,node.y),(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.s)(newEl,node),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Recursive render complete ",newEl,node)}else graph.children(v).length>0?(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Cluster - the non recursive path XXX",v,node.id,node,graph),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info(findNonClusterChild(node.id,graph)),clusterDb[node.id]={id:findNonClusterChild(node.id,graph),node}):(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Node - the non recursive path",v,node.id,node),await(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.e)(nodes,graph.node(v),dir))}))),graph.edges().forEach((function(e){const edge=graph.edge(e.v,e.w,e.name);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(graph.edge(e))),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Fix",clusterDb,"ids:",e.v,e.w,"Translateing: ",clusterDb[e.v],clusterDb[e.w]),(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.f)(edgeLabels,edge)})),graph.edges().forEach((function(e){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################"),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("###                Layout                 ###"),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("#############################################"),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info(graph),(0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_0__.bK)(graph),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Graph after layout:",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph));let diff=0;return(graph=>sorter(graph,graph.children()))(graph).forEach((function(v){const node=graph.node(v);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Position "+v+": "+JSON.stringify(graph.node(v))),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Position "+v+": ("+node.x,","+node.y,") width: ",node.width," height: ",node.height),node&&node.clusterNode?(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.p)(node):graph.children(v).length>0?(((elem,node)=>{_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("Inserting cluster");const shape=node.shape||"rect";clusterElems[node.id]=shapes[shape](elem,node)})(clusters,node),clusterDb[node.id].node=node):(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.p)(node)})),graph.edges().forEach((function(e){const edge=graph.edge(e);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(edge),edge);const paths=(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.g)(edgePaths,e,edge,clusterDb,diagramtype,graph,id);(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.h)(edge,paths)})),graph.nodes().forEach((function(v){const n=graph.node(v);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.info(v,n.type,n.diff),"group"===n.type&&(diff=n.diff)})),{elem,diff}},render=async(elem,graph,markers,diagramtype,id)=>{(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.a)(elem,markers,diagramtype,id),(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.b)(),(0,_edges_f15a7e05_js__WEBPACK_IMPORTED_MODULE_6__.d)(),clusterElems={},descendants={},parents={},clusterDb={},_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph at first:",JSON.stringify(dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph))),((graph,depth)=>{!graph||depth>10?_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting out, no graph "):(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Opting in, graph "),graph.nodes().forEach((function(id){graph.children(id).length>0&&(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Cluster identified",id," Replacement id in edges: ",findNonClusterChild(id,graph)),descendants[id]=extractDescendants(id,graph),clusterDb[id]={id:findNonClusterChild(id,graph),clusterData:graph.node(id)})})),graph.nodes().forEach((function(id){const children=graph.children(id),edges=graph.edges();children.length>0?(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Cluster identified",id,descendants),edges.forEach((edge=>{edge.v!==id&&edge.w!==id&&isDescendant(edge.v,id)^isDescendant(edge.w,id)&&(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge: ",edge," leaves cluster ",id),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Decendants of XXX ",id,": ",descendants[id]),clusterDb[id].externalConnections=!0)}))):_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Not a cluster ",id,descendants)})),graph.edges().forEach((function(e){const edge=graph.edge(e);_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(graph.edge(e)));let v=e.v,w=e.w;if(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fix XXX",clusterDb,"ids:",e.v,e.w,"Translating: ",clusterDb[e.v]," --- ",clusterDb[e.w]),clusterDb[e.v]&&clusterDb[e.w]&&clusterDb[e.v]===clusterDb[e.w]){_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing link to self - removing XXX",e.v,e.w,e.name),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),v=getAnchorId(e.v),w=getAnchorId(e.w),graph.removeEdge(e.v,e.w,e.name);const specialId=e.w+"---"+e.v;graph.setNode(specialId,{domId:specialId,id:specialId,labelStyle:"",labelText:edge.label,padding:0,shape:"labelRect",style:""});const edge1=structuredClone(edge),edge2=structuredClone(edge);edge1.label="",edge1.arrowTypeEnd="none",edge2.label="",edge1.fromCluster=e.v,edge2.toCluster=e.v,graph.setEdge(v,specialId,edge1,e.name+"-cyclic-special"),graph.setEdge(specialId,w,edge2,e.name+"-cyclic-special")}else(clusterDb[e.v]||clusterDb[e.w])&&(_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),v=getAnchorId(e.v),w=getAnchorId(e.w),graph.removeEdge(e.v,e.w,e.name),v!==e.v&&(edge.fromCluster=e.v),w!==e.w&&(edge.toCluster=e.w),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Fix Replacing with XXX",v,w,e.name),graph.setEdge(v,w,edge,e.name))})),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Adjusted Graph",dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph)),extractor(graph,0),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.trace(clusterDb))})(graph),_mermaid_0d192ec3_js__WEBPACK_IMPORTED_MODULE_4__.l.warn("Graph after:",JSON.stringify(dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_1__.c(graph))),await recursiveRender(elem,graph,diagramtype,id)}}}]);