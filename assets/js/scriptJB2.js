var topSearch
var midSearch
var bottomSearch
var topIndex = 0;
var bottomIndex = 3;
var shoeIndex = 6;

var myData = {
    "search_information": {
        "query_displayed": "white shirt"
    },
    "ads": [],
    "shopping_results": [
        {
            "position": 1,
            "docid": "17524992496482861334",
            "link": "https://www.google.com/shopping/product/254049663271751356?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII3g8",
            "title": "Gildan Adult Short Sleeve T Shirt- White, Small",
            "source": "Hobby Lobby",
            "price": "$2.99",
            "extracted_price": 2.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0Fa57Loy8HoYWHmjbegq-WOlVfm3vqZFNpt6iIROWtuFCTgiK7FqjLNaAFGYkI59Tqrj-sY2JBSberT956grEged8bVMXJi4nNsU4dOz0&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/254049663271751356?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII2w8oAA",
            "product_id": "254049663271751356",
            "rating": 4.8,
            "compare_prices_link": "https://www.google.com/shopping/product/254049663271751356/offers?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECOkP",
            "compare_prices_text": "Compare prices from 5+ stores",
            "price_below_typical": "$0.34 below typical",
            "price_below_typical_extracted": 0.34,
            "delivery_options": "Delivery by Mon, Mar 27",
            "badge": "LOW PRICE"
        },
        {
            "position": 2,
            "docid": "16535628144749008487",
            "link": "https://www.google.com/shopping/product/640223785053767171?q=white+shirt&prds=eto:16609605758577638794_0,pid:16535628144749008487,rsk:PC_17868843781155401121&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII9A8",
            "title": "Gildan Men's Crew T-Shirt 6 Pack, White, X-Large",
            "source": "Amazon.com",
            "price": "$15.97",
            "extracted_price": 15.97,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQj2H41uEALCGPRFFXwmK0HqsDJ0f5n3isGetlAJAKVlq5T1eu_gEtmvmUWnMG2WxCTnT10BVRPQ2qYz_O92Ku4TPLK8ki3VOWvf-uNKzl99R6Ja2QUghna&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/640223785053767171?q=white+shirt&prds=eto:16609605758577638794_0,pid:16535628144749008487,rsk:PC_17868843781155401121&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII8Q8oAA",
            "product_id": "640223785053767171",
            "rating": 4.6,
            "compare_prices_link": "https://www.google.com/shopping/product/640223785053767171/offers?q=white+shirt&prds=eto:16609605758577638794_0,pid:16535628144749008487,rsk:PC_17868843781155401121&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECP8P",
            "compare_prices_text": "Compare prices from 10+ stores",
            "price_below_typical": "$3.01 below typical",
            "price_below_typical_extracted": 3.01,
            "delivery_options": "$5.99 delivery",
            "delivery_options_extracted_price": 5.99,
            "badge": "LOW PRICE"
        },
        {
            "position": 3,
            "docid": "7665274070747229584",
            "link": "https://www.google.com/shopping/product/7336526082917306161?q=white+shirt&prds=eto:6130847829113643449_0,pid:7665274070747229584,rsk:PC_4147027888028957383&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIhxA",
            "title": "George Men's Long Sleeve Dress Shirt, Size: 3XL, White",
            "source": "Walmart",
            "price": "$14.98",
            "extracted_price": 14.98,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUUWC-cpJ1HHDnThegq_wbKVKVPwRY6YFAwGelfMswUW0Jw3_6YG_GIxGrxD9lGbZBYqOU39gjJA67HTq30xh8a_tEGBdrLHMC1O1djtWB&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7336526082917306161?q=white+shirt&prds=eto:6130847829113643449_0,pid:7665274070747229584,rsk:PC_4147027888028957383&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIhRAoAA",
            "product_id": "7336526082917306161",
            "rating": 3.9,
            "delivery_options": "$6.99 delivery · Free 90-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 4,
            "docid": "12259825410674234036",
            "link": "https://www.google.com/shopping/product/3255882949523655255?q=white+shirt&prds=eto:12744683661820586471_0,pid:12259825410674234036,rsk:PC_5682309982099135116&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIImxA",
            "title": "Kenneth Cole Unlisted Men's Classic/Regular-Fit Solid Dress Shirt - White",
            "source": "Amazon.com",
            "price": "$16.79",
            "extracted_price": 16.79,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZQOKpcmY3RU6oZ3DCjOeGDoUl-UG7n79BqRz_cXnal1zY__w34lud7UE_L6OWJOKi9s2fSeoCQeyBNYcAKPt9-cNEoTVP59VQJ4Zi2OA&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/3255882949523655255?q=white+shirt&prds=eto:12744683661820586471_0,pid:12259825410674234036,rsk:PC_5682309982099135116&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIImBAoAA",
            "product_id": "3255882949523655255",
            "rating": 4.7,
            "price_below_typical": "$4.20 below typical",
            "price_below_typical_extracted": 4.2,
            "delivery_options": "$5.99 delivery",
            "delivery_options_extracted_price": 5.99,
            "badge": "LOW PRICE"
        },
        {
            "position": 5,
            "docid": "7152863927419164622",
            "link": "https://www.google.com/shopping/product/14782578770361797892?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIrhA",
            "title": "Fruit of The Loom | Men's Short Sleeve Crew T-Shirt, White 6 Pack | 3XL | White",
            "source": "Fruit of the Loom",
            "price": "$22.49",
            "extracted_price": 22.49,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcReKE21R2-2pKax2t5yrLo7e6HOoMuXu6iY_tgxS3NeNO8FSJu6tFqxJKBjpXCS3zWj8pI3NzNsVtTH5ujT5xpnm-ccscCbRmzJhZWwhU4zSC-7TepurP8c&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/14782578770361797892?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIqxAoAA",
            "product_id": "14782578770361797892",
            "rating": 4.4,
            "compare_prices_link": "https://www.google.com/shopping/product/14782578770361797892/offers?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECLYQ",
            "compare_prices_text": "Compare prices from 10+ stores",
            "delivery_options": "Delivery by Wed, Mar 29 · Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 6,
            "docid": "11072543342418915372",
            "link": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIwRA",
            "title": "Gildan Heavy Cotton T-Shirt - M / White",
            "source": "JiffyShirts.com",
            "price": "$2.49",
            "extracted_price": 2.49,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLK70VF8mTzDJGkL89oCFQA8YZepXm_eVmo4_3ayRVcnCeuFjDJ3RRW7Da5GD8L1N0MvyHXKKTBnAxjNd-teKrRYooAtKd5wxDtxnHSVob&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIvhAoAA",
            "product_id": "1466157075227512336",
            "rating": 4.8,
            "compare_prices_link": "https://www.google.com/shopping/product/1466157075227512336/offers?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECMwQ",
            "compare_prices_text": "Compare prices from 10+ stores",
            "price_below_typical": "$0.33 below typical",
            "price_below_typical_extracted": 0.33,
            "delivery_options": "Delivery by Mon, Mar 27 · Free 100-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "LOW PRICE"
        },
        {
            "position": 7,
            "docid": "7722422756890480864",
            "link": "https://www.google.com/shopping/product/1834659109339609583?q=white+shirt&prds=eto:4125561885706681717_0,pid:7722422756890480864,rsk:PC_9297764452957709220&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII1xA",
            "title": "Van Heusen Men's White Oxford Dress Shirt",
            "source": "Zappos.com",
            "price": "$19.99",
            "extracted_price": 19.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHu6UhySGs4yFaKvww6RRgFLYm3u5oMD45HGnjmrFy3hfyI90c5mijO_wh-Q40_i5kXXiiuhyvirdEC7MfKSBuEVHMAjSnvw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1834659109339609583?q=white+shirt&prds=eto:4125561885706681717_0,pid:7722422756890480864,rsk:PC_9297764452957709220&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII1BAoAA",
            "product_id": "1834659109339609583",
            "rating": 4.6,
            "compare_prices_link": "https://www.google.com/shopping/product/1834659109339609583/offers?q=white+shirt&prds=eto:4125561885706681717_0,pid:7722422756890480864,rsk:PC_9297764452957709220&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECOEQ",
            "compare_prices_text": "Compare prices from 5+ stores",
            "delivery_options": "Free delivery by Mar 27 & Free 365-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "FREE 3-DAY"
        },
        {
            "position": 8,
            "docid": "13604497009777343033",
            "link": "https://www.google.com/shopping/product/8958996969496103166?q=white+shirt&prds=eto:9972786652723809749_0,pid:13604497009777343033,rsk:PC_5973091422434886880&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII6hA",
            "title": "Fruit of The Loom Men's Short Sleeve Active Cotton Blend White Crew T-Shirts, 8 ...",
            "source": "eBay - tinesheart",
            "price": "$21.96",
            "extracted_price": 21.96,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAB8QuzPephW8W7vR9Nuoqt2m2YsyylU_tbduUpVuP6_IuwzA38RF094P0Mi6pkdmfw7A32Y1X6unvGYOCxVX0mlZcz3u4ELNpq71q8qEKLwOXLHyDzs5JXw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/8958996969496103166?q=white+shirt&prds=eto:9972786652723809749_0,pid:13604497009777343033,rsk:PC_5973091422434886880&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII5xAoAA",
            "product_id": "8958996969496103166",
            "rating": 4.6,
            "compare_prices_link": "https://www.google.com/shopping/product/8958996969496103166/offers?q=white+shirt&prds=eto:9972786652723809749_0,pid:13604497009777343033,rsk:PC_5973091422434886880&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECO8Q",
            "compare_prices_text": "Compare prices from 5+ stores",
            "delivery_options": "Free delivery by Fri, Mar 31",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 9,
            "docid": "4839484333532311028",
            "link": "https://www.google.com/shopping/product/3499293109527333397?q=white+shirt&prds=eto:10783821969543855184_0,pid:4839484333532311028&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII-RA",
            "title": "Big & Tall Apt. 9 Button-Down Tech Shirt, Men's, Size: 3XB, White",
            "source": "Kohl's",
            "price": "$23.99",
            "extracted_price": 23.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4oAHvjffxIMft6Nci7Xi3z6w4d4PCJZEjTplQwHS_B8ppAJoFGzsJ1mej-iVTAUQd_iT8SMH1eZrpgW13MEyP9awqGCpMPC57U9yakLQaMhtiOTbo280vRQ&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/3499293109527333397?q=white+shirt&prds=eto:10783821969543855184_0,pid:4839484333532311028&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII9xAoAA",
            "product_id": "3499293109527333397",
            "price_below_typical": "$16.01 below typical",
            "price_below_typical_extracted": 16.01,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95,
            "badge": "LOW PRICE"
        },
        {
            "position": 10,
            "docid": "5260403453704620495",
            "link": "https://www.google.com/url?url=https://www.walmart.com/ip/LYXSSBYX-Mens-Shirts-Long-Sleeve-Clearance-Men-s-Spring-and-Autumn-Casual-Solid-Color-Cotton-and-Linen-Loose-Coat-Shirt/1499581587%3Fwmlspartner%3Dwlpa%26selectedSellerId%3D101188280&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2SkIzhE&usg=AOvVaw14ODPHZe4cDebwPAKTlddG",
            "title": "Lyxssbyx Mens Shirts Long Sleeve Clearance Men's Spring and Autumn Casual Solid ...",
            "source": "Walmart - LYXSSBYX",
            "price": "$10.77",
            "extracted_price": 10.77,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQr9HgD7xKdZYR0B9TeqzMgfaHaO_VPh36YCQKlT4T9YMDSLTBaQZrEN1Tm_i4C3LMABObx2PN5hVeppyMCDo4XnuQENzN7xA&usqp=CAE",
            "delivery_options": "$6.89 delivery",
            "delivery_options_extracted_price": 6.89
        },
        {
            "position": 11,
            "docid": "3188225711374121844",
            "link": "https://www.google.com/shopping/product/3509666088575234762?q=white+shirt&prds=eto:14597001772143364444_0,pid:3188225711374121844,rsk:PC_16613614837524538153&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII2hE",
            "title": "Men's Cotton White Long Sleeve Textured Panel Shirt - Beach Wedding",
            "source": "Island Importer",
            "price": "$55.00",
            "extracted_price": 55,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3IHuZsA_dzc94u3z6vkrQlJTXlKdfDqFeBZtWDfCBj7fsUZG1RigyEVj9xhR1NoWMjnVwW9GB-Mpea1LPeOpsqeFXuS2janYIJKtzepw7&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/3509666088575234762?q=white+shirt&prds=eto:14597001772143364444_0,pid:3188225711374121844,rsk:PC_16613614837524538153&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII1xEoAA",
            "product_id": "3509666088575234762",
            "rating": 4.5,
            "delivery_options": "Free delivery by Sat, Mar 25",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 12,
            "docid": "11359979846282619471",
            "link": "https://www.google.com/shopping/product/16196481904272196536?q=white+shirt&prds=eto:5991502225674919763_0,pid:11359979846282619471,rsk:PC_12046976615252358587&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII7BE",
            "title": "Kenneth Cole Unlisted Men's Slim-Fit Solid Dress Shirt - White",
            "source": "Amazon.com",
            "price": "$19.60",
            "extracted_price": 19.6,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzrsh20EcTQrsU0vxJlDD9M2zveSexjr-ir2gU6D0iRM5w57Ep8ojscUA6xE926ByYZauxWPc23oXrJPvFoU2I6vuixL_3T8R_-Zl5-7g4y1uEOES69zMwAQ&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16196481904272196536?q=white+shirt&prds=eto:5991502225674919763_0,pid:11359979846282619471,rsk:PC_12046976615252358587&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII6REoAA",
            "product_id": "16196481904272196536",
            "rating": 3.9,
            "delivery_options": "$5.99 delivery",
            "delivery_options_extracted_price": 5.99
        },
        {
            "position": 13,
            "docid": "7120591187650685530",
            "link": "https://www.google.com/shopping/product/583608475275352737?q=white+shirt&prds=eto:11805421977257315523_0,pid:7120591187650685530,rsk:PC_8759022978569239917&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII_xE",
            "title": "Club Room Men's Slim Fit Solid Dress Shirt, Created for Macy's - Bright White ...",
            "source": "Macy's",
            "price": "$18.00",
            "extracted_price": 18,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGhjZTaWsnzS4kCBYA_zaARzuoIXtE2SaM1ywCSKhigQKeaaAeSJSFQJIMkDAaDSdNcc9DWzRjokbyNUjd0_tYzTA8dmzJUnTnGi2Z38g&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/583608475275352737?q=white+shirt&prds=eto:11805421977257315523_0,pid:7120591187650685530,rsk:PC_8759022978569239917&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII_REoAA",
            "product_id": "583608475275352737",
            "rating": 4.1,
            "price_below_typical": "$3.24 below typical",
            "price_below_typical_extracted": 3.24,
            "delivery_options": "$10.95 delivery · Free 90-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "LOW PRICE"
        },
        {
            "position": 14,
            "docid": "10896726376952258248",
            "link": "https://www.google.com/shopping/product/9826940695028360606?q=white+shirt&prds=eto:10063673143991466103_0,pid:10896726376952258248&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIjhI",
            "title": "Mens Formal Shirts - Long Sleeve Luxury Dress Shirts, White, M",
            "source": "Ideal Dealz",
            "price": "$28.60",
            "extracted_price": 28.6,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQG98iy8eIzOB1B6vezVcHM5QJCZ_GnDXhP_J3SL6kGLNuxrfi-JLJwMmq9RUwTbDggFK6OUb216yzrPxI14KhHspVAcOc7hHHzIJv2ekhP5w7uycWOfX4gqw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/9826940695028360606?q=white+shirt&prds=eto:10063673143991466103_0,pid:10896726376952258248&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIjBIoAA",
            "product_id": "9826940695028360606",
            "delivery_options": "Delivery by Wed, Mar 29"
        },
        {
            "position": 15,
            "docid": "16441902795947326583",
            "link": "https://www.google.com/shopping/product/11802831759916012542?q=white+shirt&prds=eto:5723121066580574282_0,pid:16441902795947326583,rsk:PC_10431853819821839851&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIImxI",
            "title": "Ladies - White H&M+ Cotton Poplin Shirt - Size: 4XL - H&M",
            "source": "H&M",
            "price": "$12.99",
            "extracted_price": 12.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4FqeGI0lFCj8HdlusIGoISZB3JZkP9v--OERRhOEHRK0RY-UcsqPXISo-99csCrwYoeEz0MMV1lYCy-C_OO14USFup_qRoTn5A_5lWPaVWe6jGiNgN6AF&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/11802831759916012542?q=white+shirt&prds=eto:5723121066580574282_0,pid:16441902795947326583,rsk:PC_10431853819821839851&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIImBIoAA",
            "product_id": "11802831759916012542",
            "rating": 4,
            "delivery_options": "Delivery by Thu, Mar 30"
        },
        {
            "position": 16,
            "docid": "14716345853138696100",
            "link": "https://www.google.com/shopping/product/18088871633879207951?q=white+shirt&prds=eto:3889187839890327341_0,pid:14716345853138696100&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIqhI",
            "title": "Men's Clothing & Accessories Solid Color Business Non-Iron Professional Formal ...",
            "source": "Men's Clothing & Accessories",
            "price": "$25.00",
            "extracted_price": 25,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXd_-gMsKTBgNH9fRWeLp39QLQdGEiSMt3iWYdI4TcbRauVGJhJxS9NBc7XFacndR_9oDmfLiiAFNKAPb2EthWvrJr4W3MZMl2TDwIN4c&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/18088871633879207951?q=white+shirt&prds=eto:3889187839890327341_0,pid:14716345853138696100&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIpxIoAA",
            "product_id": "18088871633879207951",
            "delivery_options": "Delivery by Tue, Apr 11"
        },
        {
            "position": 17,
            "docid": "1982688263730612529",
            "link": "https://www.google.com/shopping/product/1393462277844295187?q=white+shirt&prds=eto:12287566341067032726_0,pid:1982688263730612529&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIuBI",
            "title": "Women's Sonoma Goods for Life Crewneck Tee, Size: Medium, White",
            "source": "Kohl's",
            "price": "$7.99",
            "extracted_price": 7.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRr_VC3XQLSdkTEmOxaVikvrkzcyDQbYheg0TNzF3k5PcV_4bdFlrqAQXUNDJ5dB4Cp4CYMA5fON2X6bXLBHIr5aXAna-wTdU942m-zbRwuBIhH1Yeapqy7&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1393462277844295187?q=white+shirt&prds=eto:12287566341067032726_0,pid:1982688263730612529&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIItRIoAA",
            "product_id": "1393462277844295187",
            "price_below_typical": "$0.50 below typical",
            "price_below_typical_extracted": 0.5,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95,
            "badge": "LOW PRICE"
        },
        {
            "position": 18,
            "docid": "2025197068797328762",
            "link": "https://www.google.com/shopping/product/6690579095179937893?q=white+shirt&prds=eto:2078313667505442906_0,pid:2025197068797328762,rsk:PC_14057595152691178460&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIyRI",
            "title": "BP. Solid Cotton Crewneck T-Shirt in White at Nordstrom, Size Small",
            "source": "Nordstrom",
            "price": "$19.00",
            "extracted_price": 19,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFV9YVQ6eFzlUNrkKBVYOOlZez0ijnnH6r_UTwsnd3GH2rKEV_6Ky5JsoUCaytf0bYUMgrnlR753S49v3B90i45rziUmLdgkM66clvV4Cg&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/6690579095179937893?q=white+shirt&prds=eto:2078313667505442906_0,pid:2025197068797328762,rsk:PC_14057595152691178460&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIxxIoAA",
            "product_id": "6690579095179937893",
            "rating": 5,
            "delivery_options": "Free delivery by Apr 5 & Free lifetime returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 19,
            "docid": "11108581399313471506",
            "link": "https://www.google.com/shopping/product/6304599330827226532?q=white+shirt&prds=eto:4036201292421672526_0,pid:11108581399313471506,rsk:PC_13243486392997943774&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII2xI",
            "title": "Women's Tailor-Fit Easy-Care Shirt White Petite Size 00",
            "source": "Banana Republic Factory",
            "price": "$42.00",
            "extracted_price": 42,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNL4zJfJmsDKXaaQHeXOutvkaf35_yWRPzgOD1ebbvKm_VB6Z0XRAyio4rxsUjER1OYSXg0pI60BZMF58IBCAiuc-TiykvBauwxFC9bgM&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/6304599330827226532?q=white+shirt&prds=eto:4036201292421672526_0,pid:11108581399313471506,rsk:PC_13243486392997943774&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII2BIoAA",
            "product_id": "6304599330827226532",
            "rating": 4.7,
            "delivery_options": "Delivery by Thu, Mar 30 · Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 20,
            "docid": "2339192471440251256",
            "link": "https://www.google.com/shopping/product/14356114629529077043?q=white+shirt&prds=eto:128385842949881933_0,pid:2339192471440251256,rsk:PC_108495809361655635&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII7BI",
            "title": "French Toast White Boys Short Sleeve Classic Dress Shirt",
            "source": "JCPenney",
            "price": "$14.56",
            "extracted_price": 14.56,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3Ydi6oPx2p-zMfWGfonyMgwYk1eRif_KpDJ9iilzyhXY2dZBlMk8UhLKkVJuIQm5QU1e_jIKhoWjYXJpK8FXb_LluaCkY1qKtZ71wHqgSp3ZA8XOA54Hqtg&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/14356114629529077043?q=white+shirt&prds=eto:128385842949881933_0,pid:2339192471440251256,rsk:PC_108495809361655635&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII6RIoAA",
            "product_id": "14356114629529077043",
            "rating": 4.3,
            "compare_prices_link": "https://www.google.com/shopping/product/14356114629529077043/offers?q=white+shirt&prds=eto:128385842949881933_0,pid:2339192471440251256,rsk:PC_108495809361655635&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECPMS",
            "compare_prices_text": "Compare prices from 5+ stores",
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95
        },
        {
            "position": 21,
            "docid": "8370271858160305009",
            "link": "https://www.google.com/shopping/product/15115262125728774789?q=white+shirt&prds=eto:13919188632607109994_0,pid:8370271858160305009&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII_BI",
            "title": "Aliexpress Armenia Korean Women Cotton Shirts White Shirt Women Long Sleeve ...",
            "source": "AliFa - Online store",
            "price": "$21.00",
            "extracted_price": 21,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFGGS4LbfveUWJsGnHLNwAnrnmtzeZnFBvxrVqoxKRK32u5JleWKJrvgjuEww196WkvynobQiE3CvAV3Ti3jjR71Sf1oQo-44tJ9SkJV4&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/15115262125728774789?q=white+shirt&prds=eto:13919188632607109994_0,pid:8370271858160305009&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII-RIoAA",
            "product_id": "15115262125728774789",
            "delivery_options": "Delivery by Wed, Apr 12"
        },
        {
            "position": 22,
            "docid": "14845850827661637337",
            "link": "https://www.google.com/url?url=https://www.walmart.com/ip/Huilaibazo-Men-Fashion-Casual-Top-Shirt-Solid-Color-Pocket-Single-Cotton-And-Linen-Shirt-Short-Sleeve-Top/1961436630%3Fwmlspartner%3Dwlpa%26selectedSellerId%3D101243733&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2SkIhxM&usg=AOvVaw3bHTzChnvN2uJEvG1SJtBk",
            "title": "Huilaibazo Men Fashion Casual Top Shirt Solid Color Pocket Single Cotton And ...",
            "source": "Walmart - Shenzhen Shi Ruruixiang Keji Youxian Gongsi",
            "price": "$17.19",
            "extracted_price": 17.19,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIrzHw_ylB5TMPuCUk-ztp6CiKB54vq9xx1Ni_BqOhNnBxcJ1kZmDgOTCh6ZElD9ZT0BShqkfHEAC3ulhBjUJZqOOaSd1D1w&usqp=CAE",
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 23,
            "docid": "9634173044157908657",
            "link": "https://www.google.com/shopping/product/5112945076658824428?q=white+shirt&prds=eto:17638433994675623499_0,pid:9634173044157908657,rsk:PC_4134743172443716232&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIkxM",
            "title": "Mens Charles Tyrwhitt Slim Fit Shirt - White",
            "source": "Charles Tyrwhitt US",
            "price": "$39.95",
            "extracted_price": 39.95,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRJiO5K1Q9G1QaYlKWJ9EeCNa7Mn9iIWvD162GZM1KErm8zQMJ1rHX0m06DHU7O7AdpFCThfrAnfQd3OzkTIlag7V_EsDLBmExD9sT3ECw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/5112945076658824428?q=white+shirt&prds=eto:17638433994675623499_0,pid:9634173044157908657,rsk:PC_4134743172443716232&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIkBMoAA",
            "product_id": "5112945076658824428",
            "rating": 4.4,
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 24,
            "docid": "2134476649410637091",
            "link": "https://www.google.com/shopping/product/16219106184274886508?q=white+shirt&prds=eto:996006201776903385_0,pid:2134476649410637091,rsk:PC_15215183318437316160&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIpBM",
            "title": "Lauren Ralph Lauren Men's UltraFlex Regular-Fit Dress Shirt - White",
            "source": "Macy's",
            "price": "$34.99",
            "extracted_price": 34.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiqKYSbP_YoNYPMRpcLEErghAKv8NwR9wBTi1JC_yyFrP-M2JI65tCqPIkWXWWrf-YV1sDG53DrgO4SZrMAYy9ca6fdVzcdMczQg5LR_MU3zhQCOdSGHbV&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16219106184274886508?q=white+shirt&prds=eto:996006201776903385_0,pid:2134476649410637091,rsk:PC_15215183318437316160&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIoRMoAA",
            "product_id": "16219106184274886508",
            "rating": 4.4,
            "price_below_typical": "$16.01 below typical",
            "price_below_typical_extracted": 16.01,
            "delivery_options": "$10.95 delivery · Free 90-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "LOW PRICE"
        },
        {
            "position": 25,
            "docid": "3215237368161965319",
            "link": "https://www.google.com/shopping/product/18108969065258499767?q=white+shirt&prds=eto:1873569159670884433_0,pid:3215237368161965319,rsk:PC_902475728329229139&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIItBM",
            "title": "6 Pack Knocker Men's 100% Cotton White A-Shirts (Sizes S-3XL) M White 3XL",
            "source": "Groupon.com",
            "price": "$19.99",
            "extracted_price": 19.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmZx2rPqrc8gfbpe6hSRaQmDcZADcsvEgolBRqP9uEOl0aqZDVWxYthKVZRNbfBGqwC0MFfKTaIcpKCJxXeFUML1IRqhPE&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/18108969065258499767?q=white+shirt&prds=eto:1873569159670884433_0,pid:3215237368161965319,rsk:PC_902475728329229139&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIsRMoAA",
            "product_id": "18108969065258499767",
            "rating": 3.8,
            "compare_prices_link": "https://www.google.com/shopping/product/18108969065258499767/offers?q=white+shirt&prds=eto:1873569159670884433_0,pid:3215237368161965319,rsk:PC_902475728329229139&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECLsT",
            "compare_prices_text": "Compare prices from 2 stores",
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 26,
            "docid": "2376199098373877352",
            "link": "https://www.google.com/shopping/product/6254237308338962118?q=white+shirt&prds=eto:14497665440180485178_0,pid:2376199098373877352&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIxhM",
            "title": "Women's Sonoma Goods for Life Everyday V-Neck Tee, Size: Medium, White",
            "source": "Kohl's",
            "price": "$7.99",
            "extracted_price": 7.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs2fZUhid8RwZudvwuBHeOi92Z9McXKMs8cwL1PRBxaRPafQ5nt4xPHpsaAWfiHwTbNokf3WU7aPnfpg0mw3yDAYmzTXEcFgbkgqtpWDDb&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/6254237308338962118?q=white+shirt&prds=eto:14497665440180485178_0,pid:2376199098373877352&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIwxMoAA",
            "product_id": "6254237308338962118",
            "price_below_typical": "$0.50 below typical",
            "price_below_typical_extracted": 0.5,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95,
            "badge": "LOW PRICE"
        },
        {
            "position": 27,
            "docid": "8020786190347344080",
            "link": "https://www.google.com/shopping/product/14605799800862003496?q=white+shirt&prds=eto:14896517888442912376_0,pid:8020786190347344080,rsk:PC_16757305493194831997&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII2BM",
            "title": "5XL Bigdude Men's Classic Long Sleeve Poplin Shirt White by Big Dude Clothing",
            "source": "Bigdude USA",
            "price": "$24.99",
            "extracted_price": 24.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7_8B135gakdtW-L2bXiz4Bz8D2pOcY20d5txp9h7Ullpbgkc7UiQCnubjgjvThuoT6xc6fSzfv5mDqoL7sAjOTrk3pp6fpNwcB5KPMVvTLjrQrG3R0KEa&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/14605799800862003496?q=white+shirt&prds=eto:14896517888442912376_0,pid:8020786190347344080,rsk:PC_16757305493194831997&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII1RMoAA",
            "product_id": "14605799800862003496",
            "rating": 5,
            "delivery_options": "Delivery by Wed, Apr 12"
        },
        {
            "position": 28,
            "docid": "18112284906479821299",
            "link": "https://www.google.com/shopping/product/5965671957829917312?q=white+shirt&prds=eto:8060327748316807883_0,pid:18112284906479821299&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII5RM",
            "title": "NY&Co Women's Linen-Blend Boyfriend Button-Front - Madison Shirt White | Size Xs ...",
            "source": "New York & Company",
            "price": "$34.97",
            "extracted_price": 34.97,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMIo-d3kldfm-PU4q9kYAXOH55Yn-0RcnRzS9w9k10V3ToGZ9nJO5ErPN_EDfmQFETuIC1QGwJSinTXdVVvVHvwpizkT1ZVvB4hwudweBZTLbMh787l_IY&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/5965671957829917312?q=white+shirt&prds=eto:8060327748316807883_0,pid:18112284906479821299&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII4hMoAA",
            "product_id": "5965671957829917312",
            "delivery_options": "Delivery by Tue, Apr 4"
        },
        {
            "position": 29,
            "docid": "4348551781861098190",
            "link": "https://www.google.com/shopping/product/5497930529700146198?q=white+shirt&prds=eto:3927975725701309457_0,pid:4348551781861098190,rsk:PC_4057224304601964573&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII8xM",
            "title": "The Shirt by Rochelle Behrens - The Essentials Icon Shirt - White XL",
            "source": "Tuckernuck",
            "price": "$98.00",
            "extracted_price": 98,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsxlu0ZM2b8V-7OaIm1MHPaz0lj_1n72nys2fSmkrXMeWpDmttqM82Bgy4BcRrw4ECJIcecnPHDSihmTWh28ov5MRVIyD9sYAU8xt6xHNqtqKr0LhUag3w&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/5497930529700146198?q=white+shirt&prds=eto:3927975725701309457_0,pid:4348551781861098190,rsk:PC_4057224304601964573&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII8BMoAA",
            "product_id": "5497930529700146198",
            "rating": 4.8,
            "compare_prices_link": "https://www.google.com/shopping/product/5497930529700146198/offers?q=white+shirt&prds=eto:3927975725701309457_0,pid:4348551781861098190,rsk:PC_4057224304601964573&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECP0T",
            "compare_prices_text": "Compare prices from 3 stores",
            "delivery_options": "Free delivery & Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 30,
            "docid": "287875150762766904",
            "link": "https://www.google.com/shopping/product/3189942794727958941?q=white+shirt&prds=eto:10411880632516206744_0,pid:287875150762766904&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIhhQ",
            "title": "right_brands_store Silk Formal Shirts for Women Women White Shirt Women Long ...",
            "source": "DHgate online store",
            "price": "$14.80",
            "extracted_price": 14.8,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNNxekxMa9wl55V2t3MwKBgQAocs0c_GUU5oFO2X-HM5MM3uPJhOjR6PMF1yoAdu-R1m6V1koHCKKix1FMpV8PMg0xFZ4K1wJ3s8kKal_q&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/3189942794727958941?q=white+shirt&prds=eto:10411880632516206744_0,pid:287875150762766904&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIgxQoAA",
            "product_id": "3189942794727958941",
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 31,
            "docid": "1806419483269955181",
            "link": "https://www.google.com/shopping/product/10558138492027815384?q=white+shirt&prds=eto:14662426916519947029_0,pid:1806419483269955181&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIkRQ",
            "title": "Stylewe Women Plain Spring Elegant Natural Daily Regular Fit Long Sleeve Regular ...",
            "source": "StyleWe",
            "price": "$29.99",
            "extracted_price": 29.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQR23uu_5WEpoZjOhJa56HNTdApTlRiog295aEV6oZEZIUJ6bdpeMyPFwFRdk7WPzk0HOO0i2IcmYPoWBfPhP0EybbeCXs2gf4PERGAZBs&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/10558138492027815384?q=white+shirt&prds=eto:14662426916519947029_0,pid:1806419483269955181&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIjxQoAA",
            "product_id": "10558138492027815384",
            "delivery_options": "Delivery by Fri, Apr 21"
        },
        {
            "position": 32,
            "docid": "10250387873388258600",
            "link": "https://www.google.com/shopping/product/13972046817449433351?q=white+shirt&prds=eto:14553498593517499513_0,pid:10250387873388258600&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIInxQ",
            "title": "Hunpta Shirts for Men Male Casual Solid Shirt Short Sleeve Turn Down Collar Shirt ...",
            "source": "Walmart - Taiyuaneyouguanwangluokejiyouxiangongsi",
            "price": "$17.29",
            "extracted_price": 17.29,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhy8cBIZ-1zTgZfo20XqT-4tfnj-YDFnTKsUpgIYlDgLKpNYxTdaFI7FwabilTk2swImLzvoDlNWWc46MqcbhfuA30Gm234g&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/13972046817449433351?q=white+shirt&prds=eto:14553498593517499513_0,pid:10250387873388258600&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIInBQoAA",
            "product_id": "13972046817449433351",
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 33,
            "docid": "734582215759156433",
            "link": "https://www.google.com/shopping/product/8072782672421686995?q=white+shirt&prds=eto:619575224366130756_0,pid:734582215759156433,rsk:PC_11885917504570894863&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIqhQ",
            "title": "Men's Stand Collar Casual Solid Color Short Sleeve Shirt, White / M",
            "source": "Atlanl",
            "price": "$28.99",
            "extracted_price": 28.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUeCaVeYokSsznJ985E9D8osuLOlXgrAZyKDWf1Vnm-9d2Yp-D13ZpbYg05kkrdFaVfmqPotnPy0-75h4S-2IBp4Pzum0OA2jaei6YoXZLTNBXuFU1oBUFGw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/8072782672421686995?q=white+shirt&prds=eto:619575224366130756_0,pid:734582215759156433,rsk:PC_11885917504570894863&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIqBQoAA",
            "product_id": "8072782672421686995",
            "rating": 2.5,
            "delivery_options": "Delivery by Sun, Apr 9"
        },
        {
            "position": 34,
            "docid": "4805092058706269960",
            "link": "https://www.google.com/shopping/product/7152135891599803621?q=white+shirt&prds=eto:17115636573538340944_0,pid:4805092058706269960&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIItxQ",
            "title": "White Long Sleeve 3 Button Down | Color: White | Size: XL | Haleyhoops00's Closet",
            "source": "Poshmark",
            "price": "$10.00",
            "extracted_price": 10,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDuoxcuRzDrtCpMnrKIgPwKIRNbiwQjusqeP8ATCp7q6nCMRcDYZsuzNJDHUE2eentf5icuQnrC6rOXhscaQXWtktJBXEtmM2QpWyGVPI&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7152135891599803621?q=white+shirt&prds=eto:17115636573538340944_0,pid:4805092058706269960&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIItBQoAA",
            "product_id": "7152135891599803621",
            "delivery_options": "$7.97 delivery",
            "delivery_options_extracted_price": 7.97
        },
        {
            "position": 35,
            "docid": "14676158595796164916",
            "link": "https://www.google.com/shopping/product/4548538034805959948?q=white+shirt&prds=eto:6444675671600022351_0,pid:14676158595796164916,rsk:PC_9560054049041731808&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIyBQ",
            "title": "ASOS Design Formal Skinny Fit Oxford Shirt with Double Cuff in White",
            "source": "ASOS",
            "price": "$40.00",
            "extracted_price": 40,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8rwOD4PCkpzlkAj0ABncahfhQsMxBEyfWJWpyAPfpR7joSA7sR5HAXXBGvaAPYhIAvJS2_tH01IOQe3yVshVpl9mcHRsloybDOGFOh7kHSAY-tjIi0ZP2DQ&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/4548538034805959948?q=white+shirt&prds=eto:6444675671600022351_0,pid:14676158595796164916,rsk:PC_9560054049041731808&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIxRQoAA",
            "product_id": "4548538034805959948",
            "rating": 3.8,
            "delivery_options": "Delivery by Mon, Apr 10 · Free 28-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "25% OFF"
        },
        {
            "position": 36,
            "docid": "13140849743332830037",
            "link": "https://www.google.com/shopping/product/7233439617469579010?q=white+shirt&prds=eto:7663183532545176144_0,pid:13140849743332830037&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII2hQ",
            "title": "Women's Sonoma Goods for Life Everyday Crewneck Long Sleeve Tee, Size: Small, White",
            "source": "Kohl's",
            "price": "$7.99",
            "extracted_price": 7.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGREI7rhIqHM82O1ieQif-gWubd_VhYkxrCuPBhTGAy6NWmE09s90IeZ8w2jDLc-jI7E7O6eoTktfHPRF8SaQ8S1_Vsxbyfvi19TPTJDAFgTwURXXlVi8ADg&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7233439617469579010?q=white+shirt&prds=eto:7663183532545176144_0,pid:13140849743332830037&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII1xQoAA",
            "product_id": "7233439617469579010",
            "price_below_typical": "$2.00 below typical",
            "price_below_typical_extracted": 2,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95,
            "badge": "LOW PRICE"
        },
        {
            "position": 37,
            "docid": "1856924480624848432",
            "link": "https://www.google.com/shopping/product/7888464568497364599?q=white+shirt&prds=eto:13940969000594224760_0,pid:1856924480624848432,rsk:PC_14660914863788540513&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII8BQ",
            "title": "Happo Long-Sleeve Plain Shirt White L",
            "source": "YesStyle.com",
            "price": "$15.10",
            "extracted_price": 15.1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhBOwQGjzzUl6ictkU779ZGJ5hycIMpAfjvUqp-ejxGfORiUIyIRElc5ByrLLwCdPkfD9xcGijF4Xosf0vJRrCcnAO2eJ4zNG-XGSh7Q4&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7888464568497364599?q=white+shirt&prds=eto:13940969000594224760_0,pid:1856924480624848432,rsk:PC_14660914863788540513&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII7RQoAA",
            "product_id": "7888464568497364599",
            "rating": 4.3,
            "delivery_options": "Delivery by Wed, Apr 12",
            "badge": "20% OFF"
        },
        {
            "position": 38,
            "docid": "14563046177728481923",
            "link": "https://www.google.com/shopping/product/13095213885104827086?q=white+shirt&prds=eto:13097311078067082398_0,pid:14563046177728481923&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIgBU",
            "title": "Express Satin Relaxed Portofino Shirt White Women's L",
            "source": "Express",
            "price": "$50.00",
            "extracted_price": 50,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiTxW_N19hbCJL6bae3ZSzZJOyQbjtQ7i_iioVzju8VCnpbHtX7Jn-oLD2FvqacngEVeCpcohKn_XuhvO-_dlhjU15BY38&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/13095213885104827086?q=white+shirt&prds=eto:13097311078067082398_0,pid:14563046177728481923&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII_RQoAA",
            "product_id": "13095213885104827086",
            "delivery_options": "$8.00 delivery · Free 60-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 39,
            "docid": "4834090222730155254",
            "link": "https://www.google.com/shopping/product/5384525941209964712?q=white+shirt&prds=eto:723212382156234710_0,pid:4834090222730155254,rsk:PC_14436726884713825327&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIkBU",
            "title": "Forever 21 Women's Basic Organically Grown Cotton T-Shirt in White Large | F21",
            "source": "Forever 21",
            "price": "$4.99",
            "extracted_price": 4.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7OMiqB0_zplmGE-AD8ZVPVL0ZzsvWpXOqfdOwvJZ8Re62SuN0vSC3-DXNgYZJVa3fiHnci6HQXIGqh9uTZwPho7NLLtg2H8WnkNqCjdQXiXJjOIPD_tlX&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/5384525941209964712?q=white+shirt&prds=eto:723212382156234710_0,pid:4834090222730155254,rsk:PC_14436726884713825327&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIjRUoAA",
            "product_id": "5384525941209964712",
            "rating": 3.4,
            "delivery_options": "Delivery by Mon, Apr 3"
        },
        {
            "position": 40,
            "docid": "8681549164975046147",
            "link": "https://www.google.com/shopping/product/7788021018108146502?q=white+shirt&prds=eto:18376192038635489599_0,pid:8681549164975046147,rsk:CID_7788021018108146502&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIoBU",
            "title": "SuitShop Men's Classic White Dress Shirt",
            "source": "The Suit Shop",
            "price": "$49.00",
            "extracted_price": 49,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRP3iSQAnrWKvstSQtIbKBWgwyrSCT6neQ6W1GLevQp0CSsIqzOoIDYdaxtWeGnpKbNsoE4_sUKqdxM-ex7MCXjCrPZqB5nkSP866pkB78kLogHP-4Easv2&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7788021018108146502?q=white+shirt&prds=eto:18376192038635489599_0,pid:8681549164975046147,rsk:CID_7788021018108146502&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIInRUoAA",
            "product_id": "7788021018108146502",
            "rating": 4.3,
            "delivery_options": "Free delivery by Apr 5 & Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 41,
            "docid": "7486525363203532197",
            "link": "https://www.google.com/shopping/product/1227742732705028901?q=white+shirt&prds=eto:15094747537205296462_0,pid:7486525363203532197&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIrxU",
            "title": "Lightinthebox Men's Shirt Button Up Shirt Casual Shirt White Long Sleeve Plain ...",
            "source": "LightInTheBox",
            "price": "$16.99",
            "extracted_price": 16.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxvwCwjvpRiyCur3vGrrXBXxY4EV5Oo8m3dRnMePRrSfXxR8xwyWYimBUzL40b22nLqb3domSyEGgH54ajy4uoILCCohLGYos4XDUzpEw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1227742732705028901?q=white+shirt&prds=eto:15094747537205296462_0,pid:7486525363203532197&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIrBUoAA",
            "product_id": "1227742732705028901",
            "delivery_options": "$6.69 delivery",
            "delivery_options_extracted_price": 6.69
        },
        {
            "position": 42,
            "docid": "12633662695063856261",
            "link": "https://www.google.com/shopping/product/12429455016553039402?q=white+shirt&prds=eto:2675551290501100804_0,pid:12633662695063856261&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIvRU",
            "title": "Banana Republic Factory Men's Slim Untucked Shirt White Regular Size L",
            "source": "Banana Republic Factory",
            "price": "$45.00",
            "extracted_price": 45,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReVpRX1PNi9FZS8EtSAnBo_1CxLwnEULCqv8DQ-H7HUNINDkX2B5pmB1xCxPCUTFuO94CBnIyjq9Z3vfx1yYA5qb6FylWb5CVulAEf6hg&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/12429455016553039402?q=white+shirt&prds=eto:2675551290501100804_0,pid:12633662695063856261&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIuhUoAA",
            "product_id": "12429455016553039402",
            "delivery_options": "Delivery by Thu, Mar 30 · Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 43,
            "docid": "12231978681436821387",
            "link": "https://www.google.com/shopping/product/2592592209300927967?q=white+shirt&prds=eto:17699752287691233744_0,pid:12231978681436821387,rsk:PC_2874064610080019180&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIzRU",
            "title": "Joseph Abboud Men's Modern Fit Spread Collar Dress Shirt White - Size: 17 1/2 32/33",
            "source": "Men's Wearhouse",
            "price": "$19.99",
            "extracted_price": 19.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZycqlPjXknart--6JjaE6IqKgIqlJLkHQloUPo0Ha-1HCTSA0hEX_0_i7_nlwYyl98bCTAVo6klKRTc6lXO2__DCS3ze5OtQQZsJiG6H-&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/2592592209300927967?q=white+shirt&prds=eto:17699752287691233744_0,pid:12231978681436821387,rsk:PC_2874064610080019180&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIyhUoAA",
            "product_id": "2592592209300927967",
            "rating": 3.5,
            "delivery_options": "Delivery by Fri, Mar 31 · Free 90-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 44,
            "docid": "10613452645579565849",
            "link": "https://www.google.com/shopping/product/6172569275939846479?q=white+shirt&prds=eto:15328444278667668881_0,pid:10613452645579565849&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII4BU",
            "title": "Loft Clip Ruffle Shirt Size Small Whisper White Women's",
            "source": "LOFT",
            "price": "$39.17",
            "extracted_price": 39.17,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSL9DqoPczJQnpIlH9qzlPw6g2gfH-5Eeq4VJ0Fz3kCYmcPDUVdEXeTRotGQUdTbwNjMixPFeWn8m-dBW0S83wc-DxKgscXiQ2Wqx-WgJG-C2ZMX-e04VK3Lw&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/6172569275939846479?q=white+shirt&prds=eto:15328444278667668881_0,pid:10613452645579565849&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII3RUoAA",
            "product_id": "6172569275939846479",
            "price_below_typical": "$9.79 below typical",
            "price_below_typical_extracted": 9.79,
            "delivery_options": "Delivery by Mon, Apr 3 · Free 30-day returns",
            "delivery_options_extracted_price": 0,
            "badge": "LOW PRICE"
        },
        {
            "position": 45,
            "docid": "12772650008517689191",
            "link": "https://www.google.com/url?url=https://www.ouku.com/p/men-s-dress-shirt-solid-colored-stand-collar-street-casual-button-down-long-sleeve-tops-casual-fashion-breathable-comfortable-white-gray-khaki-summer_p9282547.html%3Fcurrency%3DUSD%26litb_from%3Dpaid_adwords_shopping%26sku%3D1_36%257C2_288%26country_code%3DUS%26srsltid%3DAd5pg_H6nugyP9TYda2U1OuJTPyTzro3SsEAtdtpD-HXsx7NZOxGWzmPaKA&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2SkI8BU&usg=AOvVaw3iAUv7MOTGi_-Hm6JIpLEs",
            "title": "Men's Dress Shirt Solid Colored Stand Collar Street Casual Button-Down Long ...",
            "source": "OUKU.com",
            "price": "$18.69",
            "extracted_price": 18.69,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbKfJtXhwr3nep9xUWdvE_u8AyV4pDnqy44dIjNy5sCzxspGzGmpfczWtGG_fEvvYFZ7qQm4DZtdzJPwXq9LaxPegrMM-fA5BcY3d51mXbf3hub0dm5iuUmw&usqp=CAE",
            "delivery_options": "$6.63 delivery",
            "delivery_options_extracted_price": 6.63
        },
        {
            "position": 46,
            "docid": "7204911166330945446",
            "link": "https://www.google.com/shopping/product/15145530460196678208?q=white+shirt&prds=eto:1829984039273528613_0,pid:7204911166330945446,rsk:PC_8491506835102516346&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII_BU",
            "title": "Boyfriend Shirt - White - x - 100% Cotton Talbots",
            "source": "Talbots",
            "price": "$99.50",
            "extracted_price": 99.5,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmya7t7c9Ea26vvtsMZSyJ208so6NS1rtodaV0aHXGB8RueM8yckoqjsc1Ya5wD_6X1S2cM3hxEB7DxZqTJHp9pDA6nTdLMpARAPr0eoA&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/15145530460196678208?q=white+shirt&prds=eto:1829984039273528613_0,pid:7204911166330945446,rsk:PC_8491506835102516346&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII-RUoAA",
            "product_id": "15145530460196678208",
            "rating": 2.8,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95
        },
        {
            "position": 47,
            "docid": "188575811089069572",
            "link": "https://www.google.com/shopping/product/11244407705529289171?q=white+shirt&prds=eto:14165070050227169935_0,pid:188575811089069572&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIihY",
            "title": "NY&Co Women's Maxi Button-Front - Madison Shirt White | Size Large Spandex ...",
            "source": "New York & Company",
            "price": "$34.97",
            "extracted_price": 34.97,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRllUD0qPiNeUws1dmcsjyMguI3eR-dS4L4ZjmiCy0YqBZVRUW6wQrgfi02e3s0XUCDiuJOYHwRbEr9JhmIcM1GlvA3zT0jK4pbHJvrbW-QFdS4WOgpCmzGQ&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/11244407705529289171?q=white+shirt&prds=eto:14165070050227169935_0,pid:188575811089069572&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIiBYoAA",
            "product_id": "11244407705529289171",
            "delivery_options": "Delivery by Tue, Apr 4"
        },
        {
            "position": 48,
            "docid": "15287922837964215265",
            "link": "https://www.google.com/shopping/product/16524031972534025880?q=white+shirt&prds=eto:14625240251756011737_0,pid:15287922837964215265&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIImBY",
            "title": "Cotton on Women - The 91 Classic Organic Tee - White",
            "source": "Cotton On",
            "price": "$24.99",
            "extracted_price": 24.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS49u_eQqRbE_7JetefAHMEz0JGG9QLrNKKfSDWkAqTg7oBpYv38fGap_JooiRjzPMvCdMLfxcfKxSpAUYGxzbr1JyEEBHtyI2KlSa8HbvUAflIyPt20q-VxA&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16524031972534025880?q=white+shirt&prds=eto:14625240251756011737_0,pid:15287922837964215265&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIlRYoAA",
            "product_id": "16524031972534025880",
            "delivery_options": "Delivery est. by Mar 30 · Free lifetime returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 49,
            "docid": "13788062126905203176",
            "link": "https://www.google.com/shopping/product/16996334470102806575?q=white+shirt&prds=eto:11220461496606913456_0,pid:13788062126905203176,rsk:PC_7048977599991811844&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIqBY",
            "title": "Club Room Men's Slim Fit 4-Way Stretch Solid Dress Shirt, Created for Macy's ...",
            "source": "Macy's",
            "price": "$24.99",
            "extracted_price": 24.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMuTqzroD-w0qyfNW5YwqgLuRsot846zsBKFYmr27QRkc5ny1zCw42rPjccVC0KunDdu1bzC0YM30apQ-ZIYAYVKK2irRqFcSt4dyCEFB_&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16996334470102806575?q=white+shirt&prds=eto:11220461496606913456_0,pid:13788062126905203176,rsk:PC_7048977599991811844&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIpRYoAA",
            "product_id": "16996334470102806575",
            "rating": 4.1,
            "delivery_options": "$10.95 delivery · Free 90-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 50,
            "docid": "7272074061790451144",
            "link": "https://www.google.com/shopping/product/1861219518889968998?q=white+shirt&prds=eto:9470359138102649044_0,pid:7272074061790451144&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIuhY",
            "title": "St. John's Bay No Tuck Stretch Mens Regular Fit Short Sleeve Button-Down Shirt ...",
            "source": "JCPenney",
            "price": "$20.99",
            "extracted_price": 20.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9DfL-rQ1p1P8aaX4awHk6Hb-bb4dxwlsOuBv0Motkx9ixLjVAK2oyRQ6DDH9m20r0OBPkwzN8_Pib8DDVIUJBe-AUUFoG&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1861219518889968998?q=white+shirt&prds=eto:9470359138102649044_0,pid:7272074061790451144&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIItxYoAA",
            "product_id": "1861219518889968998",
            "price_below_typical": "$3.00 below typical",
            "price_below_typical_extracted": 3,
            "delivery_options": "$8.95 delivery",
            "delivery_options_extracted_price": 8.95,
            "badge": "LOW PRICE"
        },
        {
            "position": 51,
            "docid": "5170839272850908823",
            "link": "https://www.google.com/shopping/product/9659406250196633760?q=white+shirt&prds=eto:6834799560089252790_0,pid:5170839272850908823,rsk:PC_1705178201639473559&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIyRY",
            "title": "Jos. A. Bank Men's Reserve Collection Tailored Fit Spread Collar Tuxedo Formal ...",
            "source": "Jos. A. Bank",
            "price": "$59.00",
            "extracted_price": 59,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkpUcI3HKsjBOMyVHv1DX057RIAoeYJr8pxJIA560eByE_iqSE_cNO3aklMHx-PTloAvy85FL-odxboDKzVkL3SHhbgAg1WMq_92ctnYUp-YY0vBW6MKPG1w&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/9659406250196633760?q=white+shirt&prds=eto:6834799560089252790_0,pid:5170839272850908823,rsk:PC_1705178201639473559&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIxhYoAA",
            "product_id": "9659406250196633760",
            "rating": 3.9,
            "delivery_options": "Free delivery & Free 90-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 52,
            "docid": "17963098287433452423",
            "link": "https://www.google.com/shopping/product/14086577802239800474?q=white+shirt&prds=eto:4305886385602547301_0,pid:17963098287433452423&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII2RY",
            "title": "H2h Mens Wrinkle Free Slim Fit Dress Shirts, JASK14_WHITE, US M Asia L",
            "source": "Amazon.com - Seller",
            "price": "$26.99",
            "extracted_price": 26.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdiIdMwJWD-K6wMaKbYXJmwtDfND1UA-5dENQu9pJz3eE6WwiKZI9jvH_KYVJREzZhuqa5xyqj_nBF1BPQaOxWlVrdrZ87IiOU17FZ9G0&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/14086577802239800474?q=white+shirt&prds=eto:4305886385602547301_0,pid:17963098287433452423&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII1hYoAA",
            "product_id": "14086577802239800474",
            "delivery_options": "Free delivery",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 53,
            "docid": "5531638120199379758",
            "link": "https://www.google.com/shopping/product/2029648893578083567?q=white+shirt&prds=eto:12241180761464609034_0,pid:5531638120199379758&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII6BY",
            "title": "Commense Charlotte Oversized Button Up Collared Shirt - White - S",
            "source": "Commense",
            "price": "$36.00",
            "extracted_price": 36,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSzarB1kGaazokIir6bAx2KZMnO9vLe6l2RUiGAUapR-y_IJ6QYL9mZET9sY3Ldu28t8c5320y3XMP_SYK5KpzlpZYaxT-hQQ_m1OjCgI&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/2029648893578083567?q=white+shirt&prds=eto:12241180761464609034_0,pid:5531638120199379758&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII5RYoAA",
            "product_id": "2029648893578083567",
            "delivery_options": "Delivery by Thu, Apr 13"
        },
        {
            "position": 54,
            "docid": "12154335074600289361",
            "link": "https://www.google.com/shopping/product/13885451262490056178?q=white+shirt&prds=eto:14102957377637093151_0,pid:12154335074600289361&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII9BY",
            "title": "Zara - 100% Linen Shirt - White - Female",
            "source": "Zara USA",
            "price": "$45.90",
            "extracted_price": 45.9,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5x0pXNJPC34y9S4aDvkZzNj-9I5qticT5M9F3HIZ_puoldUvtGibfhefBXvZOpZYxgauBzdRre7QQ6MXjmFVrHFDblycY5fQSRLVz9w01PINjclxRK1oRD-w&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/13885451262490056178?q=white+shirt&prds=eto:14102957377637093151_0,pid:12154335074600289361&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII8RYoAA",
            "product_id": "13885451262490056178",
            "delivery_options": "Delivery by Mon, Apr 3 · Free 30-day returns",
            "delivery_options_extracted_price": 0
        },
        {
            "position": 55,
            "docid": "11799827812296028701",
            "link": "https://www.google.com/shopping/product/9653474472020800231?q=white+shirt&prds=eto:1319122114908763671_0,pid:11799827812296028701,rsk:PC_3157571803509274247&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIiRc",
            "title": "Women's Cute and Clever Poplin Shirt in White Size Small by Fashion Nova",
            "source": "Fashion Nova",
            "price": "$23.99",
            "extracted_price": 23.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVs3kuzcAphLvARiX1R1NJT8LWKLZxz6Yn9iDI4R9rdxKXzHKRYy-VuAhtuiSA6XPCXuJbshUCINWd838uCi2Yzg7PUE2kETDBkrbkSwszG6GTt9YLML_G&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/9653474472020800231?q=white+shirt&prds=eto:1319122114908763671_0,pid:11799827812296028701,rsk:PC_3157571803509274247&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIhhcoAA",
            "product_id": "9653474472020800231",
            "rating": 3.7,
            "delivery_options": "Delivery by Fri, Mar 31",
            "badge": "SPECIAL OFFER"
        },
        {
            "position": 56,
            "docid": "7731734095928377663",
            "link": "https://www.google.com/shopping/product/10387640226633099492?q=white+shirt&prds=eto:7904316962310704137_0,pid:7731734095928377663&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIImRc",
            "title": "Nordstrom Rack Non-Iron Trim Fit Dress Shirt in White at Nordstrom Rack, Size 16 ...",
            "source": "Nordstrom Rack",
            "price": "$29.97",
            "extracted_price": 29.97,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHQPMn1UlSbxLWz0yBirnXgWndHo9plLwdSBTJS_mLRbLgEVOBTPro2lriu2EZT8MWGUtJm9St4AGnnJTD2SKId096hBCEWM1TxEAqomDufPsVyK3T88qb&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/10387640226633099492?q=white+shirt&prds=eto:7904316962310704137_0,pid:7731734095928377663&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIlhcoAA",
            "product_id": "10387640226633099492",
            "delivery_options": "$9.95 delivery",
            "delivery_options_extracted_price": 9.95
        },
        {
            "position": 57,
            "docid": "3364917381248373527",
            "link": "https://www.google.com/shopping/product/12040015626407842416?q=white+shirt&prds=eto:43319506908533084_0,pid:3364917381248373527,rsk:PROD_VAR_5046647196979995&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIqhc",
            "title": "J.Crew Factory Men's Slim Performance Dress Shirt (White, Size X-Small)",
            "source": "J.Crew Factory",
            "price": "$49.50",
            "extracted_price": 49.5,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeP9aC7_fxkINrjzHkGZWCgYzJLv2wciGmgRb0A-Crri--raywxAY5SUkGGwvSWSmZxgRHhKL4Ko93faMKBXe5EefgDvqaFFklQflLiTA&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/12040015626407842416?q=white+shirt&prds=eto:43319506908533084_0,pid:3364917381248373527,rsk:PROD_VAR_5046647196979995&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIpxcoAA",
            "product_id": "12040015626407842416",
            "rating": 3.9,
            "delivery_options": "$7.00 delivery",
            "delivery_options_extracted_price": 7
        },
        {
            "position": 58,
            "docid": "10980037272377232115",
            "link": "https://www.google.com/shopping/product/16469514457795268825?q=white+shirt&prds=eto:7334982568465677426_0,pid:10980037272377232115,rsk:PC_12392381402848570509&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIItxc",
            "title": "Men's Dress Shirt - Button Down in White Long Sleeve Cotton Broadcloth | Paul ...",
            "source": "Paul Fredrick",
            "price": "$69.00",
            "extracted_price": 69,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQy2NmsG2CTjTLo4xQvlJJEWEjPlcmkXP7iZDTfGDXuI0TBobY9CV7-9cc4bcBE9Ka6uw36LF14SPd7HejUj5jfKxHFqcLsDammFrjMlrsQ3P_HfjBWBtQ_&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16469514457795268825?q=white+shirt&prds=eto:7334982568465677426_0,pid:10980037272377232115,rsk:PC_12392381402848570509&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIItBcoAA",
            "product_id": "16469514457795268825",
            "rating": 4.6,
            "delivery_options": "Delivery by Mon, Apr 3"
        },
        {
            "position": 59,
            "docid": "6003544617337403944",
            "link": "https://www.google.com/shopping/product/6282583925949297257?q=white+shirt&prds=eto:9754184151869207528_0,pid:6003544617337403944&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIyRc",
            "title": "Amazon Essentials Men's Regular-Fit Long-Sleeve Casual Poplin Shirt",
            "source": "Poshmark",
            "price": "$20.00",
            "extracted_price": 20,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRrUpyX-3ybkh1vSlLEXEENHFGtZEOmmZkruXp4epQGnBrbhXSap64peCavZmhuI6r7xx6dfG9D13bVMqlv7WgS0y1pVEPMfkcj4kjML_v3&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/6282583925949297257?q=white+shirt&prds=eto:9754184151869207528_0,pid:6003544617337403944&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIxhcoAA",
            "product_id": "6282583925949297257",
            "compare_prices_link": "https://www.google.com/shopping/product/6282583925949297257/offers?q=white+shirt&prds=eto:9754184151869207528_0,pid:6003544617337403944&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECM0X",
            "compare_prices_text": "Compare prices from 2 stores",
            "delivery_options": "Delivery by Sat, Apr 1"
        },
        {
            "position": 60,
            "docid": "6518060118775101211",
            "link": "https://www.google.com/shopping/product/16743738123177500303?q=white+shirt&prds=eto:5053575314117540540_0,pid:6518060118775101211&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII1Rc",
            "title": "Stylewe Women Plain Spring Fall Urban Daily Regular Fit Long Sleeve H-Line ...",
            "source": "StyleWe",
            "price": "$29.74",
            "extracted_price": 29.74,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJXDD11yNxxYcVZ9KEADPWaomSpcsdRp8QgWRKJXGctcBcTX74H0QzfBUEJq15XhnoTZ2QTbUTDvAK-bic0wijA-0R9lvtag5fcrTcqEqR&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16743738123177500303?q=white+shirt&prds=eto:5053575314117540540_0,pid:6518060118775101211&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII0xcoAA",
            "product_id": "16743738123177500303",
            "delivery_options": "Delivery by Fri, Apr 21"
        },
        {
            "position": 61,
            "docid": "11072543342418915372",
            "link": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII6xc",
            "title": "Gildan Heavy Cotton T-Shirt - M / White",
            "source": "Presshall.com",
            "price": "$2.49",
            "extracted_price": 2.49,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLK70VF8mTzDJGkL89oCFQA8YZepXm_eVmo4_3ayRVcnCeuFjDJ3RRW7Da5GD8L1N0MvyHXKKTBnAxjNd-teKrRYooAtKd5wxDtxnHSVob&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII6BcoAA",
            "product_id": "1466157075227512336",
            "rating": 4.8,
            "delivery_options": "Delivery by tomorrow"
        },
        {
            "position": 62,
            "docid": "17775188269255296523",
            "link": "https://www.google.com/shopping/product/739442230264077321?q=white+shirt&prds=pid:17775188269255296523,rsk:PC_829300769705414342&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wII_Rc",
            "title": "Gildan Men's Ultra Cotton Short-Sleeve T-Shirt, White, Small",
            "source": "Presshall.com",
            "price": "$3.09",
            "extracted_price": 3.09,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcsnwvtwJ_AN6CTlbUmaELM6rZvCX90r8M7G8UHu92av48jl4AVDdFbsJ9vCqVrPWL4Yq2oABZ6IPjuchfjOJuA3JjWiP8YUAt22zHXb0lSojn8DOI0lKC&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/739442230264077321?q=white+shirt&prds=pid:17775188269255296523,rsk:PC_829300769705414342&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gII-xcoAA",
            "product_id": "739442230264077321",
            "rating": 4.7,
            "delivery_options": "Delivery by tomorrow"
        },
        {
            "position": 63,
            "docid": "1881942675620844003",
            "link": "https://www.google.com/shopping/product/7129493342720317301?q=white+shirt&prds=pid:1881942675620844003&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIkBg",
            "title": "Kastlfel 2010 Unisex RecycledSoft T-Shirt - White - M",
            "source": "League Outfitters",
            "price": "$6.99",
            "extracted_price": 6.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqppxEygtbmqiosYyRTl91OcSRDL85ugkt09FcLx6QV-zXbif8iGWvQ0u6UyVtBvrVW1KHMtHgvjWr3JvfRUXAXhmrWN51-m3DGGV-LI-x6QvAEDYwiYI3eA&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/7129493342720317301?q=white+shirt&prds=pid:1881942675620844003&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIjRgoAA",
            "product_id": "7129493342720317301",
            "delivery_options": "Delivery by Thu, Mar 30"
        },
        {
            "position": 64,
            "docid": "724534659499119951",
            "link": "https://www.google.com/shopping/product/5255526092885588689?q=white+shirt&prds=pid:724534659499119951,rsk:PC_6519911189082593662&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIInxg",
            "title": "Nike Men's Sportswear T Shirt, White / M",
            "source": "SVSports",
            "price": "$14.97$35.00",
            "extracted_price": 14.97,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRXdE4eCYxoCJVe3Py5AON1HyFdlrZT_2ZCSSJ5e-0sP2aTXkE8CaKyDTnau2Y_iOtYRvHVsqeYyU2iZrvZ7qUDI2yGYe-kXxcv2B26ag&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/5255526092885588689?q=white+shirt&prds=pid:724534659499119951,rsk:PC_6519911189082593662&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIInBgoAA",
            "product_id": "5255526092885588689",
            "rating": 4.9,
            "price_strikethrough": "$35.00",
            "price_strikethrough_extracted": 35,
            "delivery_options": "Delivery by Mon, Apr 10",
            "badge": "SALE"
        },
        {
            "position": 65,
            "docid": "1897057759903212363",
            "link": "https://www.google.com/shopping/product/12570547987414541103?q=white+shirt&prds=pid:1897057759903212363&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIrhg",
            "title": "Candace Cameron Bure Linen Blend Button- Front Shirt New Day White S New A478498",
            "source": "eBay - chelery04",
            "price": "$14.98 · Was $22.98",
            "extracted_price": 14.98,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUcCBZz1gDQShs1PY1YDbOJWBnE1UMU91TLhRWPdn8_UNYHyQvkTFlgHc5KHppeVG7opD9uk-0lJXNfEGTDlHkspjAfHRT531wVsSAIAfu&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/12570547987414541103?q=white+shirt&prds=pid:1897057759903212363&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIqxgoAA",
            "product_id": "12570547987414541103",
            "delivery_options": "Free delivery by Fri, Mar 31",
            "delivery_options_extracted_price": 0,
            "badge": "SALE"
        }
    ],
    "top_features": [
        {
            "position": 1,
            "docid": "11072543342418915372",
            "link": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIjhE",
            "title": "Gildan Heavy Cotton T-Shirt - M / White",
            "source": "JiffyShirts.com",
            "price": "$2.49",
            "extracted_price": 2.49,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLK70VF8mTzDJGkL89oCFQA8YZepXm_eVmo4_3ayRVcnCeuFjDJ3RRW7Da5GD8L1N0MvyHXKKTBnAxjNd-teKrRYooAtKd5wxDtxnHSVob&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/1466157075227512336?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIixEoAA",
            "product_id": "1466157075227512336",
            "rating": 4.8,
            "compare_prices_link": "https://www.google.com/shopping/product/1466157075227512336/offers?q=white+shirt&prds=eto:18416790153302436815_0,pid:11072543342418915372,rsk:PC_1665448759610133141&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECJUR",
            "compare_prices_text": "Compare prices from 10+ stores",
            "delivery_options": "Delivery by Mon, Mar 27 · Free 100-day returns",
            "delivery_options_extracted_price": 0,
            "category": "Comfortable"
        },
        {
            "position": 2,
            "docid": "17524992496482861334",
            "link": "https://www.google.com/shopping/product/254049663271751356?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIInxE",
            "title": "Gildan Adult Short Sleeve T Shirt- White, Small",
            "source": "Hobby Lobby",
            "price": "$2.99",
            "extracted_price": 2.99,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0Fa57Loy8HoYWHmjbegq-WOlVfm3vqZFNpt6iIROWtuFCTgiK7FqjLNaAFGYkI59Tqrj-sY2JBSberT956grEged8bVMXJi4nNsU4dOz0&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/254049663271751356?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIInBEoAA",
            "product_id": "254049663271751356",
            "rating": 4.8,
            "compare_prices_link": "https://www.google.com/shopping/product/254049663271751356/offers?q=white+shirt&prds=eto:14444053517774495252_0,pid:17524992496482861334,rsk:PC_16563153678823367042&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECKYR",
            "compare_prices_text": "Compare prices from 5+ stores",
            "delivery_options": "Delivery by Mon, Mar 27",
            "category": "Attractive"
        },
        {
            "position": 3,
            "docid": "10980037272377232115",
            "link": "https://www.google.com/shopping/product/16469514457795268825?q=white+shirt&prds=eto:7334982568465677426_0,pid:10980037272377232115,rsk:PC_12392381402848570509&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIsBE",
            "title": "Men's Dress Shirt - Button Down in White Long Sleeve Cotton Broadcloth | Paul ...",
            "source": "Paul Fredrick",
            "price": "$69.00",
            "extracted_price": 69,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQy2NmsG2CTjTLo4xQvlJJEWEjPlcmkXP7iZDTfGDXuI0TBobY9CV7-9cc4bcBE9Ka6uw36LF14SPd7HejUj5jfKxHFqcLsDammFrjMlrsQ3P_HfjBWBtQ_&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/16469514457795268825?q=white+shirt&prds=eto:7334982568465677426_0,pid:10980037272377232115,rsk:PC_12392381402848570509&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIrREoAA",
            "product_id": "16469514457795268825",
            "rating": 4.6,
            "delivery_options": "Delivery by Mon, Apr 3",
            "category": "Well made"
        },
        {
            "position": 4,
            "docid": "7152863927419164622",
            "link": "https://www.google.com/shopping/product/14782578770361797892?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8wIIwBE",
            "title": "Fruit of The Loom | Men's Short Sleeve Crew T-Shirt, White 6 Pack | 3XL | White",
            "source": "Fruit of the Loom",
            "price": "$22.49",
            "extracted_price": 22.49,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcReKE21R2-2pKax2t5yrLo7e6HOoMuXu6iY_tgxS3NeNO8FSJu6tFqxJKBjpXCS3zWj8pI3NzNsVtTH5ujT5xpnm-ccscCbRmzJhZWwhU4zSC-7TepurP8c&usqp=CAE",
            "product_href": "https://www.google.com/shopping/product/14782578770361797892?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8gIIvREoAA",
            "product_id": "14782578770361797892",
            "rating": 4.4,
            "compare_prices_link": "https://www.google.com/shopping/product/14782578770361797892/offers?q=white+shirt&prds=eto:15850141928379682246_0,pid:7152863927419164622,rsk:PC_12104490334106574175&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ3q4ECMUR",
            "compare_prices_text": "Compare prices from 10+ stores",
            "delivery_options": "Delivery by Wed, Mar 29 · Free 30-day returns",
            "delivery_options_extracted_price": 0,
            "category": "Easy to clean"
        }
    ],
    "filtered_results": [
        {
            "filter_category": "Filter by material",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C965397&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIuhgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C965397&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIuxgoAQ",
            "title": "Cotton",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMWRArWWFaciCXCA14_eiX0zm2A2UGbxv9eWQ7qjIwtHGfczhQSyzbQDc9cQNW6DC1mYFqtVzfVRTKhZSRNMTChPMlCCVxV182REUVk79B&usqp=CAE"
        },
        {
            "filter_category": "Filter by material",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634130&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIvRgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634130&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIvhgoAQ",
            "title": "Cotton Blend",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfRmu5lN2GkerQO3AwoPMLK7TASyLY8FESiP8Hu1gikYG4iWpVrppwBcTJT0Ewc1aNgK_dSl2sg_KoJK3X5RPokRwUh6Bot-LrUpEf5Uwl&usqp=CAE"
        },
        {
            "filter_category": "Filter by material",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634148&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIwBgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634148&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIwRgoAQ",
            "title": "Polyester",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBPysjFpyvAwDBdV6wNvp8YYy6jaKGydSnyzR7c9HJMVgjKe9CRn4L-TCUcI621vqh6AEND7AsQvTg64nkdIeGvj_iU5eH3GLWGTDES-jYUW9R-qKaaOwg5Q&usqp=CAE"
        },
        {
            "filter_category": "Filter by material",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634155&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIwxgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634155&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIxBgoAQ",
            "title": "Spandex",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0NURke9-IlrotipK33eiywQQDT38MW_ikjsC3K-D3RzkMyM12NhtBmBiNmgojNs7jabE5vogj97gaa2JB0uBjH56nKKWcjwxdRjJF2f1g&usqp=CAE"
        },
        {
            "filter_category": "Filter by material",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634140&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIxhgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:965178%7C1634140&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIxxgoAQ",
            "title": "Jersey",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwFkJj8IhYV5aNxiWF6GzCwfk5eyA3Pq9FZf_bOQj4v0BPGZfGhCFwsKlmYgh58M3r55GdrvK7UPnrL89yuOWWkDft_laTj_-RO4gWf-OCQ8pC99q_AOGP&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070222&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIzRgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070222&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIzhgoAQ",
            "title": "Regular",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQYwrT1HZSrOF_WwpeVYRPYk8iVCnJxiBjxTxd6FMRchmB_O2ezLU_-yZW9xIWo114MHB_6uT6uY5GwQTEjySWtEhF380PCpGGwOYcriYk&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726006%7C2726016&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI0BgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726006%7C2726016&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI0RgoAQ",
            "title": "Collared",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJqDDQ_YUwPF4ndyu4pB59W1pGsF61JbigELuFk1HGgAKt328qe496qzRBtspD99fv3EhzwZOXBadIeS9sdopMvTCnUKo8fvZ0ZnLCkwgS6zM4o23m-5UHoA&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:933749%7C3952099&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI0xgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:933749%7C3952099&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI1BgoAQ",
            "title": "Dress Shirt",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bslH-n3hhTUy5QWQ35yIpZIxFvciuq90y3TEICHPhtnrHHoBD1FcPAdm52Ldm8vByPf09QaY5LB5UYAPzdYUIHGsTFSkkcYSR_YPrN-P&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726027%7C2726028&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI1hgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726027%7C2726028&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI1xgoAQ",
            "title": "Long Sleeve",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrshZoVe5FCxpO7odx2gXYxEEiO9NS1H97B-WoHiPLu7JPTGJhs-6NbF7jfXwHE_YQR24NDvyTfjlZ0qD2iktXBiC4rt5DdaxEkbnyRvL8&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:933749%7C933755&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI2RgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:933749%7C933755&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI2hgoAQ",
            "title": "T-shirt",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMHunYqqhzJiCAu6CtoQidmDXRnJH4UHLf-zGA2fnBCQzH4kkEVKbF0GfgmtG3GmJV38uvRt1lQeU5LiD0EFPZLY5HNWgWI9tzNJa8OUQ&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726027%7C2726031&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI3BgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726027%7C2726031&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI3RgoAQ",
            "title": "Short Sleeve",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCJINHjeY5NPYJ0Zj9sKdqQQEUDr4ryGl7K3GFkijxPrchBoja7wNHXaZ7h1yfCRg7bm_K85QpOH2lpdrGp4LKDPpQsAN-ZuyOFIl8nLc&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2154444%7C2154446&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI3xgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2154444%7C2154446&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI4BgoAQ",
            "title": "Button Down",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOJe493ULDAnM-04kxdfTZ0NG1Hc50ZEVcB5OyBqeVM_sObgNmRBOBxNLffSImFLVKuej1-rGT0d2ovH8x68zdsuwA9uy2Tv7MHTLd4EX22YRTNr5Onqz4EA&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012893&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI4hgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012893&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI4xgoAQ",
            "title": "Brooks Brothers",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSo900VinRl-ITe7k2Rbi5W5b-xl1EBU6XtNqE0Gx0rSnCQ6IAQrIK13jjHMEZOmFiwkacgNgS5upbGmdCBLp3aJFXy6bbnpnhfWe21eoQumGzXkisPShQX&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1011839&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI5RgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1011839&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI5hgoAQ",
            "title": "Nike",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQlgJ5zQfOz3cbqMCsUjkgnDlv5cXa3A1O0sAcA2wZWOMZFgydYYfsAr2-b4QIgBMED7v_11jAeGgylq6dIPyJDenJCNxBppUwmpUHFkY&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2154444%7C2154445&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI6BgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2154444%7C2154445&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI6RgoAQ",
            "title": "Button Up",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQ_BKTZcikGEYvICDWS4dXuIJHo5h5A2IbUHmrQWAUOWwzos9rX9Q3i9Cf5MphB2pnbLjGXXuPI68Z8I-kuKWH1DTqtg0hZ0d2tOufWcdYCIzXhnQUzi71&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070225&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI6xgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070225&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI7BgoAQ",
            "title": "Big",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgwe0aJ0h6T4mxFXHKCsrLPqw4on-6SJxseqYsTox4g8lkyhWomAg_69hJLfVciK9VD6kd16wZs2FXFXe_OMqLHrM4NLiR71TTmoYto3tUyaGzqbwW5PDq&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012743&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI7hgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012743&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI7xgoAQ",
            "title": "Amazon",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTQpQx5SDrhZJAKxcfEy2HqHm7DABqn0PA3WicB9HW_RaVraxBjhMQDO5eScuSRPRUJfPQ6dqUD2Q6IGma4KhIdCuYjjPu3eGqN0WOUb6-&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012287&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI8RgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1012287&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI8hgoAQ",
            "title": "Express",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4yvaUZD5gKYKM00_1LqG6JBnKTvujAgUq09oLzPQ0mML-XOUdhw3k56g_q1R_6A3zcXTfs65RPaaYXnUiWZJCgOOAAKuuQm-zzZaUIaV1Aeh5Y0lJ4lAxKA&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016645&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI9BgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016645&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI9RgoAQ",
            "title": "Striped",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb8ou3PkJtJ5WnSar0PAJnqjZMjcmTx_NbkRAg6-IwLFCVIJJLRUDwutTtB1oRL2d8_vS0MCPPw6bO7M5bcDKwGQORdewbWz7mVgfJWZ9Emj6isaVV1cUM&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726006%7C2726010&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI9xgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:2726006%7C2726010&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI-BgoAQ",
            "title": "V-neck",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ21o2eumoYzSAJtyKp73ChqTKOD-G9IaciVOaACyrOcZmiY2FWmQ_3sitXfOuJaLYjMznZFV9zsG8ioaIjkljl2dLZo-kw0ezHORK5HORvp1yuHL7vT37uIw&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070223&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI-hgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070223&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI-xgoAQ",
            "title": "Petite / Short",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQacZUceoslGMV5Ljfxou6LYxIOGkWRYU3kfhHhBbURx393wwVQ2EaNb3JD0_kAb2gz_5B1s7nqD72c49czbChMmoMZyUY7Zk0BsM10thA&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070226&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkI_RgoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:5066332%7C5070226&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoI_hgoAQ",
            "title": "Tall",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQJdx8jDxXfxltXXCCBd26EVgagoT4WOP9TsGPTknSTiB-xcnwoMjea2UP5SEMpZHYp_2yp9_jkVLzH-w2TGkyTcAQLDwr9aBtasnknTOptlKktcaNvi6N-g&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016652&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIgBkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016652&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIgRkoAQ",
            "title": "Plaid",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZRvgAgE-eVJoxQbCCzKOiKl8lk9c9tV7eLtxU5q51xhQUA2dyg24ei_D0ePxagTgjgtk6NEi-e78EW_QKXvnb0ny9fPAenNKUhpQTLneu21X3vNoECVX7&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016646&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIgxkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016646&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIhBkoAQ",
            "title": "Floral",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLMqYcgQy8ZFLHxVWfSfCcdG7wB9U0YJUy_sN7fFKaW-rXsLJ6kvhJlw0U7URXwsVyZM_6ExMbkCjRg2Q3WaCa6DNaTL54dql7hyzHTHkG&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016653&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIhhkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:1016644%7C1016653&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIhxkoAQ",
            "title": "Paisley",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0sWGl1rtsi6JQi6xwXQ1-O9aRBdiU_HltJW45O-wAEyl7r6NQjPrBP6GBOefsutPfaLumRehMd366zWsD-5frh5WblcinZ46B6cyA3dc&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1020955&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIiRkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1020955&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIihkoAQ",
            "title": "New York & Company",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdqqxCERHlVdCHhadALFPJvQAffMrqNlvvkfRqp2-18CvcKMPUNxHEiqcR01aslxBhTSx13MlcmUT7bNrKywsT0YCQ-yF6eHt8KOHaZnyAt8eFsN6dLUCn&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C3799808&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIjBkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C3799808&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIjRkoAQ",
            "title": "Wilfred Free",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLEA1rI2Ji6rVjWo37iM1bzEQWrk3qflEy7lEiG3NC2rvPa0V5EOH4XC83dzZDR8r-MKvP-U0OK-1fUC2D8ykxyHk6EOTIJ5NZat3xnoVSF5eALKHsv3Cf&usqp=CAE"
        },
        {
            "filter_category": "You might like",
            "image_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1023245&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQwQkIjxkoAA",
            "title_link": "https://www.google.com/search?tbm=shop&q=white+shirt&tbs=mr:1,pdtr0:997763%7C1023245&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ1yoIkBkoAQ",
            "title": "Zara",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6IMGgtt0Tb1wqdM6wlj0cLNSEEqL06kYYjYrOV2euF0WFNwl6hY2SZ95QOX59UXAi8Y2CK4fwqRCXpTJeiCLqNPHd5iAdG-pCXVDa1z46TjR8EsqX_qbOug&usqp=CAE"
        }
    ],
    "related_searches": [
        {
            "title": "white shirt women's",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+women%27s&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsIlRk"
        },
        {
            "title": "white shirt men",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+men&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsIlxk"
        },
        {
            "title": "white shirt women",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+women&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsImRk"
        },
        {
            "title": "white shirt men's",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+men%27s&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsImxk"
        },
        {
            "title": "white shirts formal",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirts+formal&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsInRk"
        },
        {
            "title": "white shirt girl",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+girl&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsInxk"
        },
        {
            "title": "white shirt long sleeve",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+long+sleeve&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsIoRk"
        },
        {
            "title": "white shirt men's",
            "link": "https://www.google.com/search?tbm=shop&q=white+shirt+men%27s&sa=X&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ2wsIoxk"
        }
    ],
    "pagination": {
        "pages_count": 7,
        "current_page": 1,
        "next_page_url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=60&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCKgZ",
        "pages": [
            {
                "page": 2,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=60&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCKgZ"
            },
            {
                "page": 3,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=120&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCKoZ"
            },
            {
                "page": 4,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=180&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCKwZ"
            },
            {
                "page": 5,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=240&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCK4Z"
            },
            {
                "page": 6,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=300&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCLAZ"
            },
            {
                "page": 7,
                "url": "https://www.google.com/search?q=white+shirt&tbs=vw:g&tbm=shop&ei=wzEbZJbwIOiYptQP5rWjqAQ&start=360&sa=N&ved=0ahUKEwjW3deg_-_9AhVojIkEHebaCEUQ8tMDCLIZ"
            }
        ]
    }
}

