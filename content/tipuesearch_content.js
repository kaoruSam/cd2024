var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://kaorusam.github.io/cd2024 \n 網誌:\xa0 https://kaorusam.github.io/cd2024/blog \n 簡報:  https://kaorusam.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/kaoruSam/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n", 'tags': '', 'url': 'Brython.html'}, {'title': '日記', 'text': 'w4 我前幾次好像忘記save，前幾個禮拜的都不見了，只好從w4開始，希望老師不要介意。 \n w5 這週把翻譯的東西做完了，這學期會努力更上進度的。 \n \n', 'tags': '', 'url': '日記.html'}, {'title': '翻譯作業', 'text': '\n %開頭= \\documentclass[12pt,a4paper]{report} %紙張設定 \\usepackage{xeCJK}%中文字體模組 \\usepackage{graphicx}%插入圖片套件 \\usepackage{tocbibind}%自動添加目錄和參考文獻到目錄中套件 \\usepackage{hyperref}%生成超連結模組 \n % 在 Windows 可以使用系統所安裝的字型 \\setCJKmainfont{標楷體}%設定中文字體 \\newfontfamily\\sectionef{Times New Roman}%設定英文字體 \n \\begin{document} \\begin{center}%文字置中 \\large\\textbf{3. CHAPTER}%字體加黑加粗 \\large\\textbf{第3章}%字體加黑加粗 \\end{center}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{THE STATE OF THE ART AND THE INTEGRATION OF  PLM AND MES}%字體加黑加粗 \\large\\textbf{最新技術和PLM與MES的整合}%字體加黑加粗 \\end{center}\\\\ \n Unfortunately, there are not many published studiesin the matter of integration between PLM  and MES systems. But there seems to be a consensus in the most probable effects of said  integration. Those being synchronization and tighter tolerances.\\\\ \n 不幸的是，關於PLM和MES系統整合的研究並不多。但是似乎對於這種整合可能產生的影響有一致的看法。其中最明顯的是同步和更嚴格的容忍度。\\\\ \n As explained by D’Antonio et al. (2015), which focus on a case study involving the  manufacturing of precision components for aeronautical applications, the first advantage  expected by the deployment of the monitoring and control system is product quality  improvement: sensors allow to detect, measure and monitor variables, events and situations  that affect process performance or product quality.\\\\ \n 正如D\'Antonio等人（2015）所解釋的那樣，他們聚焦於一個涉及航空應用的精密零件製造的案例研究，監控和控制系統部署帶來的第一個預期優勢是產品質量的改善：傳感器能夠檢測、測量和監控影響過程性能或產品質量的變量、事件和情況。\\\\ \n One of the central problems regarding integrating PLM with any other system revolves  around the ownership of information. A possible solution relies on database integration as  well as the use of middleware between systems. As is written in Saaksvuori and Immonen,  (2008). A reasonable objective is that information should always be updated in one place.  Other systems can read information directly from the PLM databases, and if necessary, the  required information can be replicated on the databases of other system, as depicted in Figure  7. Although it points this out mainly from the perspective of PLM-ERP integration, it is still  very valuable from the perspective of PLM-MES integration because it is an example of how  the better operation can be expected by working around systems in which files of different  nature are loaded into a centralized PLM-ERP system.\\\\ \n 關於將PLM與其他系統整合的核心問題之一是信息的所有權。一種可能的解決方案是依賴數據庫集成以及在系統之間使用中間件。正如Saaksvuori和Immonen（2008）所述，一個合理的目標是信息應該始終在一個地方更新。其他系統可以直接從PLM數據庫中讀取信息，並且如果必要，所需信息可以在其他系統的數據庫中複製，如圖7所示。儘管它主要是從PLM-ERP整合的角度指出這一點，但從PLM-MES整合的角度來看，它仍然非常有價值，因為它是一個示範如何通過繞過將不同類型的文件加載到集中式PLM-ERP系統中的系統來期望更好地運行。\\\\ \n %加入p14.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p14.png}%插入在image資料夾下的p14.png  \\label{fig:p14} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 7 Diagram of PLM integration (Saaksvuori and Immonen, 2008)}%字體加黑加粗 \\large\\textbf{圖7：PLM整合示意圖（出自Saaksvuori和Immonen，2008）}%字體加黑加粗 \\end{center}\\\\ \n The middleware would therefore be a software framework to organize and connect all the  information given to the system database in a user-friendly way. This sort of application is  also referred to as integration application and, as specified by Stark (2015), these applications\\\\ \n 因此，中間件將是一個軟件框架，以用戶友好的方式組織和連接系統數據庫中提供的所有信息。這種應用程序也被稱為集成應用程序，正如Stark（2015）所指出的那樣，這些應用程序\\\\ \n enable exchange of product information between PLM applications (for example, between a  CAD application and a CAE application). They also enable exchange of product information  between PLM applications and other enterprise applications such as ERP and CRM.\\\\ \n 使產品信息在PLM應用程序之間進行交換（例如，在CAD應用程序和CAE應用程序之間）。它們還使產品信息在PLM應用程序和其他企業應用程序（如ERP和CRM）之間進行交換。\\\\ \n In a very relevant fashion, this middleware line of thinking is expanded upon by (Ben  Khedher et al., 2011). In their work regarding different systems architectures for the  implementation of an integrated MES+PLM they describe the use of a mediation system in  web service architecture. As depicted in Figure 8, the proposed architecture uses data  exchange based on internet technologies to help companies, especially expanded companies,  to take advantage of opportunities generated by the Web Services. The concept of "web  service" means an application (program or software system) which is designed to support  interoperable machine-to-machine interactions over a network, according to the definition of  W3C (Ben Khedher et al., 2011).\\\\ \n 在一個非常相關的情境下，這種中介軟件的思維方式由（Ben Khedher等，2011年）進一步擴展。在他們關於實現集成MES+PLM的不同系統架構的工作中，他們描述了在Web服務架構中使用調解系統。如圖8所示，所提出的架構使用基於互聯網技術的數據交換，幫助企業，特別是擴展型企業，利用Web服務產生的機遇。 "Web服務" 的概念意味著根據W3C的定義，設計為在網絡上支持可互操作的機器對機器交互的應用程序（程序或軟件系統）（Ben Khedher等，2011）。\\\\ \n %加入p15.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p15.png}%插入在image資料夾下的p15.png  \\label{fig:p15} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 8 Diagram of Web service architecture (Adapted from Ben Khedher et al., 2011)}%字體加黑加粗 \\large\\textbf{圖8 Web服務架構圖（改編自Ben Khedher等人，2011）}%字體加黑加粗 \\end{center}\\\\ \n The reason this expansion is so relevant from the perspective of this work is that the Odoo software works in a similar fashion through a similar web service architecture. In theory the Odoo software could act as the middleware working through the local network or hosted in  the cloud and enacting the layer of integration that was previously mentioned. \\\\ \n 這個擴展的相關性之所以如此重要，是因為Odoo軟體通過類似的Web服務架構以類似的方式運作。理論上，Odoo軟體可以通過本地網路或託管在雲端，作為中介軟體發揮作用，實現之前提到的整合層。\\\\ \n \\large\\textbf{3.1. How would this integration look like in practical terms}%字體加黑加粗 \\large\\textbf{3.1 在實際情況下，這種整合會是怎樣的呢？}%字體加黑加粗 \n As mentioned in CHAPTER 2 the main idea of PLM is to manage change in all processes  related to the product, and it does so mainly through the use of virtualization. The word  virtualization here denotes representation of item of the real world to the digital space and,  as one can imagine, there are several levels of abstraction through which a real object or  process can be represented. As consequence there is no exact consensus regarding PLM of  how deep and/or detailed the virtual representation must be to serve its purpose.\\\\ \n 如第2章所述，PLM的主要理念是管理與產品相關的所有過程中的變化，它主要通過虛擬化來實現。在這裡，虛擬化一詞表示將現實世界的項目表示為數字空間中的項目，正如人們可以想像的那樣，有幾個抽象層次可以用來表示現實物體或過程。因此，關於PLM的虛擬表示應該有多深入和/或詳細，以達到其目的，並不存在確切的共識。\\\\ \n In an ideal world that would be the lowest form of abstraction which, essentially, would  come down to a digital twin as explained in the CHAPTER 2. This is a ‘1 to 1’ digital  representation of every aspect of the production cycle where every part involved would have  a digital representation that not only carry the physical characteristics of the item but also all  its information produced over time. To this end, as explained in CHAPTER 2, MES takes a  fundamental role in obtaining the real time information required for the DT even be possible.\\\\ \n 在理想的情況下，這將是最低形式的抽象，基本上可以歸結為如第2章所解釋的數字孿生。這是生產周期的每個方面的“一對一”數字表示，參與其中的每個部分都將具有數字表示，該表示不僅具有物品的物理特性，還具有隨時間產生的所有信息。為此，正如第2章所解釋的那樣，MES在獲取DT所需的實時信息方面起著根本作用，甚至可能是可能的。\\\\ \n For instance, a CNC machine would have a digital 3D model for simulation as well as a  fully integrated list of all the pieces it produces, data regarding its current level of production,  the current wear of its mechanical pieces, all other machines it relates to, history of all the  alterations and improvements by which it was affected and many other aspects, all well  packaged in an intuitive graphical user interface (GUI) that allows for maximum interaction.\\\\ \n 例如，一台CNC機器將具有用於模擬的數字3D模型，以及所有其生產的零件的完全集成列表，有關其當前生產水平的數據，機械部件的當前磨損情況，以及它相關的所有其他機器，所有對其進行的所有更改和改進的歷史記錄以及許多其他方面的數據，全部以直觀的圖形用戶界面（GUI）打包，允許最大程度的互動。\\\\ \n Those are:\\\\ \n 這些是：\\\\ \n ▪ The means of virtualization – What sort of information is used to build the virtual  items. This includes the metadata and files that are directly attached to the item. In an  ideal fashion this would contain all possible information available about the item. \\\\ \n ▪ 擬化手段 - 用於構建虛擬項目的信息類型。這包括直接附加到項目的元數據和文件。在理想情況下，這將包含有關項目的所有可能信息。\\\\ \n ▪ The means of data input - How this information is being loaded and organized. Ideally this information would be loaded into the system as automatically as possible, be it  by means of MES during quality control or through the use of automated input tools  like bar code scanners.\\\\ \n ▪數據輸入手段 - 這些信息是如何被加載和組織的。理想情況下，這些信息應該盡可能地自動加載到系統中，無論是通過質量控制時MES的手段，還是通過條碼掃描器等自動輸入工具的使用。\\\\ \n ▪ The means of access – How this information is presented to the users. Although more  subjective than the previous aspects this is incredibly important to the way the system  is interacted with. How intuitive it is the information availability plays right into the  core strengths of PLM. Afterall, everything would be for nothing (even if all else  would be perfect) if the only way to interact with the system were a command line  interface that would make difficult for the end users to access the information. \\\\ \n ▪存取手段 - 這些信息如何呈現給用戶。雖然比前面的方面更主觀，但這對系統的互動方式非常重要。信息可用性的直觀程度恰好體現了PLM的核心優勢。畢竟，如果與系統互動的唯一方式是一個使最終用戶難以訪問信息的命令行界面，那麼一切都將化為烏有（即使其他一切都完美）。\\\\ \n ▪ The means of integration - How items and their contained information can interact  and benefit from one another, i.e., the integration with other systems and key  softwares. E.g., if an item has access to a cad file, there should be no need to fill in  the metadata fields by hand. Hoe items can automatically affect other items also plays  into this aspect.\\\\ \n ▪整合手段 - 項目及其包含的信息如何互動並從彼此中受益，即與其他系統和關鍵軟件的集成。例如，如果一個項目可以訪問CAD文件，就不需要手動填寫元數據字段。項目如何自動影響其他項目也涉及到這一方面。\\\\ \n \\begin{center}%文字置中 \\large\\textbf{4. CHAPTER}%字體加黑加粗 \\large\\textbf{第4章}%字體加黑加粗 \\end{center}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{INTRODUCTION TO THE COMPANY AND PRODUCT}%字體加黑加粗 \\large\\textbf{公司和產品介紹}%字體加黑加粗 \\end{center}\\\\ \n As one can imagine, one of the unique aspects of this work is its focus in one specific  software solution that tend to be quite flexible in terms of ease of implementation to different sorts of business. This is contrary to most use cases regarding PLM implementation where  the business case is the constant and the system is built around it. Nonetheless, in order to  evaluate Odoo as a PLM+MES tool, it is important to consider an example. The advantage  here is that a fictional company can be picked for this end maximizing the perceived effect  of the software during a simulation.\\\\ \n 作為人們可以想像的，這項工作的一個獨特之處在於，它專注於一個特定的軟體解決方案，這個解決方案在易於實施到不同類型的企業方面通常非常靈活。這與大多數關於PLM實施的用例相反，其中業務案例是固定的，系統是圍繞其構建的。然而，為了評估Odoo作為PLM+MES工具，考慮一個例子是很重要的。優勢在於，可以選擇一家虛構公司來進行模擬，從而最大程度地提高軟體的感知效果。\\\\ \n It is considering all those previously mentioned systems that, for the sake of  exemplification, the theoretical company was organized in the molds of Industry 4.0. This  company is a recently founded small case manufacturing company that uses plastic injection  molding as their primary mean of production and uses additive manufacturing and fast  prototyping as part of their business strategy. As explained in chapter 2 those are great  examples of the path that industry is taking regarding innovation where mass production is  becoming slowly less important than product variety and time to market.\\\\ \n 考慮到所有先前提到的系統，出於示例化的目的，這家理論上的公司是按照工業4.0的模式組織的。這家公司是一家最近成立的小型製造公司，以塑膠射出成型作為主要生產手段，並將增材製造和快速原型製作作為其業務策略的一部分。正如第2章所解釋的，這些都是行業創新路徑的很好例子，其中大規模生產變得越來越不重要，產品多樣性和上市時間變得更加重要。\\\\ \n In order to maximize the tracking of change, most of its business are based on lower  production batches on mainly automated machinery. This company focus in the production  of injected plastic products and rely heavily in flexible machinery for setting production and  prototyping. Having that in mind, it should be simple enough to simulate continuous  improvement of both product and process to the extent of the evaluated software. Since this sort of everchanging production is extremely dependent on information management of all  kinds, it must prove to be a perfect base for applied PLM+MES. \\\\ \n 為了最大程度地追蹤變化，其大多數業務都基於主要是自動化機械的較低生產批次。該公司專注於注塑塑料產品的生產，並且在設置生產和原型製作方面非常依賴靈活的機械。有了這個想法，應該足夠簡單地模擬產品和流程的持續改進，以評估的軟體程度。由於這種不斷變化的生產極其依賴各種信息的管理，因此它必須證明是應用PLM+MES的完美基礎。\\\\ \n In this example the company has already implemented, since its recent foundation, the  Odoo software and has taken all the necessary training and steps to its proper use. This allow the removal of the boundaries and limitations that are so common regarding implementation  of the PLM+MES system to an already existing business, i.e., dependences on legacy systems  administrative resistance to change or integration to old procedures. These are obviously important, but it is not within the scope of this work.\\\\ \n 在這個例子中，公司自成立以來就已經實施了Odoo軟體，並採取了所有必要的培訓和步驟來正確使用它。這樣一來，就可以消除對於將PLM+MES系統實施到已經存在的業務中常見的界限和限制，例如對遺留系統的依賴、管理對變革的抵制或對舊程序的整合。這些顯然很重要，但不在本工作的範圍之內。\\\\ \n The company aims to produce a completely new product by the end of the year. After  doing so, the company improved the process of production for said product. Once there is  the need for product improvement, said improvement was performed as well.\\\\ \n 該公司的目標是在年底之前生產一個全新的產品。完成後，公司改進了該產品的生產過程。一旦需要產品改進，也會進行該改進。\\\\ \n The following diagram (Figure 9) will be taken into consideration as the path of product  development and improvement:\\\\ \n 接下來的圖表（圖9）將被視為產品開發和改進的路徑。\\\\ \n %加入p19.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p19.png}%插入在image資料夾下的p19.png  \\label{fig:p19} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 9 Development diagram}%字體加黑加粗 \\large\\textbf{圖9 發展流程圖}%字體加黑加粗 \\end{center}\\\\ \n This path aims to transmit to the reader an iterative approach towards development and  improvement. The idea is followed by a product design for which a cycle of prototyping and  redesign takes effect until satisfactory result is achieved. Then a similar cycle takes place  regarding the production process. At the end of this stage initial development is done and the actual production can begin.\\\\ \n 這條路徑旨在向讀者傳達一種對開發和改進的迭代方法。這個想法是跟隨產品設計，其中原型和重新設計的循環直到達到滿意的結果為止。然後，類似的週期在生產過程中也會發生。在這個階段結束時，初始開發完成，實際生產可以開始。\\\\ \n It is at this point that ways of stablishing the continuous improvement is important. In the  case of this company, we are only considering two main types of upgrade paths, those being,  product upgrade and process upgrade respectively.\\\\ \n 在這一點上，建立持續改進的方法就變得重要了。在這家公司的情況下，我們僅考慮兩種主要的升級途徑，分別是產品升級和過程升級。\\\\ \n \\large\\textbf{4.1.The products and processes}%字體加黑加粗 \\large\\textbf{4.1 產品和流程}%字體加黑加粗 \n Change and effect are the focus of the PLM+MES implementation as such the subject of  said change would ideally be something that could afford a reasonable amount of freedom of  design. Although the effects of a well implemented PLM+MES should be substantial even  in rigid manufacturing environments, where the change is extremely limited, the system will  produce much more perceivable change in an enterprise that thrives in innovation because  there will be more opportunities to improve the system and gain feedback.\\\\ \n 變化和影響是PLM+MES實施的焦點，因此理想情況下，變化的主題應該是能夠提供合理程度的設計自由度。儘管在嚴格的製造環境中，變化非常有限，一個良好實施的PLM+MES的影響應該是顯著的，但在一個擅長創新的企業中，系統將會產生更加明顯的變化，因為那裡將有更多改進系統和獲得反饋的機會。\\\\ \n From the perspective of improvement, if you compare a product that is a result from sheet  metal stamping (Figure 10) to an equivalent product that is the result of a CNC milling  procedure (Figure 11) it is easy to perceive that the CNC milled product is more welcoming \\\\ \n 從改進的角度來看，如果你將一個由金屬板沖壓製成的產品（見圖10）與一個相等的由CNC銑削過程製成的產品（見圖11）進行比較，可以很容易地感覺到CNC銑削產品更受歡迎。\\\\ \n to upgrades. While the stamping is low cost (by comparison) it depends on heavy high  precision metal dyes that are extremely expensive to produce. This means that the cost of  enacting change to it is much higher and thus the effect of a system that thrives on tracking  change becomes limited.\\\\ \n 對於升級來說。儘管沖壓成本較低（相對而言），但它依賴於昂貴的高精度金屬模具，這些模具的生產成本非常昂貴。這意味著對其進行變更的成本要高得多，因此，對於追蹤變更的系統的影響變得有限。\\\\ \n %加入p20-1.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p20-1.png}%插入在image資料夾下的p20-1.png  \\label{fig:p20-1} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 10 Example of stamped AK74 pattern rifle receiver(Brownnells.com)}%字體加黑加粗 \\large\\textbf{圖10：AK74型槍機的沖壓槍機示例（來源：Brownnells.com）}%字體加黑加粗 \\end{center}\\\\ \n %加入p20-2.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p20-2.png}%插入在image資料夾下的p20-2.png  \\label{fig:p20-2} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 11 Example of milled AK74 pattern rifle receiver(sharpsbros.com)}%字體加黑加粗 \\large\\textbf{圖11：AK74型槍機的銑削槍機示例}%字體加黑加粗 \\end{center}\\\\ \n In the case of this fictional company, it has been determined that the best way to exemplify  the PLM+MES effects would be to have products designed around plastic injection molding.  It might seem unintuitive at first to consider this manufacturing procedure, like the stamping  procedure previously described, since it too depends on high precision molds during  production. However, the main differences between the two is regarding ease of prototyping and the cost of upgrading. \\\\ \n 在這個虛構公司的情況下，已經確定了展示PLM+MES效果的最佳方式是設計圍繞注塑成型的產品。乍一看，考慮到這種製造過程可能看起來有些不合常理，就像之前描述的沖壓過程一樣，因為它在生產過程中也依賴於高精度的模具。然而，這兩者之間的主要區別在於原型製作的便利性和升級的成本。\\\\ \n Injection molding is a broad and complex field of engineering that involves a huge variety  of materials and methods, little of which is of the concern of this work. It is however relevant  to point out that for the most part, the pressures involved in the injection molding are one order of magnitude lower than the when we are dealing with steel; softer materials can be\\\\ \n 注塑成型是一個廣泛而複雜的工程領域，涉及大量的材料和方法，其中很少是這項工作關注的範圍。然而，值得指出的是，注塑成型所涉及的壓力大部分情況下比我們處理鋼材時低一個數量級；較軟的材料可以\\\\ \n used on their molds like CNC milled aluminum. At the same time, new advancements in the  field of additive manufacturing have made possible to prototype plastic parts with much  closer physical characteristics to the end result of a injected piece. Sometimes even prototype  molds (Figure 12) can be used for a lower volume test runs during process upgrades. \\\\ \n 與此同時，增材製造領域的新進展已經使得能夠使用更接近注塑成型最終產品的物理特性的塑料零件進行原型製作。有時甚至可以使用原型模具（見圖12）進行低容量的測試生產，用於流程升級。\\\\ \n %加入p21.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p21.png}%插入在image資料夾下的p21.png  \\label{fig:p21} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 12 Example of injection mold made using a 3D printer(thefabricator.com)}%字體加黑加粗 \\large\\textbf{圖12：使用3D打印機製作的注塑模具示例}%字體加黑加粗 \\end{center}\\\\ \n Additive manufacturing has become an incredible tool for ultra-flexible production. This  mindset of continuous improvement, especially when regarding prototyping and iterative  design, is a hallmark of the lean mentality that is so relevant in the modern industry.\\\\ \n 增材製造已成為超靈活生產的不可或缺的工具。這種持續改進的思維，特別是在原型製作和迭代設計方面，是現代工業中非常重要的精益思維的典範。\\\\ \n As mentioned in the previous section, in this case study it is considered the creation of a  new product and its production process by the fictional company. This product consists in a  plastic small form factor computer case, composed of 3 different parts (Figure 13) that are  expected to be designed and prototyped considering combination of additive manufacturing and CNC milling towards a plastic injection molding production. \\\\ \n 如前一節所述，在這個案例研究中，考慮到虛構公司將創建一個新產品及其生產過程。這個產品是一個由3個不同部分組成的塑料小型電腦機殼（見圖13），預計將採用增材製造和CNC銑削的組合進行設計和原型製作，以便進行塑料注塑成型生產。\\\\ \n %加入p22.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p22.png}%插入在image資料夾下的p22.png  \\label{fig:p22} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 13 3D exploded view of the theoretical product}%字體加黑加粗 \\large\\textbf{圖13：理論產品的3D爆炸視圖}%字體加黑加粗 \\end{center}\\\\ \n \\large\\textbf{4.1.1. Part A}%字體加黑加粗 \\large\\textbf{4.1.1. 零件A}%字體加黑加粗 \n PART-A (Figure 14) is the core structure of the computer case. It is expected to comport  all the pieces necessary for the proper function of the small form factor computer in question.  To this end a raw material A was selected to be Acrylonitrile Butadiene Styrene (ABS) this  is an opaque thermoplastic polymer and an engineering grade plastic. It is commonly used to  produce electronic parts such as phone adaptors, keyboard keys and wall socket plastic  guards.\\\\ \n PART-A（圖14）是電腦機殼的核心結構。預計它將包含所有必要的零件，以確保所討論的小型電腦的正常運行。為此，選擇了原料A為丙烯腈丁二烯苯乙烯（ABS），這是一種不透明的熱塑性聚合物和一種工程級塑料。它通常用於生產電子零件，如手機適配器、鍵盤鍵和牆壁插座的塑料保護罩。\\\\ \n %加入p23.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p23.png}%插入在image資料夾下的p23.png  \\label{fig:p23} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 14 Isometric view of Part A}%字體加黑加粗 \\large\\textbf{圖14：部件A的等角視圖}%字體加黑加粗 \\end{center}\\\\ \n The main reasons for choosing this material specifically are its toughness, its good  dimensional stability (resistance to change dimensions after cooling), its high impact  resistance and surface hardness. Finally, it is also commonly available in the form of 3D  printing filament for extrusion 3D printers which should prove to be quite useful during  prototyping.\\\\ \n 選擇這種材料的主要原因是它的耐用性、良好的尺寸穩定性（冷卻後尺寸變化的抵抗力）、高衝擊抗性和表面硬度。最後，它也常見於3D打印填料的形式，用於擠出式3D打印機，這在原型製作過程中應該非常有用。\\\\ \n \\large\\textbf{4.1.2. Parts B and C}%字體加黑加粗 \\large\\textbf{4.1.2. 零件B和C}%字體加黑加粗 \n Parts B and C are lids that should snap into place, closing the system. These are very  simple pieces and require a certain level of elasticity so it can deform to assure a screwless  assembly. These two identical parts are going to be made with Thermoplastic Polyurethane (TPU), because of its elastic nature and great tensile and tear strength. This sort of polymer  is often used to produce parts that demand a rubber-like elasticity. TPU performs well at high  temperatures and is commonly used in power tools, cable insulations and sporting goods. Finally, TPU is also available in the form of filament for 3D printers which, for the simulation, will be used for prototyping. \\\\ \n 零件B和C是應該能夠彈入到位，封閉系統的蓋子。這些是非常簡單的零件，需要一定程度的彈性，以便它們可以變形，確保無需螺絲即可組裝。這兩個相同的零件將使用聚氨酯熱塑性彈性體（TPU）製成，因為它具有彈性且具有極高的拉伸和撕裂強度。這種類型的聚合物通常用於生產需要橡膠般彈性的零件。TPU在高溫下表現良好，通常用於電動工具、電纜絕緣和運動用品。 最後，TPU也可以以3D打印機的填料形式提供，因此在模擬中，將用於原型製作。\\\\ \n %加入p24.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p24.png}%插入在image資料夾下的p24.png  \\label{fig:p24} \\end{figure}\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Figure 15 Parts B and C}%字體加黑加粗 \\large\\textbf{圖15 零件B和C}%字體加黑加粗 \\end{center}\\\\ \n \\large\\textbf{4.1.3. Molds}%字體加黑加粗 \\large\\textbf{4.1.3. 模具}%字體加黑加粗 \n Ideally all molds should be made of steel, for longevity of the mold and product quality.  That being said, the injected plastics that are being selected for all parts are not so pressure  dependent and their forms are not so complex, so it is assumed that aluminum molds made  with a precision CNC machining should suffice to produce said parts.\\\\ \n 理想情況下，所有模具都應該由鋼製成，以保證模具的壽命和產品質量。儘管如此，所選擇的所有零件的注塑塑料並不那麼依賴壓力，它們的形式也不那麼複雜，因此可以假設，使用精密的CNC加工製造的鋁模具應該足以生產這些零件。\\\\ \n It is also assumed that all molds are simple enough to be prototyped using 3D printing.  Although this is not always true, it was determined representative enough for this simulation.  The type of material used in those prototypes is high temperature resign cured using an SLA  3DPrinter. Additionally, the mold will be considered the main physical aspect to be  developed when regarding the production process because it something that directly affects  the production as well as something that can be produced in house and tracked as a product  would.\\\\ \n 還假設所有的模具都足夠簡單，可以使用3D打印進行原型製作。儘管這並不總是真實的，但已經確定對於這個模擬來說具有代表性。這些原型使用高溫樹脂通過SLA 3D打印機固化。此外，模具將被視為在生產過程中需要開發的主要實物方面，因為它直接影響著生產，而且可以在內部生產並像產品一樣進行追蹤。\\\\ \n \\large\\textbf{4.2.What is analized during the simulation}%字體加黑加粗 \\large\\textbf{4.2 模擬期間分析的內容}%字體加黑加粗 \n Taking into consideration the diagram, shown in Figure 9, as well as the main aspects of  a successful integration of PLM and MES as described in the section 3.1, this experiment  aims to produce commentary regarding the following relevant questions in Table 1.\\\\ \n \\begin{center}%文字置中 \\large\\textbf{Table 1 Summary of questions to be answered}%字體加黑加粗 \\large\\textbf{表1 回答問題摘要}%字體加黑加粗 \\end{center}\\\\ \n %加入p25.png的圖片 \\begin{figure}[htbp]  \\centering %圖片置中  \\includegraphics[]{../image/p25.png}%插入在image資料夾下的p25.png  \\label{fig:p25} \\end{figure}\\\\ \n \n', 'tags': '', 'url': '翻譯作業.html'}, {'title': '影片上字幕作業', 'text': '\n \n \n', 'tags': '', 'url': '影片上字幕作業.html'}, {'title': '期中作業', 'text': '/downloads/期中影片.mp4 \n \n', 'tags': '', 'url': '期中作業.html'}, {'title': 'NX零件圖', 'text': '圖2 \n /downloads/圖2.mp4 \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'NX零件圖.html'}]};