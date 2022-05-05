__NUXT_JSONP__("/cicd-2.0/chapter7", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{document:{slug:"chapter7",description:C,title:C,position:101,category:"持續交付2.0：實務導向的DevOps",menuTitle:"Chapter 07",toc:[{id:t,depth:q,text:t},{id:D,depth:q,text:E},{id:F,depth:m,text:G},{id:H,depth:m,text:I},{id:J,depth:m,text:K},{id:L,depth:q,text:M},{id:N,depth:m,text:O},{id:P,depth:m,text:Q},{id:R,depth:q,text:S},{id:T,depth:m,text:U},{id:V,depth:m,text:W},{id:X,depth:m,text:Y},{id:Z,depth:q,text:_},{id:$,depth:m,text:aa},{id:ab,depth:m,text:ac},{id:ad,depth:m,text:ae}],body:{type:"root",children:[{type:b,tag:r,props:{id:t},children:[{type:b,tag:f,props:{href:"#%E5%89%8D%E8%A8%80",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Deployment Pipeline為CI的核心，能完整呈現軟體交付的整個過程。從程式碼完成後的提交、建置、部署與測試到正式的發布，除了可以清楚知道整個歷程外，也可即時得知提交進度。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"那我們該如何根據團隊與不同產品去設計整個Pipeline?此章的重點就在談這件事情。"}]},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:a,value:"\n部署Pipeline受到軟體架構、Git Flow及團隊與產品不同而有所不同設計概念。\n"}]},{type:a,value:c},{type:b,tag:r,props:{id:D},children:[{type:b,tag:f,props:{href:"#71-%E7%B0%A1%E5%96%AE%E7%9A%84%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此節以實際例子來簡易OverView在Pipeline設計上會有那些環節與實際情境。書中例子以"},{type:b,tag:f,props:{href:"https:\u002F\u002Freurl.cc\u002FDydonj",rel:[y,z,A],target:B},children:[{type:a,value:"Curise"}]},{type:a,value:"為範例，他就像今日我們很常聽到Jenkis，是一個以Java Base開發的持續整合工具。其程式碼高達5萬行，而自動化單元測試及整合測試Case就多達2350個，端對端測試為140個，在架構也算蠻龐大的軟體系統。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"但他在2010年就停止維護了，有興趣了解可以到他的"},{type:b,tag:f,props:{href:"https:\u002F\u002Freurl.cc\u002Fank4v9",rel:[y,z,A],target:B},children:[{type:a,value:"官方網站"}]},{type:a,value:"。Curise在2010年停止維護後更名為GoCD，並走Open Source開發。並將Source Code放置"},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fgocd\u002Fgocd",rel:[y,z,A],target:B},children:[{type:a,value:"Github"}]},{type:a,value:"。"}]},{type:a,value:c},{type:b,tag:n,props:{id:F},children:[{type:b,tag:f,props:{href:"#711-gocd%E7%B0%A1%E5%96%AE%E7%9A%84%E7%94%A2%E5%93%81%E7%A0%94%E7%99%BC%E6%B5%81%E7%A8%8B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GoCD算典型的持續整合代理伺服器架構，其架構如下，GoCD Server提供使用者UI及Pipeline腳本控制及指派工作，讓Agent去執行Pipeline過程中需要執行的Command(此處簡單帶過)。另外一提，他使用的版控工具為Mercurial不是一般主流的Git。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"001",src:"images\u002Fcicd-2.0\u002F07\u002F001.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"維護此產品的團隊人數約為12人，產品的交付其中與迭帶週期為一周。在這麼快速的迭帶週期，團隊也使用CICD，在每個迭帶結束後，用新版本替換掉目前團隊在使用的舊版本，並在每兩個迭帶後將試用版本部署到公司內部的公用伺服器，若公司內部試用版本使用到一個品質檢測標準，一周後再將版本交給企業試用。其週期如下圖所示，"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"白正方形:單周Blood版本(團隊)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"灰正方形:雙周Alpha版本(公司)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"白圈:雙周Beta版本(外部企業)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"大圓圈:全球發布"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{align:u},children:[{type:a,value:v},{type:b,tag:l,props:{src:"images\u002Fcicd-2.0\u002F07\u002F002.png",width:w},children:[]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:n,props:{id:H},children:[{type:b,tag:f,props:{href:"#712-%E5%88%9D%E5%A7%8Bpipeline%E8%A8%AD%E8%A8%88",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GoCD的Pipeline設計是Base on六步提交法理論，六步如下"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第一步: Clone成功版本至本地端"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第二步: 修改程式碼"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第三步: 本地端Build && Test"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第四步: Pull Merge其他人程式碼再跑一次Build && Test"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第五步: 提交"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"第六步: 進Pipeline"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{align:u},children:[{type:a,value:v},{type:b,tag:l,props:{src:"images\u002Fcicd-2.0\u002F07\u002F003.png",width:w},children:[]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"感覺六部提交法是針對新的小碼農制定的口訣，避免小碼農Clone錯誤的程式碼或是沒有做好Build Test就提交程式碼，會Focus在個人建置部分。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我們來看GoCD的Pipeline設計如下圖，整個提交整合與部署分為八個Stage站別，有手出現的Icon代表人為去介入"}]},{type:a,value:c},{type:b,tag:d,props:{align:u},children:[{type:a,value:v},{type:b,tag:l,props:{src:"images\u002Fcicd-2.0\u002F07\u002F004.png",width:w},children:[]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"基本上每個站別都只有一類任務類型，"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"1.提交建置:Build 與 單元集成測試"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"2.次級建置:End To End 測試(Windows && Linux)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"3.將打包好的檔案部署到UAT環境"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"4.測試人員驗證完後Tag驗收通過，並對Pipeline點擊繼續"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"5.做自動化性能測試(此處沒說明做什麼性能測試)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"6.將Alpha版本部署到公司內部伺服器給團隊試用"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"7.試用OK後發布Beta版本給外部企業試用"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"8.外部企業試用試用完成後正式發布"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:a,value:"\nUAT，(User Acceptance Test),使用者接受度測試 即驗收測試，主要是用來作為客戶體驗的環境。\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"基本上這Pipeline設計大部分專案情境可能都會經過這些步驟，只是也許後面部署與測試順序不一定會完全相同。例如有些企業會覺得UAT測試完後其實就可以上Production，但GoCD為了嚴謹在部署測試上又多了好幾個站別，確保Product能完全運行順利。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"另外值得一提的，在這個設計中，GoCD在單元集成測試的時間非常長，有五個集成測試，基本上每個集成測試要花15min，而第二站別的次級建置端對端測試也多達140個測試項目，需要最長時間為30min...."}]},{type:a,value:c},{type:b,tag:n,props:{id:J},children:[{type:b,tag:f,props:{href:"#713-pipeline%E7%8B%80%E6%85%8B%E8%A7%A3%E6%9E%90",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"管線運型實際狀況如下，可看到在建置編號12版本，在UAT部署就停了下來。也許這建置版本並沒有新功能，所以可以在這階段就停止。而建置編號13在次級建置跳過，有可能因為12還沒完成。至於此處是手動按停止還是自動停止就不太清楚。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不過此節要表達的是，再多Job管線運行上，會根據不同狀況管線過的Stage狀況也會不太一樣。"}]},{type:a,value:c},{type:b,tag:d,props:{align:u},children:[{type:a,value:v},{type:b,tag:l,props:{src:"images\u002Fcicd-2.0\u002F07\u002F005.png",width:w},children:[]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:r,props:{id:L},children:[{type:b,tag:f,props:{href:"#72-pipeline%E7%9A%84%E8%A8%AD%E8%A8%88%E8%88%87%E4%BD%BF%E7%94%A8",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在介紹完GoCD Pipeline的實際使用狀況，大體上應該會曉得基本Pipeline會有什麼工作需要運行。那我們該如何透過設計去優雅的使用Pipeline呢?"}]},{type:a,value:c},{type:b,tag:n,props:{id:N},children:[{type:b,tag:f,props:{href:"#721-pipeline%E7%9A%84%E8%A8%AD%E8%A8%88%E5%8E%9F%E5%89%87",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"書中提到有5個觀念去設計Pipeline"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"一次建置，多次使用"}]},{type:a,value:"。Pipeline上的任務要產生部署使用的檔案，盡量在前面的站別就一次建置完成，並可直接讓後面的站別做使用。盡量不要在後面在別再做重複性建置。另外如果後續的站屬如果要使用此編制檔案，也必須此部署檔案來源是與上流站別是同一份。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"與業務邏輯松耦合"}]},{type:a,value:"。簡單來說在就是不要為了方便，將一些部署所需使用的腳本或資料放在Pipeline Server上，盡量與Pipeline Server不要有編譯耦合的設計。相反，若有相依檔案或腳本，我們必須存放在存取庫中，照樣就可以輕鬆對這些腳本設計做修正。簡單來說，對於Pipeline，他就像是調度、執行與紀錄者，他只需要知道整個調度流程，不需要知道如何建置與部署軟件需要自己提供哪些東西。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"並行化原則"}]},{type:a,value:"。如果有五個自動化測試任務，我們也可以設計並行Pipeline同步跑這五個測試任務，並即時提供結果訊息，從而修正問題。若使用併行，整體等待回應的時間就能大幅收短。就像前面提到GoCD有五個測試集成，若使用並行化原則就能大幅縮短測試時間。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"快速回應結果"}]},{type:a,value:"。如果資源較貧乏(例如Runner規格特爛)，在Stage的設計，我們可以將依些運行較快的自動化驗證優先做執行，較慢與消耗資源較多的放在後面執行。感覺這邊得意思 花較長時間的測試，就放在越接近正式上線前做，來縮短前面開發測試時間。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"重要的回應結果優先"}]},{type:a,value:"。呼應第四點，雖然為了達到快速回應結果將一些較快的測試放在前面做，但依然要以重要優先權高的為主。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:P},children:[{type:b,tag:f,props:{href:"#722-%E5%9C%98%E9%9A%8A%E7%B4%80%E5%BE%8B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:o,props:{id:"1立即暫停原則"},children:[{type:b,tag:f,props:{href:"#1%E7%AB%8B%E5%8D%B3%E6%9A%AB%E5%81%9C%E5%8E%9F%E5%89%87",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"1.立即暫停原則"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pipeline一出問題，團隊需要有人立即去處理，而不是放任他不管。再問題修復前，禁止任何人提交新的程式碼。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"2安全審核原則"},children:[{type:b,tag:f,props:{href:"#2%E5%AE%89%E5%85%A8%E5%AF%A9%E6%A0%B8%E5%8E%9F%E5%89%87",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"2.安全審核原則"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"所有代碼與軟件包都需要有偷過板控及審核完畢才可使用。"}]},{type:a,value:c},{type:b,tag:r,props:{id:R},children:[{type:b,tag:f,props:{href:"#73-pipeline%E5%B9%B3%E5%8F%B0%E7%9A%84%E7%B5%84%E6%88%90",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"這章節主要述說Pipeline的主要組成區塊"}]},{type:a,value:c},{type:b,tag:n,props:{id:T},children:[{type:b,tag:f,props:{href:"#731-%E5%B7%A5%E5%85%B7%E9%8F%88%E6%95%B4%E9%AB%94%E6%9E%B6%E6%A7%8B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"書中提出的圖有點難去了解，在這我拿一張以Github結合Jenkis的架構圖去輔佐解說(Jenkis那張圖先不管架構Solution是否為最好)。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"006",src:"images\u002Fcicd-2.0\u002F07\u002F006.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pipeline整體架構主要分成、唯一信受源(程式碼與打包物存取庫)、調度及展示(調度器)以及基礎支撐服務(測試、部署等實際執行環境..)"}]},{type:a,value:c},{type:b,tag:o,props:{id:"1唯一信受源"},children:[{type:b,tag:f,props:{href:"#1%E5%94%AF%E4%B8%80%E4%BF%A1%E5%8F%97%E6%BA%90",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"1.唯一信受源"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在Pipeline過程中，團隊角色若對任何訊息產生質疑時，要做追溯都應該要能追回到存取庫裡的產出物(要部署檔案)，而在存取庫中的打包檔案都可以找到對應程式碼及他相依的類別庫檔案，或是能找到下載的URL Source。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"2調度及展示pipeline"},children:[{type:b,tag:f,props:{href:"#2%E8%AA%BF%E5%BA%A6%E5%8F%8A%E5%B1%95%E7%A4%BApipeline",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"2.調度及展示(Pipeline)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"能接受不同的服務基礎平台，且具有調度不同任務，完成整個交付流程的功能。並此能展示整個過程的歷史訊息。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"3基礎支撐服務"},children:[{type:b,tag:f,props:{href:"#3%E5%9F%BA%E7%A4%8E%E6%94%AF%E6%92%90%E6%9C%8D%E5%8B%99",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"3.基礎支撐服務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一間較大的公司具有相對應的建置、測試及部署的服務。規模較不大的通常前兩個通常就直接在一個Runner Execute直接做掉。那如果是前者，在Pipeline設計上就要考慮如何去與這些基礎支撐服務去連通與協作，讓整體Pipeline過程中達到最大的效益性。"}]},{type:a,value:c},{type:b,tag:n,props:{id:V},children:[{type:b,tag:f,props:{href:"#732-%E5%B9%B3%E5%8F%B0%E6%87%89%E5%85%B7%E6%9C%89%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%83%BD%E5%8A%9B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pipeline事團隊多角色的統籌協作系統，因此關注的是軟體在Pipeline的流動效率，包含部署與上線，過程能精準展現個環節的狀態與訊息，並能在不增加團隊負擔情況下自動收集各環節產生的數據。例如，衡量某一功能的開發週期。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此章節提到重點就下述兩點，"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"1.追溯能力"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"2.重新建置能力"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"針對1不多說，簡單來說就是對於事件能查詢他所有的歷程。對於2，只要存取庫程式碼依舊存在，就算遇到版本出問題，依舊能再次修改重新做自動部署。又或是自動化失敗因為對應服務環境出問題，在對應環境Recovery後，能再次重新運行測試。"}]},{type:a,value:c},{type:b,tag:n,props:{id:X},children:[{type:b,tag:f,props:{href:"#733-%E5%B7%A5%E5%85%B7%E9%8F%88%E5%BB%BA%E8%A8%AD%E7%AD%96%E7%95%A5",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"上述7.3.1圖中提到的平台架構，可看出他是由不同的工具與子系統組成。因此我們可以根據公司的習慣與策略去客製設計。例如GoCD團隊因為在自動化測試量較龐大，因此就自行開發一個自動化測試分組插建，由此插件自動將所有測試分配到不同任務哩，並將這些任務分配到多個測試環境中執行。但對更大型的公司，其環境會更加複雜，其各產品組件之間的關聯關係也會更加龐大複雜。為了發揮持續交付的威力，上述提到的各類支撐服務雲端化也成為必要選項。例如AWS、Facebook與Google都具有自己的DevOps平台工具鏈，甚至將其中一部分工具開放給Open Source。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"那此服務系統間個詳細的關係是什麼? 7.4章節會述說這件事情。"}]},{type:a,value:c},{type:b,tag:r,props:{id:Z},children:[{type:b,tag:f,props:{href:"#74-%E5%9F%BA%E7%A4%8E%E6%94%AF%E6%92%90%E6%9C%8D%E5%8B%99%E9%9B%B2%E7%AB%AF%E5%8C%96",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大多大公司服務端程序部署頻率都非常快，幾乎都又自己的雲化支撐服務，如下表"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"007",src:"images\u002Fcicd-2.0\u002F07\u002F007.png"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:$},children:[{type:b,tag:f,props:{href:"#741-%E5%9F%BA%E7%A4%8E%E6%94%AF%E6%92%90%E6%9C%8D%E5%8B%99%E5%8D%94%E9%81%8E%E9%81%8E%E7%A8%8B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此章節為稍微大致講解整個管線與基礎建置服務互動的過程，大分類上分三個步驟來看，"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"008",src:"images\u002Fcicd-2.0\u002F07\u002F008.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:"第0步環境準備yml設定"},children:[{type:b,tag:f,props:{href:"#%E7%AC%AC0%E6%AD%A5%E7%92%B0%E5%A2%83%E6%BA%96%E5%82%99yml%E8%A8%AD%E5%AE%9A",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"第0步:環境準備(yml設定)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"這部白話一點就是整體部署有哪些設定及有哪些基礎服務建設，針對Stage任務對應相關設定指派相對應基礎建設服務準備。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"第1步提交建置建置測試"},children:[{type:b,tag:f,props:{href:"#%E7%AC%AC1%E6%AD%A5%E6%8F%90%E4%BA%A4%E5%BB%BA%E7%BD%AE%E5%BB%BA%E7%BD%AE%E6%B8%AC%E8%A9%A6",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"第1步:提交建置(建置，測試)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將Source Code交至相對應服務做健置與測試，建置管理服務會將代碼從程式存取庫中提出，然後在建置環境建置打包後，放入成品庫。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"接著部署管理服務根據Pipeline定義將編譯好的成品，放到測試環境測試。如果測試需要一些比較特別的設定，則同時從部署配置讀取相關配置，成功後就開始執行Pipeline的測試任務。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"第2步次級建置部署測試"},children:[{type:b,tag:f,props:{href:"#%E7%AC%AC2%E6%AD%A5%E6%AC%A1%E7%B4%9A%E5%BB%BA%E7%BD%AE%E9%83%A8%E7%BD%B2%E6%B8%AC%E8%A9%A6",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"第2步:次級建置(部署，測試)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"當測試完成後，部署管理服務會再從成品庫中拿去成品，並從部署配置讀取UAT相關部署訊息，將兩者結合，部署到UAT環境進行端對端測試。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"第3步部署生產環境"},children:[{type:b,tag:f,props:{href:"#%E7%AC%AC3%E6%AD%A5%E9%83%A8%E7%BD%B2%E7%94%9F%E7%94%A2%E7%92%B0%E5%A2%83",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"第3步:部署生產環境"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"當次級建置UAT測試完成後，部署管理服務會再次從成品庫取出成品，並讀取配置訊息，部署到正式環境。"}]},{type:a,value:c},{type:b,tag:n,props:{id:ab},children:[{type:b,tag:f,props:{href:"#742-%E5%BB%BA%E7%BD%AE%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8B%99",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"構成分三個區塊"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ag}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ai}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"009",src:"images\u002Fcicd-2.0\u002F07\u002F009.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每個區塊服務都有柱列緩衝，任務管理將任務交給調度器後，調度器會根據一定的調度算法選擇建置任務將其發送相對應的執行器編譯。例如c#代碼若為Net Framework則指派到Windows環境下編譯，C++則指派到Linux下環境編譯。而集群管理器則是管理這些執行器的建立與狀態管理(繁忙、空閒、失去連線..)。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"執行器為建置任務的代理，集群中可以有多個執行器，每個執行器會根據收到訊息對應的存取庫URI檢出代碼並根據要求編制建置任務。建置完成後會將指定產物(部署需用檔案)放到成品庫中。並向Pipeline回報執行結果。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"另外可以看到圖中左邊Request輸入點有個人頭，代表這架構也允許工程師在本地編寫期間就可以直接使用此服務。"}]},{type:a,value:c},{type:b,tag:n,props:{id:ad},children:[{type:b,tag:f,props:{href:"#743-%E8%87%AA%E5%8B%95%E5%8C%96%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8B%99",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"構成分三(四)個區塊"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ag}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ai}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"測試健康管理"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"010",src:"images\u002Fcicd-2.0\u002F07\u002F010.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"針對任務管理、調度與集群管理猶如7.4.2所說，大致上是一樣的意思，只是編制任務變成測試任務。值得一提的是測試健康管理。當測試在不同節點或資源條件下，因為失敗重複執行太多次(書中寫1000次)。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此時測試健康管理器就會將不穩定的Case拉到不穩定池並通知團隊做處理。這邊健康管理器英文對應一時查不太到....所以如何實作也不太清楚。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"744-軟件部署管理服務"},children:[{type:b,tag:f,props:{href:"#744-%E8%BB%9F%E4%BB%B6%E9%83%A8%E7%BD%B2%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8B%99",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.4.4 軟件部署管理服務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"雖然在Pipeline過程中的測試都沒問題，但也有可能到了實際正式環境會出錯。原因在於測試環境與正式環境還是會有一定的差異性。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"書中舉過內很多大型企業的生產環境用的J2EE應用服務器都是商業軟件，但因為過於笨重，所以用語法檢查就不嚴格的Tomcat。此時如果部署到企業的正式生產環境，就會產生有些頁面因為Html標籤不匹配而發生錯誤。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"好，上述講一講不是下圖重點..下圖要表達的是，因為為了協調運維部門與產品部門的合作。之間的接口建議有個正式產品庫及上線單。此時運維部門就可以根據上線單，從正式產品庫拉取相對應的產品至正式(生產)環境步數。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"011",src:"images\u002Fcicd-2.0\u002F07\u002F011.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:"745-基礎環境管理服務"},children:[{type:b,tag:f,props:{href:"#745-%E5%9F%BA%E7%A4%8E%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8B%99",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.4.5 基礎環境管理服務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為建置、測試、部署管理提供環境準備與監控服務。能接受這三種環境的請求為期準備相對應的環境。隨著Docker技術成熟，配置基礎環境慢慢以Docker Image形式，需要時直接啟動，並提供服務。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"012",src:"images\u002Fcicd-2.0\u002F07\u002F012.png"},children:[]}]}]},dir:"\u002Fzh\u002Fcicd-2.0",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter7",extension:".md",createdAt:"2022-05-05T11:11:38.805Z",updatedAt:"2022-05-05T11:11:38.809Z",to:"\u002Fcicd-2.0\u002Fchapter7"},prev:{title:"Chapter 05 持續交付的軟體系統架構",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter5",to:"\u002Fcicd-2.0\u002Fchapter5"},next:{title:"Chapter 07 部署流水線原則與工具設計 (7-5 ~ 7-7)",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter7_5",to:"\u002Fcicd-2.0\u002Fchapter7_5"}}],fetch:{},mutations:[]}}("text","element","\n","p","li","a","true",-1,"span","icon","icon-link","img",3,"h3","h4","ul",2,"h2","strong","前言","center","\n  ","100%"," \n","nofollow","noopener","noreferrer","_blank","Chapter 07 部署流水線原則與工具設計","71-簡單的部署流水線","7.1 簡單的部署流水線","711-gocd簡單的產品研發流程","7.1.1 GoCD簡單的產品研發流程","712-初始pipeline設計","7.1.2 初始Pipeline設計","713-pipeline狀態解析","7.1.3 Pipeline狀態解析","72-pipeline的設計與使用","7.2 Pipeline的設計與使用","721-pipeline的設計原則","7.2.1 Pipeline的設計原則","722-團隊紀律","7.2.2 團隊紀律","73-pipeline平台的組成","7.3 Pipeline平台的組成","731-工具鏈整體架構","7.3.1 工具鏈整體架構","732-平台應具有的基本能力","7.3.2 平台應具有的基本能力","733-工具鏈建設策略","7.3.3 工具鏈建設策略","74-基礎支撐服務雲端化","7.4 基礎支撐服務雲端化","741-基礎支撐服務協過過程","7.4.1 基礎支撐服務協過過程","742-建置管理服務","7.4.2 建置管理服務","743-自動化管理服務","7.4.3 自動化管理服務","alert","任務管理","調度","執行器")));