// this will be erased once back online
var topText = "white linen shirt mens";
var bottomText = "white shorts mens";
var shoeText = "boat shoes mens";




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a30f9d1a37msh5cc175700f93f6fp1094cbjsn5d64306f2e3d',
		'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
	}
};

var gdataBaseUrl = 'https://google-data-scraper.p.rapidapi.com/search/shop/';
var gdataKey = '?api_key=1cbefa30f9ed00f3afb422efeda5fd3b';


function fetchTopSearch (topSearch) {
	topSearch = topSearch.split(' ');
	topSearch = topSearch.join('+');
	console.log(gdataBaseUrl + topSearch + gdataKey);
    fetch(gdataBaseUrl + topSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderTop(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

// function (fetchMidSearch) {
// 	fetch(gdataBaseUrl + midSearch + gdataKey, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

function fetchBottomSearch () {
bottomSearch = bottomSearch.split(' ');
	bottomSearch = bottomSearch.join('+');
	console.log(gdataBaseUrl + bottomSearch + gdataKey);
    fetch(gdataBaseUrl + bottomSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderBottom(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

	function fetchShoeSearch (shoeSearch) {
		shoeSearch = shoeSearch.split(' ');
	shoeSearch = shoeSearch.join('+');
	console.log(gdataBaseUrl + shoeSearch + gdataKey);
    fetch(gdataBaseUrl + shoeSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderShoe(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

// for (var i = 0; i < Math.min(3, topData.shopping_results.length); i++)

function renderTop (topData) {
	for (var i = topIndex; i < topIndex + 3; i++) {
        console.log(topData.shopping_results[i])
		var topImage = topData.shopping_results[i].thumbnail;
		var topTitle = topData.shopping_results[i].title;
		var topLink = topData.shopping_results[i].link;
		var topPrice = topData.shopping_results[i].price;
		var topSource = topData.shopping_results[i].source;

		var currentCard = $('#topCont').find('#card' + i);
		// console.log(currentCard);

			// class .overlay
		currentCard.find('img').attr('src',topImage);
		currentCard.find('h5').text(topSource);
		currentCard.find('p.first').text(topTitle);
		currentCard.find('p.second').text(topPrice);
	}
}

function renderBottom (bottomData) {
	for (var i = bottomIndex; i < bottomIndex + 3; i++) {
        console.log(bottomData.shopping_results[i])
		var bottomImage = bottomData.shopping_results[i].thumbnail;
		var bottomTitle = bottomData.shopping_results[i].title;
		var bottomLink = bottomData.shopping_results[i].link;
		var bottomPrice = bottomData.shopping_results[i].price;
		var bottomSource = bottomData.shopping_results[i].source;

		var currentCard = $('#bottomCont').find('#card' + i);
		// console.log(currentCard);

		currentCard.find('img').attr('src',bottomImage);
		currentCard.find('h5').text(bottomSource);
		currentCard.find('p.first').text(bottomTitle);
		currentCard.find('p.second').text(bottomPrice);
	}
}

function renderShoe (shoeData) {
	for (var i = shoeIndex; i < shoeIndex + 3; i++) {
        console.log(shoeData.shopping_results[i])
		var shoeImage = shoeData.shopping_results[i].thumbnail;
		var shoeTitle = shoeData.shopping_results[i].title;
		var shoeLink = shoeData.shopping_results[i].link;
		var shoePrice = shoeData.shopping_results[i].price;
		var shoeSource = shoeData.shopping_results[i].source;

		var currentCard = $('#shoeCont').find('#card' + i);
		// console.log(currentCard);

		currentCard.find('img').attr('src',shoeImage);
		currentCard.find('h5').text(shoeSource);
		currentCard.find('p.first').text(shoeTitle);
		currentCard.find('p.second').text(shoePrice);
	}
}


// GPT
//  GPT Text

// split into three





// function logSubmit(event) {
// 	event.preventDefault();
// 	const topInput = document.getElementById("top-input");
// 	const bottomInput = document.getElementById("bottom-input");
// 	const shoeInput = document.getElementById("shoe-input");
// 	const topText = topInput.value;
// 	const bottomText = bottomInput.value;
// 	const shoeText = shoeInput.value;
// 	fetchTopSearch(topText);
// 	fetchBottomSearch(bottomText);
// 	fetchShoeSearch(shoeText);

// }

// const form = document.getElementById("form");
// const log = document.getElementById("log");
// form.addEventListener("submit", logSubmit);


	// fetchTopSearch(topText);
	// fetchBottomSearch(bottomText);
	// fetchShoeSearch(shoeText);

// console.log(topData.filtered_results)

renderBottom(myData);
renderShoe(myData);
renderTop(myData);


