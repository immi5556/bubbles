var userdetail;
var popopen = false;
var ccde = [
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1 684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1 264",
        "code": "AI"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1 242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1 246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1 441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+537",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1 767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1 849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1 473",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "Guam",
        "dial_code": "+1 671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1 876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+7 7",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1 670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1 939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1 868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1 649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    },
    {
        "name": "land Islands",
        "dial_code": "",
        "code": "AX"
    },
    {
        "name": "Antarctica",
        "dial_code": null,
        "code": "AQ"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Congo, The Democratic Republic of the",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Iran, Islamic Republic of",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Korea, Democratic People's Republic of",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Lao People's Democratic Republic",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia, The Former Yugoslav Republic of",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Micronesia, Federated States of",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova, Republic of",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Réunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Saint Barthélemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1 869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1 758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1 784",
        "code": "VC"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan, Province of China",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tanzania, United Republic of",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Venezuela, Bolivarian Republic of",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Viet Nam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1 284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1 340",
        "code": "VI"
    }
];

var clrs = [
    {
        shade: "blue",
        vals: [
            "#010F1D",
            "#4286f4",
            "#2f5591",
            "#1f365b",
            "#81a6e2",
            "#4a84e2",
            "#3e499b"
        ]
    }
];

//var apiurl = "http://localhost:57867";
var apiurl = "https://whatsup.immanuel.co";

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message .time');
if (deviceTime) {
    deviceTime.innerHTML = moment().format('h:mm');
}

