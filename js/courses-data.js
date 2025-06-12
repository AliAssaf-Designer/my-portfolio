let doc = document;
const courses_info = [
    {   "id": "1",
        "type": "web",
        "name": "كورس تعلم redux بالعربي | Redux Tutorial",
        "date": "2025-6-11",
        "lecture": "Mohamed hany Youtuber",
        "description": "Explain the basics idea about Redux.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=0vBThhNKkXAOkXq9&amp;list=PLZ45kwWUJ51a77lNGxrO8HxVf9jdCqsXS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "2",
        "type": "web",
        "name": "تعلم Git و Github",
        "date": "2024-7-22",
        "lecture": "ELZero Web School Youtuber",
        "description": "Explain the basics statement and instructions about the Git & Github.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=CsbeZKFVSJ9-mOeA&amp;list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "3",
        "type": "web",
        "name": "نور حمصي تعلم لغة ساس لبرمجة واجهات المواقع",
        "date": "2024-7-22",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain the basics of the SASS on a simple website.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=aDaaj7G_ryymA-Co&amp;list=PLPTNqXpQ2tbgJPXA07MUI3A2oxnOfB6z4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "4",
        "type": "web",
        "name": "هكذا صممت المواقع الضخمة",
        "date": "2024-7-8",
        "lecture": "Nour Homsi Youtuber",
        "description": "At every lesson from this courses design a website using different tech and explain about it.s",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=RJaH01hWZ2jxQl6P&amp;list=PLPTNqXpQ2tbi1dREPltindOpouDjDzzdH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "5",
        "type": "web",
        "name": "تعلم البرمجة مع نور حمصي-مستوى متوسط",
        "date": "2024-5-28",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain about JavaScript , jQuery, API and some other tips and software that can we use.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=t9Ufd98FCp3_Dl00&amp;list=PLPTNqXpQ2tbgiupUAclz5-gZRy07UTonn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "6",
        "type": "web",
        "name": "دروس التقنية العربية",
        "date": "2024-5-9",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain about some tips and programs and that can help us in daily work.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=vmL8e44A2kyajf-k&amp;list=PLPTNqXpQ2tbhzjAREWO1D2_hgagfekFDB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "7",
        "type": "web",
        "name": "سؤال و جواب",
        "date": "2024-4-30",
        "lecture": "Nour Homsi Youtuber",
        "description": "At every lesson he answer a question in web or graphic design or other things and explain about many things.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=BWWjJRClOU59pHQh&amp;list=PLPTNqXpQ2tbgJHTc4fQzq43T6ZmiKQaWJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "8",
        "type": "web",
        "name": "دورة اساسيات جافا سكريبت",
        "date": "2024-4-2",
        "lecture": "Nour Homsi Youtuber",
        "description": "This course explain about JavaScript, JQuery, Json with a simple application on that.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=e7-iLFxrIAHhDxsu&amp;list=PLPTNqXpQ2tbg3LD_mAlVFwYSGXLaypyx-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "9",
        "type": "web",
        "name": "دورة تصميم مواقع الإنترنت حتى الإحتراف-السلسة الكاملة",
        "date": "2024-4-2",
        "lecture": "Nour Homsi Youtuber",
        "description": "It a workshop on a website including the following steps: Layout on phsotoshop,HTML,CSS,for mobile and how to upload it.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Sk1R_YrYmGueqmZ_&amp;list=PLPTNqXpQ2tbhdCRHVR0C4bEivEx8AQ9BZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "10",
        "type": "web",
        "name": "تعلم HTML و CSS خطوة بخطوة (المستوى الرابع)",
        "date": "2024-4-2",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain how to design a dropdown menu using just css and html.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=yLJVdukaoCZ_a9Do&amp;list=PLPTNqXpQ2tbivRYcC-oEkzd2rmmWHBGcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "11",
        "type": "web",
        "name": "دورة إستخدام لوحة إدارة الاستضافة WHM",
        "date": "2024-3-31",
        "lecture": "استضافة فوست-مصر Youtube channel",
        "description": "Explain how to work with the mother cpanel on reseller for web hosting which called WHM.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=KvAigrmILg8eVZ7I&amp;list=PLtsniHplQOtTMAg3LYRwKndr6d7rBmHir" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "12",
        "type": "web",
        "name": "تعلم البرمجة مع نور حمصي- المستوى المبتدئ",
        "date": "2024-3-30",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain about HTML, CSS, Bootstrap and some extra information about web.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=5jyJv_QQJwjXlowH&amp;list=PLPTNqXpQ2tbjl3zfOPo5vH_Hz8YP2yKcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "13",
        "type": "web",
        "name": "تعلم HTML و CSS خطوة بخطوة (المستوى الأول)",
        "date": "2024-3-28",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain how to work with control panel cPanel that’s mange the domain and the host.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=3yNEqDM2-LRJB2gr&amp;list=PLPTNqXpQ2tbj12WDefiTH0VgnrTacD9cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "14",
        "type": "web",
        "name": "الدورة الكاملة لتعلم إستخدام لوحة سي بانل cPanel",
        "date": "2024-3-25",
        "lecture": "استضافة فوست-مصر Youtube channel",
        "description": "Explain how to work with control panel cPanel that’s mange the domain and the host.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=d52Zn8e4zdBuB9L3&amp;list=PLtsniHplQOtSu9aiymRsfIWE7E9nkyIfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "15",
        "type": "web",
        "name": "كورس استضافة المواقع Web Hosting &- cpanel Course",
        "date": "2024-3-15",
        "lecture": "Bassem Magdy-Media Buyer Youtuber",
        "description": "Explain how to work with control panel cPanel that’s mange the domain and the host.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Xez37hHpNnAkLWwO&amp;list=PLxe78bIBB8nVLclphz9Fkt8LGWD0Qc6E3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "16",
        "type": "web",
        "name": "تعلم HTML و CSS خطوة بخطوة (المستوى الثالث)",
        "date": "2024-3-20",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain about WordPress by transforming the website from the second level into a WordPress theme.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=6904y_PVDyCRkpmo&amp;list=PLPTNqXpQ2tbjjSZ8JQhyvok2s0LSeCh0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "17",
        "type": "web",
        "name": "تعلم HTML و CSS خطوة بخطوة (المستوى الثاني)",
        "date": "2024-3-15",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain new things in HTML5&CSS3 and build a small website with it.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=k3I59SUF1w0a4NFK&amp;list=PLPTNqXpQ2tbhUchotBAtHh0z3Bjq01DHD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "18",
        "type": "web",
        "name": "أهم تعليمات لغة CSS",
        "date": "2024-3-5",
        "lecture": "Nour Homsi Youtuber",
        "description": "Explain about the important statement and selectors in CSS.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=93lVVzQv6039wP45&amp;list=PLPTNqXpQ2tbhqO793XtHPRxEkwnaOMIjR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "19",
        "type": "web",
        "name": "دورة تعلم React كاملة افضل كورس رياكت 2024 | Learn React JS in Arabic",
        "date": "2024-2-20",
        "lecture": "Coder shiyar",
        "description": "Explain the basics of React and how to write HTML, CSS and JS with it.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=8BwCo5Q989rxNUTz&amp;list=PLMTdZ61eBnypHk2R8xBGwk3Xwy8Ra5qjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "20",
        "type": "web",
        "name": "تعلم  jQuery باحترافية",
        "date": "2024-2-11",
        "lecture": "Elzero web school youtuber",
        "description": "Explain the basics of it beginning from selectors and effects until almost the whole references of it’s.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=iOJiKufcviuqouYm&amp;list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "21",
        "type": "web",
        "name": "JavaScript ES6 Tutorials",
        "date": "2024-1-25",
        "lecture": "TheNetNinja youtuber",
        "description": "Explain what is the new in JavaScript version 6 and defined it.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=FoTZgV3TQ7F_4X_k&amp;list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "22",
        "type": "web",
        "name": "JavaScript",
        "date": "2023-12-20",
        "lecture": "coder shyiar",
        "description": "Explain about JavaScript with maximal more and there is practicing on real website and i have a certificate for it on this link: <a href='https://mega.nz/file/QrNkEDpD#YrYz5zBgrEl0QjikMMB2pEzPy4kZz7ODKkCCzWTE_eY'>certificate here</a>.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=DOiwzCrH0sjpojTG&amp;list=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "23",
        "type": "web",
        "name": "Learning Bootstrap 5",
        "date": "2023-8-21",
        "lecture": "coder shyiar",
        "description": "this course explains basics of Bootstrap 5 and there is a certificate on this link: <a href='https://mega.nz/file/srVBWSTR#9NcIz1Hpyk6pfdNnSV8IIBCVmugeOvTP_aGTAoaZzzg'>certificate here</a>.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=bJGR8tGB2FaPCFb_&amp;list=PLMTdZ61eBnyrPiX-b1MNG-MSPAJ0OgpHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "24",
        "type": "web",
        "name": "Learn CSS Full Course",
        "date": "2023-7-23",
        "lecture": "coder shyiar",
        "description": "The course contains a full and comprehensive explanation about the CSS in its entirety even with regard to the responsive web and there is a certificate on this link: <a href='https://mega.nz/file/x79XzRZL#r6kAJbRhT12UJ_jkmO9kYCR4NhPWcDylBuFi6TNwzZo'>certificate here</a>",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=cTdqjRAODgMagkGx&amp;list=PLMTdZ61eBnyoxjc9Prw0uhwgp6YZ2-_sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "25",
        "type": "web",
        "name": "Learn HTML Full Course",
        "date": "2023-6-22",
        "lecture": "coder shyiar",
        "description": "The course includes a detailed explanation of HTML And you give additional and new information about it and there is a certificate on this link: <a href='https://mega.nz/file/Y2lzQSgb#V4kXRrchRlyoaH7I_a9eesFIYjRQ1o59sbX9K48r_fo'>certificate here</a>",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=RCLUNMvnz7x1EyXM&amp;list=PLMTdZ61eBnyrnapIyOphXAkIcR5DDOGkz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "26",
        "type": "web",
        "name": "JavaScript Learning",
        "date": "2023-2",
        "lecture": "EL Zero Web School YouTube Channel",
        "description": "The course explains the basics and Syntax of JavaScript .",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=e2dfs6_JvH1pHE21&amp;list=PLDoPjvoNmBAw6p0z0Ek0OjPzeXoqlFlCh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "27",
        "type": "graphic",
        "name": "دورة شاملة في برنامج إنديزاين",
        "date": "2024-9-1",
        "lecture": "Nour Homsi youtuber",
        "description": "In this courses, we are going to learn how to design a magazine from scrstch until you send it to the printing house and that by designing a simple magazine.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=kqrMFzzYeNAkpnsN&amp;list=PLPTNqXpQ2tbhdSm4P0gxxhxsoJnomfbC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "28",
        "type": "graphic",
        "name": "الإخراج الفني والتسويق و التنمية البشرية",
        "date": "2024-8-24",
        "lecture": "Nour Homsi youtuber",
        "description": "Expalin about Visual Identity, Logos,…..,Graphic Design and some other things that are important for any one.",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=JswTvnMfRadlxhht&amp;list=PLPTNqXpQ2tbhiwgReYlo1h3wkHFWZDVu9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "29",
        "type": "graphic",
        "name": "التغذية البصرية والتعلم من الأخطاء الأكاديمية",
        "date": "2023-12-1",
        "lecture": "Nour Homsi youtuber",
        "description": "Extract errors in some desgins to learn us how to do it",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=txAdcbtc3kIRrqaq&amp;list=PLPTNqXpQ2tbg2akDZZPonlnXWqrbqiZYh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "30",
        "type": "graphic",
        "name": "قواعد التصميم الأكاديمية",
        "date": "2023-11-20",
        "lecture": "Nour Homsi youtuber",
        "description": "Explain the eight principles about graphic and some extra info",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=10uoaEHnoPyuzdu3&amp;list=PLPTNqXpQ2tbgmAshpoR02QO4BfyWX3Dzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "31",
        "type": "graphic",
        "name": "InDesign",
        "date": "2023-12-20",
        "lecture": "Nour Homsi youtuber",
        "description": "Explain about program interface and some technique and tips that can be use in the program",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=PlSJYsRVCPFtKllD&amp;list=PLPTNqXpQ2tbgJfd9KPsCwVhYg7PDsdtTB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "32",
        "type": "graphic",
        "name": "Illustrator",
        "date": "2023-10-15",
        "lecture": "Nour Homsi youtuber",
        "description": "Explain about program interface and some technique and tips that can be use in the program",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=E5IMT0KpXfshBEHp&amp;list=PLPTNqXpQ2tbhfi46e523TelnrzNDddVd6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "33",
        "type": "graphic",
        "name": "Learn Photoshop Full Course",
        "date": "2023-7-5",
        "lecture": "Nour Homsi youtuber",
        "description": "Explanation of the program's interface, tools and techniques, along with some advanced applications and technologies",
        "link": '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=pGkNmiegx18NK8Q5&amp;list=PLPTNqXpQ2tbjJjJiwegGONmGK4-mzz2Qj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {   "id": "34",
        "type": "other",
        "name": "ICDL",
        "date": "2020-10-27",
        "lecture": "Teracourses Websites",
        "description": "A simple course consisting of eight lessons, each lesson talking about One of Office programm With a good explain of it and ther is a certificate on this link: <a href='https://mega.nz/file/1qVUmQTK#FVd8JWBlLw_puqPWN5CFFewhfxWA8pAycVYjS2VHjSY'>certificate here</a>.",
        "link": '<a href="https://teracourses.com/en/lesson/ICDL-course4" style="font-size: 50px; margin-left: 50px; font-weight: bold;">Course Here</a>'
    }
];
let courses = doc.querySelector(".courses");
let webCourses = doc.querySelector(".web");
let graphicCourses = doc.querySelector(".graphic");
let otherCourses = doc.querySelector(".other");
let web_courses = [];
let graphic_courses = [];
let other_courses = [];
courses_info.map(course => {
    if (course.type === "web") web_courses.push(course);
    else if (course.type === "graphic") graphic_courses.push(course);
    if (course.type === "other") other_courses.push(course);
})
web_courses.map(web_course => {
    webCourses.innerHTML += `<div class="course-card" id="${web_course.id}">
                                <h3 class="name">${web_course.name}</h3>
                                <h5 class="date">${web_course.date}</h5>
                                ${web_course.link}
                                <p class="description">${web_course.description}</p>
                                <p class="lecture">${web_course.lecture}</p>
                                </div>`;
});
graphic_courses.map(graphic_course => {
    graphicCourses.innerHTML += `<div class="course-card" id="${graphic_course.id}">
                                    <h3 class="name">${graphic_course.name}</h3>
                                    <h5 class="date">${graphic_course.date}</h5>
                                    ${graphic_course.link}
                                    <p class="description">${graphic_course.description}</p>
                                    <p class="lecture">${graphic_course.lecture}</p>
                                    </div>`;
});
other_courses.map(other_course => {
    otherCourses.innerHTML += `<div class="course-card" id="${other_course.id}">
                                    <h3 class="name">${other_course.name}</h3>
                                    <h5 class="date">${other_course.date}</h5>
                                    ${other_course.link}
                                    <p class="description">${other_course.description}</p>
                                    <p class="lecture">${other_course.lecture}</p>
                                    </div>`;
});