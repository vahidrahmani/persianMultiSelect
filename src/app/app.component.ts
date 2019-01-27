import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  sdsd = [];
  ngOnInit() {
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'PK_ParentConceptId',
      textField: 'ParentName',
      //selectAllText: 'Select All',
      //unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownList = [
      {
        "PK_ParentConceptId": "1206",
        "ParentName": "مجمع تشخیص مصلحت نظام",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1204",
        "ParentName": "رزمایش فاطمیه",
        "Icon": "fa-search"
      },
      {
        "PK_ParentConceptId": "1203",
        "ParentName": "ادعای پولشویی ظریف",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1202",
        "ParentName": "مناسبت های بین المللی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1201",
        "ParentName": "تولیدات داخلی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1134",
        "ParentName": "ثامن الائمه 4",
        "Icon": "fa-user"
      },
      {
        "PK_ParentConceptId": "1133",
        "ParentName": "رزمایش دفاع مقدس",
        "Icon": "fa fa-th-large"
      },
      {
        "PK_ParentConceptId": "1131",
        "ParentName": "شایعات و مسائل مختلف",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1130",
        "ParentName": "شورای شهر",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1129",
        "ParentName": "رزمایش امین مردم",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1128",
        "ParentName": "چالش های فضای مجازی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1127",
        "ParentName": "حوزه علمیه و روحانیت",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1123",
        "ParentName": "کودتای 28 مرداد",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1122",
        "ParentName": "کمپین و مطالبه مردمی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1121",
        "ParentName": "محور هفت",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1120",
        "ParentName": "محور پنج",
        "Icon": "fa-envelope-o"
      },
      {
        "PK_ParentConceptId": "1119",
        "ParentName": "محور چهار",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1118",
        "ParentName": "محور سه",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1117",
        "ParentName": "محور دو",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1116",
        "ParentName": "محور یک",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1115",
        "ParentName": "عملیات اقتصادی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1114",
        "ParentName": "شورای نگهبان",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1113",
        "ParentName": "دیدگاه سیاستمداران در قبال ایران",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1112",
        "ParentName": "آسیب های اجتماعی و سبک زندگی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1111",
        "ParentName": "زیست محیطی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1110",
        "ParentName": "کنسرت",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1109",
        "ParentName": "دراویش گنابادی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1108",
        "ParentName": "آستان قدس رضوی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1107",
        "ParentName": "قاچاق کالا و ارز",
        "Icon": "fa fa-star"
      },
      {
        "PK_ParentConceptId": "1106",
        "ParentName": "آلودگی هوا و ریزگرد",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1105",
        "ParentName": "اسناد و قراردادهای بین المللی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1104",
        "ParentName": "اقوام و اقلیت ها",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1103",
        "ParentName": "دفاع مقدس",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1102",
        "ParentName": "مسائل خانواده",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1101",
        "ParentName": "بانک ها و موسسات مالی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1100",
        "ParentName": "نیروهای مسلح",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1099",
        "ParentName": "نیروی انتظامی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1098",
        "ParentName": "مسکن",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1097",
        "ParentName": "صنعت هسته‌ای",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1096",
        "ParentName": "امنیت شهری",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1095",
        "ParentName": "مسکن مهر",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1094",
        "ParentName": "موسسات مالی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1093",
        "ParentName": "رانت، فساد و احتکار",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1092",
        "ParentName": "مسائل عراق",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1091",
        "ParentName": "تحولات منطقه",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1090",
        "ParentName": "محرومیت و بیکاری",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1089",
        "ParentName": "دانشگاه و آموزش عالی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1088",
        "ParentName": "مبارزه با رانت، فساد و احتکار",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1087",
        "ParentName": "نفت و حامل های انرژی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1086",
        "ParentName": "بورس",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1085",
        "ParentName": "شهرداری ها و شوراهای شهر",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1084",
        "ParentName": "بیت امام",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1083",
        "ParentName": "رکود، تورم و نوسانات قیمت",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1082",
        "ParentName": "صداوسیما و سینما",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1081",
        "ParentName": "دانشگاه آزاد",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1080",
        "ParentName": "فیلترینگ اینستاگرام",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1079",
        "ParentName": "منافقین",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1078",
        "ParentName": "رابطه ایران و آمریکا",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1077",
        "ParentName": "مناسبت های مذهبی و ملی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1076",
        "ParentName": "رفع حصر و فتنه 88",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1075",
        "ParentName": "مراجع تقلید",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1074",
        "ParentName": "نرخ ارز و طلا",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1073",
        "ParentName": "فیلترینگ توئیتر",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1072",
        "ParentName": "بحران آب",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1070",
        "ParentName": "پیام رسان های داخلی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1069",
        "ParentName": "صنایع و کارخانجات",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1068",
        "ParentName": "فمینیسم و حقوق زنان",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1067",
        "ParentName": "حضور زنان در اجتماع",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1066",
        "ParentName": "شهدا",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1065",
        "ParentName": "جریانات سیاسی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1064",
        "ParentName": "تحرکات رژیم صهیونیستی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1063",
        "ParentName": "مقایسه ایران با سایر کشورها",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1062",
        "ParentName": "خانواده هاشمی رفسنجانی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1061",
        "ParentName": "روز قدس",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1060",
        "ParentName": "خاندان پهلوی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1059",
        "ParentName": null,
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1055",
        "ParentName": "فعالیت‌های سپاه",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1054",
        "ParentName": "تحرکات ضدانقلاب",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1053",
        "ParentName": "قوه قضائیه",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1052",
        "ParentName": "جام جهانی فوتبال",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1051",
        "ParentName": "فعالیت شبکه های اجتماعی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "1050",
        "ParentName": "فعالیت نهادهای کمک رسان",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1049",
        "ParentName": "جریان احمدی نژاد",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1048",
        "ParentName": "وزارت اطلاعات",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "1047",
        "ParentName": "اقدامات تروریستی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "48",
        "ParentName": "مهاجرین افغان",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "47",
        "ParentName": "تحولات عربستان",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "46",
        "ParentName": "مسائل نظامی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "45",
        "ParentName": "شخصیت های مشهور و سلبریتی ها",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "44",
        "ParentName": "حجاب",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "43",
        "ParentName": "نماز جمعه و ائمه جمعه",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "42",
        "ParentName": "فوتبال",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "41",
        "ParentName": "تحولات بین الملل",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "40",
        "ParentName": "تحولات فلسطین",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "39",
        "ParentName": "تحریم ها علیه ایران",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "38",
        "ParentName": "رهبر انقلاب",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "37",
        "ParentName": "دولت",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "36",
        "ParentName": "وجهه بین المللی ایران",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "35",
        "ParentName": "فوتبال ملی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "34",
        "ParentName": "حوادث",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "33",
        "ParentName": "اختلافات قومیتی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "32",
        "ParentName": "باشگاه استقلال",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "30",
        "ParentName": "مجلس شورای اسلامی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "29",
        "ParentName": "سلبریتی",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "28",
        "ParentName": "نزاع",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "27",
        "ParentName": "محور مقاومت",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "26",
        "ParentName": "کولبران غرب کشور",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "25",
        "ParentName": "سینما",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "24",
        "ParentName": "انتخابات",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "23",
        "ParentName": "تورم",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "22",
        "ParentName": "برجام",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "21",
        "ParentName": "فلسطین",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "20",
        "ParentName": "مستهجن",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "19",
        "ParentName": "بحران شبه جزیره کره",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "18",
        "ParentName": "درگذشت شخصیت ها",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "17",
        "ParentName": "ماه رمضان",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "16",
        "ParentName": "رفع حصر",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "15",
        "ParentName": "ورزشی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "14",
        "ParentName": "زندانیان امنیتی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "13",
        "ParentName": "حمایت از حقوق حیوانات",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "12",
        "ParentName": "اعتراضات و اعتصابات",
        "Icon": ""
      },
      {
        "PK_ParentConceptId": "11",
        "ParentName": "اعتراضات صنوف",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "10",
        "ParentName": "فیلترینگ تلگرام",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "9",
        "ParentName": "تمسخر نمایندگان مجلس",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "8",
        "ParentName": "مرگ بر آمریکا",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "6",
        "ParentName": "بقایی",
        "Icon": null
      },
      {
        "PK_ParentConceptId": "5",
        "ParentName": "fffffff",
        "Icon": "fa fa-star"
      }
    ];

   
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