setInterval(function () {
    if (deviceTime) {
        deviceTime.innerHTML = moment().format('h:mm');
    }
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
    messageTime[i].innerHTML = moment().format('h:mm A');
}

/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

//form.addEventListener('submit', newMessage);

function newMessage(txt) {
    //var input = e.target.input;

    if (txt) {
        var message = buildMessage(txt);
        conversation.appendChild(message);
        animateMessage(message);
    }

    conversation.scrollTop = conversation.scrollHeight;
}

function buildMessage(text) {
    var element = document.createElement('div');

    element.classList.add('message', 'sent');

    element.innerHTML = text +
        '<span class="metadata">' +
        '<span class="time">' + moment().format('h:mm A') + '</span>' +
        '<span class="tick tick-animation">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
        '</span>' +
        '</span>';

    return element;
}

function animateMessage(message) {
    setTimeout(function () {
        var tick = message.querySelector('.tick');
        tick.classList.remove('tick-animation');
    }, 500);
}

function appendMessageConverse(wfile) {
    (wfile || []).forEach(v => {
        var msg = '';
        if (v.MsgType == "Image") {
            msg = '<img width="95%" src="/api/file/src?fullname=' + encodeURIComponent(v.FileUrl) + '" /> <br />'
                + v.Message;
        }
        else if (v.MsgType == "Video") {
            msg = "<video onclick='this.paused?this.play():this.pause()' controls='controls' src='/api/file/src?fullname=" + encodeURIComponent(v.FileUrl) + "' style='max-width:80%;'></video><br />"
                + v.Message;
        } else {
            msg = v.Message;
        }
        newMessage(msg);
    });
}

function appendMessage() {
    for (var v in ufiles) {
        var msg = '';
        if (ufiles[v].media == "Image") {
            msg = '<img width="95%" src="' + window.URL.createObjectURL(ufiles[v].file) + '" /> <br />'
                + ufiles[v].capt;
        }
        else if (ufiles[v].media == "Video") {
            msg = "<video onclick='this.paused?this.play():this.pause()' controls='controls' src='" + window.URL.createObjectURL(ufiles[v].file) + "' style='max-width:80%;'></video><br />"
                + ufiles[v].capt;
        }
        newMessage(msg);
    }
}

window.a7utils = (function () {
    function getFileExtension(filename) {
        return filename.split('.').pop();
    }
    const vid_extns = [
        { extn: 'mpg', mime: 'video/mpeg' },
        { extn: 'mpeg', mime: 'video/mpeg' },
        { extn: 'avi', mime: 'video/avi' },
        { extn: 'wmv', mime: '' },
        { extn: 'mov', mime: 'video/quicktime' },
        { extn: 'swf', mime: 'application/x-shockwave-flash' },
        { extn: 'flv', mime: 'video/x-flv' },
        { extn: 'ogg', mime: 'video/ogg ' },
        { extn: 'webm', mime: 'video/webm' },
        { extn: 'mp4', mime: 'video/mp4' },
        { extn: 'm4v', mime: 'video/x-m4v' },
        { extn: 'mkv', mime: 'video/x-matroska' }
    ];
    function isVideoFile(filename) {
        const extn = getFileExtension(filename) || '';
        return vid_extns.map(t => t.extn).indexOf(extn.toLowerCase()) > -1;
    }
    function getVideoMime(extn) {
        const mm = vid_extns.find(t => t.extn == extn.toLowerCase()) || {};
        return (mm.mime || '');
    }
    const aud_extns = [
        { extn: 'mid', mime: 'audio/midi' },
        { extn: 'midi', mime: 'audio/midi' },
        { extn: 'wma', mime: 'audio/x-ms-wma' },
        { extn: 'aac', mime: 'audio/aac' },
        { extn: 'wav', mime: 'audio/wav' },
        { extn: 'mp3', mime: 'audio/mpeg3' }
    ];
    function isAudioFile(filename) {
        const extn = getFileExtension(filename) || '';
        return aud_extns.map(t => t.extn).indexOf(extn.toLowerCase()) > -1;
    }
    function getAudioMime(extn) {
        const mm = aud_extns.find(t => t.extn == extn.toLowerCase()) || {};
        return (mm.mime || '');
    }
    const img_extns = [
        { extn: 'jpg', mime: 'image/jpeg' },
        { extn: 'jpeg', mime: 'image/jpeg' },
        { extn: 'tiff', mime: 'image/tiff' },
        { extn: 'gif', mime: 'image/gif' },
        { extn: 'bmp', mime: 'image/bmp' },
        { extn: 'png', mime: 'image/png' },
        { extn: 'svg', mime: 'image/svg+xml' },
        { extn: 'ico', mime: 'image/x-icon, image/vnd.microsoft.icon' },
    ];
    function isImageFile(filename) {
        const extn = getFileExtension(filename) || '';
        return img_extns.map(t => t.extn).indexOf(extn.toLowerCase()) > -1;
    }
    function getImgMime(extn) {
        const mm = img_extns.find(t => t.extn == extn.toLowerCase()) || {};
        return (mm.mime || '');
    }
    function getMediaType(filename) {
        if (isVideoFile(filename))
            return "Video";
        else if (isAudioFile(filename))
            return "Audio";
        else if (isImageFile(filename))
            return "Image"
        else
            return getFileExtension(filename);
    }
    function formatBytes(bytes, decimals) {
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals <= 0 ? 0 : decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    var setData = function (ele, key, obj) {
        ele.data = ele.data || {};
        ele.data[key] = obj;
    }
    var getData = function (ele, key) {
        ele.data = ele.data || {};
        return ele.data[key];
    }

    function rand(length, current) {
        current = current ? current : '';
        return length ? rand(--length, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + current) : current;
    }

    function randbetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function submitform(newwind, dat) {// TO DO: parameterize
        var form1 = `<form method='post'>
                                <input type='hidden' name='id' value='` + dat.PageUrl + `' />
                                <input type='hidden' name='mob' value='` + dat.mobno + `' />
                            </form>`;
        var ely = document.createElement('div');
        ely.innerHTML = form1;
        var form = ely.firstChild;
        //var form = document.createElement("form");
        if (newwind) {
            //form.target = '_blank';
        }
        form.action = "/Home/Page";

        document.body.appendChild(form);
        form.submit();
    }

    var MAX_HEIGHT = 100;
    function rendersize(src) {
        return new Promise((res, rej) => {
            var image = new Image();
            image.onload = function () {
                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);
                console.log('Orig Size: ' + a7utils.formatBytes(src.size));
                var dataURI = canvas.toDataURL(src.type, 0.4);

                fetch(dataURI)
                    .then(function (res) { return res.arrayBuffer(); })
                    .then(function (buf) {
                        var newf = new File([buf], src.name, {
                            type: src.type
                        });
                        console.log('Mod Size: ' + a7utils.formatBytes(newf.size));
                        res(newf);
                    });

                //var byteString;
                //if (dataURI.split(',')[0].indexOf('base64') >= 0)
                //    byteString = atob(dataURI.split(',')[1]);
                //else
                //    byteString = unescape(dataURI.split(',')[1]);
                //// separate out the mime component
                //var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                //// write the bytes of the string to a typed array
                //var ia = new Uint8Array(byteString.length);
                //for (var i = 0; i < byteString.length; i++) {
                //    ia[i] = byteString.charCodeAt(i);
                //}
                //var newf = new Blob([ia], { type: mimeString });
                //console.log('Mod Size: ' + a7utils.formatBytes(newf.size));
                //if (image.height > MAX_HEIGHT) {
                //    image.width *= MAX_HEIGHT / image.height;
                //    image.height = MAX_HEIGHT;
                //}
                //var ctx = canvas.getContext("2d");
                //ctx.clearRect(0, 0, canvas.width, canvas.height);
                //canvas.width = image.width;
                //canvas.height = image.height;
                //ctx.drawImage(image, 0, 0, image.width, image.height);
                //console.log('Orig Size: ' + a7utils.formatBytes(src.size));
                //canvas.toDataURL("image/jpeg", 0.7)
                //var newf = new File([buf], src.name, { type: src.type });
                //fetch(image.src)
                //    .then(function (res) { return res.arrayBuffer(); })
                //    .then(function (buf) {
                //        var newf = new File([buf], src.name, { type: src.type });
                //        console.log('Mod Size: ' + a7utils.formatBytes(newf.size));
                //    });

                //res(image);
            };
            image.src = window.URL.createObjectURL(src);
        });
    }

    return {
        getFileExtension: getFileExtension,
        isVideoFile: isVideoFile,
        isAudioFile: isAudioFile,
        isImageFile: isImageFile,
        getMediaType: getMediaType,
        formatBytes: formatBytes,
        setData: setData,
        getData: getData,
        randstr: rand,
        getImgMime: getImgMime,
        getAudioMime: getAudioMime,
        getVideoMime: getVideoMime,
        randbetween: randbetween,
        createGuid: createGuid,
        submitform: submitform,
        rendersize: rendersize
    }
})();


window.a7progress = (function () {
    var e = document.createElement('div');
    e.innerHTML = '<a id="progress-modal-b" href="#progress-modal" style="display:none;">Progress Modal</a>';
    document.body.appendChild(e.firstChild);
    var prgmmm = `<div id="progress-modal">
        <div class="modal-header">
            <h5 style="font-family:cursive;color:darkgray;">Progressing....</h5>
        </div>
        <div class="modal-content" style="text-align:center;">
            <p>
                <br /><br />
                <img style="max-width:98%;" src="/Content/img/prg_1.gif" />
            </p>
        </div>
        <br />
        <div style="text-align:center;">

        </div>
        <button id="progress-modal-close" style="display:none;margin-left:75px;" class="btn waves-effect waves-light close-progress-modal" name="action">
            Close
        </button>
    </div>`;
    e = document.createElement('div');
    e.innerHTML = prgmmm;
    document.body.appendChild(e.firstChild);

    var prgMdl = document.querySelector("#progress-modal");
    var prgMdlCont = prgMdl.querySelector(".modal-content");
    var prgInst = document.querySelector("#progress-modal-b");
    var prgInstClose = document.querySelector("#progress-modal-close");

    $("#progress-modal-b").animatedModal({
        modalTarget: 'progress-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: 'rgb(47, 62, 70)',
        // Callbacks
        beforeOpen: function () {
            console.log("progress - The animation was called");
        },
        afterOpen: function () {
            console.log("progress - The animation is completed");
        },
        beforeClose: function () {
            console.log("progress - The animation was called");
        },
        afterClose: function () {
            console.log("progress - The animation is completed");
        }
    });
    return {
        open: function () {
            prgInst.click();
        },
        close() {
            prgInstClose.click();
        }
    }
})();

window.a7profile = (function () {
    var e = document.createElement('div');
    e.innerHTML = '<a id="nickname-modal-b" href="#nickname-modal" style="display:none;">Nickname Modal</a>';
    document.body.appendChild(e.firstChild);
    var nickhtml = `<div id="nickname-modal" style="color:white;">
        <div class="modal-header">
            <h3 style="font-family:cursive;color:#ffc107;">Your Profile</h3>
        </div>
        <br /><br />
        <div class="modal-content" style="text-align:center;color:white;">
            <br />
            <p>
                <select class="defaultCountry" id="defaultCountry" name="defaultCountry" style="display:block;font-family: cursive;font-size: x-large;background-color:rgb(47, 62, 70);width: 50%;margin-left: 25%;color: white;padding-left:50px;">
                    <option value="" selected>Choose your Country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                </select>
            </p>
            <br />
            <p>
                <input id="mobNo"
                       type="tel"
                       style="font-family: cursive;font-size: x-large;text-align: center;color:white;"
                       placeholder="Mobile No" />
            </p>
            <br />
            <p>
                <input id="nickName"
                       type="text"
                       style="font-family: cursive;font-size: x-large;text-align: center;color:white;"
                       placeholder="Your Nick Name" />
            </p>
            <br /><br /><br />
        </div>
        <br />
        <div style="text-align:center;padding-bottom:5px;position:fixed;bottom:0px;width:100%;opacity: 0.9;background-color: #607D8B;line-height: 5;">
            <button id="nick-store" class="btn waves-effect waves-light" name="action">
                Enter
                <i class="material-icons right"></i>
            </button>

            <button id="nickname-modal-close" class="btn waves-effect waves-light close-nickname-modal" name="action" style="display:none;">
                Enter
                <i class="material-icons right"></i>
            </button>
        </div>
    </div>`;
    e = document.createElement('div');
    e.innerHTML = nickhtml;
    document.body.appendChild(e.firstChild);

    var nckMdl = document.querySelector("#nickname-modal");
    var nckMdlCont = nckMdl.querySelector(".modal-content");
    var nckInst = document.querySelector("#nickname-modal-b");
    var nckInstClose = document.querySelector("#nickname-modal-close");

    $("#nickname-modal-b").animatedModal({
        modalTarget: 'nickname-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: 'rgb(47, 62, 70)',
        // Callbacks
        beforeOpen: function () {
            console.log("nickname - The animation was called");
        },
        afterOpen: function () {
            console.log("nick name - The animation is completed");
        },
        beforeClose: function () {
            console.log("nick name - The animation was called");
        },
        afterClose: function () {
            console.log("nick name - The animation is completed");
        }
    });

    document.getElementById("nick-store").addEventListener("click", function () {
        userdetail = {
            nick: document.getElementById("nickName").value || a7utils.randstr(),
            countrycode: document.getElementById("defaultCountry").value || 'IN',
            callingcode: ccde.find(t => t.code == (document.getElementById("defaultCountry").value || 'IN')).dial_code || 91,
            mobno: document.getElementById("mobNo").value || 'T000000000',
            version: 2
        };
        localStorage.setItem("userdetail", JSON.stringify(userdetail));
        fetch(apiurl + '/api/sms/'
            + encodeURIComponent((userdetail.callingcode || '').split('+').join(''))
            + '/' + encodeURIComponent(userdetail.countrycode)
            + '/' + encodeURIComponent(userdetail.mobno)
            + '/' + encodeURIComponent(userdetail.nick)).then(resp => {
                return resp.json();
            }).then(resp => {
                if (!resp.Error) {
                    a7profile.close();
                    var url = '';
                    var spltcnt = window.location.href.split('/').filter(t => t);
                    if (spltcnt.length > 4) {
                        var pgid = spltcnt[4];
                        url = "/Home/Page/" + pgid + "/" + userdetail.mobno;
                    } else {
                        url = "/Home/Page";
                    }
                    window.location.href = url;
                    //window.location.reload(true);
                } else {
                    alert('SMS gateway error.. please try again after some time');
                }
            });
    });

    return {
        open: function () {
            popopen = true;
            nckInst.click();
        },
        close() {
            popopen = false;
            nckInstClose.click();
        }
    }
})();

window.a7pagelist = (function () {
    var e = document.createElement('div');
    e.innerHTML = '<a id="pagelist-modal-b" href="#pagelist-modal" style="display:none;">Pagelist Modal</a>';
    document.body.appendChild(e.firstChild);
    var pglhtml = `<div id="pagelist-modal" style="color: white;font-family:cursive;">
        <div class="modal-header">
            <h3 style="font-family:cursive;color:darkgray;">Wups</h3>
        </div>
        <br />
        <div class="modal-content" style="text-align:center;">
            <a id="create-new-wup" style="font-size:x-large;">Create New Wup..</a>
            <br />
            <br />
        </div>
        <br /><br /><br />
        <div style="text-align:center;padding-bottom:5px;position:fixed;bottom:0px;width:100%;opacity: 0.9;background-color: #607D8B;line-height: 5;display:none;">
            <button class="btn waves-effect waves-light" name="action">
                Update
                <i class="material-icons right"></i>
            </button>
            <button id="pagelist-modal-close" style="margin-left:75px;" class="btn waves-effect waves-light close-pagelist-modal" name="action">
                Close
                <i class="material-icons right"></i>
            </button>
        </div>
    </div>`;
    e = document.createElement('div');
    e.innerHTML = pglhtml;
    document.body.appendChild(e.firstChild);
    var pgeMdl = document.querySelector("#pagelist-modal");
    var pgeMdlCont = pgeMdl.querySelector(".modal-content");
    var pgeInst = document.querySelector("#pagelist-modal-b");
    var pgeInstClose = document.querySelector("#pagelist-modal-close");

    $("#pagelist-modal-b").animatedModal({
        modalTarget: 'pagelist-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: 'rgb(47, 62, 70)',
        // Callbacks
        beforeOpen: function () {
            console.log("progress - The animation was called");
        },
        afterOpen: function () {
            console.log("progress - The animation is completed");
        },
        beforeClose: function () {
            console.log("progress - The animation was called");
        },
        afterClose: function () {
            console.log("progress - The animation is completed");
        }
    });

    document.getElementById("create-new-wup").addEventListener("click", function () {
        var wpage = {
            Mobile: userdetail.mobno,
            PageUrl: a7utils.createGuid(),
            Nick: userdetail.Nick
        }
        fetch(apiurl + '/api/page/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wpage)
        }).then(resp1 => {
            return resp1.json();
        }).then(resp1 => {
            console.log(resp1);
            a7pagelist.addItem([resp1.NewPage]);
            var a = document.createElement('a');
            a.href = "/Home/Page/" + wpage.PageUrl + "/" + userdetail.mobno;
            //a.setAttribute("target", "_blank");
            a.click();
        });
    });

    function addItem(plst) {
        var itm = `<div style="background-color:aqua;text-align: left;padding:5px;font-size:large;display: table;">
                <div style="display:inline-block;width:9%;display: table-cell;vertical-align: middle;">
                    <img src="/Content/img/no_img.png" style="width:100%;vertical-align:middle;border-radius:20px;" />
                </div>
                <div style="display:inline-block;width:46%;padding-left:10px;">
                    <a class="page-url" href="javascript:void(0);" style="color: white;"><span class="titl-cht">Tite of chat<span></a>
                </div>
                <div style="display:inline-block;width:40%;"><span class="cht-nick">Nickname</span></div>
                <div style="display:none;width:22%;text-align:right;">
                    <button style='background-color:#009688;border:0px;'>Go</button>
                </div>
            </div>`;
        plst.forEach((t, idx) => {
            var elq = document.createElement('div');
            elq.innerHTML = itm;
            var elr = elq.firstChild;
            var bcl = clrs.find(t1 => t1.shade == 'blue');
            elr.querySelector(".page-url").setAttribute("href", "/Home/Page/" + t.PageUrl + "/" + userdetail.mobno);
            elr.querySelector(".titl-cht").innerHTML = t.PageName;
            elr.querySelector(".cht-nick").innerHTML = t.Nick;
            elr.style.backgroundColor = (idx % 2) > 0 ? 'rgb(92, 121, 119)' : 'rgb(34, 72, 78)';
            a7utils.setData(elr, "pagedata", t);
            pgeMdlCont.appendChild(elr);
        });
    }

    return {
        open: function () {
            popopen = true;
            pgeInst.click();
        },
        close() {
            popopen = false;
            pgeInstClose.click();
        },
        addItem: addItem
    }
})();

window.a7security = (function () {
    var e = document.createElement('div');
    e.innerHTML = '<a id="security-modal-b" href="#security-modal" style="display:none;">Security Modal</a>';
    document.body.appendChild(e.firstChild);
    var sechtml = `<div id="security-modal" style="color: white;font-family:cursive;">
        <div class="modal-header">
            <h4 style="font-family:cursive;color:darkgray;">Allow Access</h4>
        </div>
        <br /><br />
        <div class="modal-content" style="text-align:center;">
            <p>
                <input id="txtChtTitle" type="text" placeholder="Chat Title" style="width:50%;border-style:ridge;text-align: center;" />
                <br /><br />
                <input id="txtNickName" type="text" placeholder="Your Nick Name" style="width:50%;border-style:ridge;text-align: center;" />
                <br /><br />
                <label style="font-size:larger;">
                    <input id="chkSecr" type="checkbox" />
                    <span style="font-size:25px;">Secure</span>
                </label>
                <br /><br /><br />
                <input id="txtAllowMobs" type="text" placeholder="Add mobile #s to be allowed" style="width:95%;border-style:ridge;text-align: center;" />
            </p>
        </div>
        <br /><br /><br /><br />
        <div style="text-align:center;padding-bottom:5px;position:fixed;bottom:0px;width:100%;opacity: 0.9;background-color: #607D8B;line-height: 5;">
            <button id="btnAccessNick" class="btn waves-effect waves-light" name="action">
                Update
                <i class="material-icons right"></i>
            </button>
            <button style="margin-left:75px;" class="btn waves-effect waves-light close-security-modal" name="action">
                Close
                <i class="material-icons right"></i>
            </button>
        </div>
    </div>`;
    e = document.createElement('div');
    e.innerHTML = sechtml;
    document.body.appendChild(e.firstChild);
    var secMdl = document.querySelector("#security-modal");
    var secMdlCont = secMdl.querySelector(".modal-content");
    var secInst = document.querySelector("#security-modal-b");
    var secInstClose = document.querySelector("#security-modal-close");

    $("#security-modal-b").animatedModal({
        modalTarget: 'security-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: 'rgb(47, 62, 70)',
        // Callbacks
        beforeOpen: function () {
            console.log("security - The animation was called");
        },
        afterOpen: function () {
            console.log("security - The animation is completed");
        },
        beforeClose: function () {
            console.log("security - The animation was called");
        },
        afterClose: function () {
            console.log("security - The animation is completed");
        }
    });

    document.getElementById("btnAccessNick").addEventListener("click", function () {
        var wpge = {
            PageUrl: pdata.Header.PageUrl,
            PageName: document.getElementById("txtChtTitle").value,
            AllowedMobiles: document.getElementById("txtAllowMobs").value,
            Secured: document.getElementById("chkSecr").checked,
            Nick: document.getElementById("txtNickName").value,
            Mobile: userdetail.mobno
        };
        a7progress.open();
        fetch(apiurl + '/api/page/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wpge)
        }).then(resp1 => {
            return resp1.json();
        }).then(resp1 => {
            console.log(resp1);
            a7progress.close();
        });
    });

    document.getElementById("chkSecr").addEventListener("change", function () {
        console.log(this.checked);
    });

    var assignSecurity = function () {
        if (pdata.Header.Mobile == userdetail.mobno) {
            document.getElementsByClassName("add-wup")[0].style.display = "block";
            document.getElementById("txtNickName").value = userdetail.nick;
            document.getElementById("txtChtTitle").value = pdata.Header.PageName;
            document.getElementById("txtAllowMobs").value = pdata.Header.AllowedMobiles;
            document.getElementById("chkSecr").checked = pdata.Header.Secured;
        }
    }

    return {
        open: function () {
            popopen = true;
            secInst.click();
        },
        close() {
            popopen = false;
            secInstClose.click();
        },
        assignSecurity: assignSecurity
    }
})();