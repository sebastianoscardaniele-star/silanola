import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'panini-2026-FINAL-FINAL-v9';
const UI_STORAGE_KEY = 'panini-2026-ui-preferencias-v1';

const TEAMS = [
  {
    "group": "A",
    "code": "MEX",
    "name": "México"
  },
  {
    "group": "A",
    "code": "RSA",
    "name": "Sudáfrica"
  },
  {
    "group": "A",
    "code": "KOR",
    "name": "Corea del Sur"
  },
  {
    "group": "A",
    "code": "CZE",
    "name": "República Checa"
  },
  {
    "group": "B",
    "code": "CAN",
    "name": "Canadá"
  },
  {
    "group": "B",
    "code": "BIH",
    "name": "Bosnia y Herzegovina"
  },
  {
    "group": "B",
    "code": "QAT",
    "name": "Qatar"
  },
  {
    "group": "B",
    "code": "SUI",
    "name": "Suiza"
  },
  {
    "group": "C",
    "code": "BRA",
    "name": "Brasil"
  },
  {
    "group": "C",
    "code": "MAR",
    "name": "Marruecos"
  },
  {
    "group": "C",
    "code": "HAI",
    "name": "Haití"
  },
  {
    "group": "C",
    "code": "SCO",
    "name": "Escocia"
  },
  {
    "group": "D",
    "code": "USA",
    "name": "Estados Unidos"
  },
  {
    "group": "D",
    "code": "PAR",
    "name": "Paraguay"
  },
  {
    "group": "D",
    "code": "AUS",
    "name": "Australia"
  },
  {
    "group": "D",
    "code": "TUR",
    "name": "Turquía"
  },
  {
    "group": "E",
    "code": "GER",
    "name": "Alemania"
  },
  {
    "group": "E",
    "code": "CUW",
    "name": "Curazao"
  },
  {
    "group": "E",
    "code": "CIV",
    "name": "Costa de Marfil"
  },
  {
    "group": "E",
    "code": "ECU",
    "name": "Ecuador"
  },
  {
    "group": "F",
    "code": "NED",
    "name": "Países Bajos"
  },
  {
    "group": "F",
    "code": "JPN",
    "name": "Japón"
  },
  {
    "group": "F",
    "code": "SWE",
    "name": "Suecia"
  },
  {
    "group": "F",
    "code": "TUN",
    "name": "Túnez"
  },
  {
    "group": "G",
    "code": "BEL",
    "name": "Bélgica"
  },
  {
    "group": "G",
    "code": "EGY",
    "name": "Egipto"
  },
  {
    "group": "G",
    "code": "IRN",
    "name": "Irán"
  },
  {
    "group": "G",
    "code": "NZL",
    "name": "Nueva Zelanda"
  },
  {
    "group": "H",
    "code": "ESP",
    "name": "España"
  },
  {
    "group": "H",
    "code": "CPV",
    "name": "Cabo Verde"
  },
  {
    "group": "H",
    "code": "KSA",
    "name": "Arabia Saudita"
  },
  {
    "group": "H",
    "code": "URU",
    "name": "Uruguay"
  },
  {
    "group": "I",
    "code": "FRA",
    "name": "Francia"
  },
  {
    "group": "I",
    "code": "SEN",
    "name": "Senegal"
  },
  {
    "group": "I",
    "code": "IRQ",
    "name": "Irak"
  },
  {
    "group": "I",
    "code": "NOR",
    "name": "Noruega"
  },
  {
    "group": "J",
    "code": "ARG",
    "name": "Argentina"
  },
  {
    "group": "J",
    "code": "ALG",
    "name": "Argelia"
  },
  {
    "group": "J",
    "code": "AUT",
    "name": "Austria"
  },
  {
    "group": "J",
    "code": "JOR",
    "name": "Jordania"
  },
  {
    "group": "K",
    "code": "POR",
    "name": "Portugal"
  },
  {
    "group": "K",
    "code": "COD",
    "name": "RD Congo"
  },
  {
    "group": "K",
    "code": "UZB",
    "name": "Uzbekistán"
  },
  {
    "group": "K",
    "code": "COL",
    "name": "Colombia"
  },
  {
    "group": "L",
    "code": "ENG",
    "name": "Inglaterra"
  },
  {
    "group": "L",
    "code": "CRO",
    "name": "Croacia"
  },
  {
    "group": "L",
    "code": "GHA",
    "name": "Ghana"
  },
  {
    "group": "L",
    "code": "PAN",
    "name": "Panamá"
  }
];

const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

const PLAYER_PRESETS = {
"MEX": [
    "Escudo",
    "Luis Malagón",
    "Johan Vásquez",
    "Jorge Sánchez",
    "César Montes",
    "Jesús Gallardo",
    "Israel Reyes",
    "Diego Lainez",
    "Carlos Rodríguez",
    "Edson Álvarez",
    "Orbelín Pineda",
    "Marcel Ruiz",
    "Foto de equipo",
    "Érick Sánchez",
    "Hirving Lozano",
    "Santiago Giménez",
    "Raúl Jiménez",
    "Alexis Vega",
    "Roberto Alvarado",
    "César Huerta"
  ],
  "RSA": [
    "Escudo",
    "Ronwen Williams",
    "Sipho Chaine",
    "Aubrey Modiba",
    "Samukele Kabini",
    "Mbekezeli Mbokazi",
    "Khulumani Ndamane",
    "Siyabonga Ngezana",
    "Khuliso Mudau",
    "Nkosinathi Sibisi",
    "Teboho Mokoena",
    "Thalente Mbatha",
    "Foto de equipo",
    "Bathusi Aubaas",
    "Yaya Sithole",
    "Sipho Mbule",
    "Lyle Foster",
    "Iqraam Rayners",
    "Mohau Nkota",
    "Oswin Appollis"
  ],
  "KOR": [
    "Escudo",
    "Hyeonwoo Jo",
    "Seunggyu Kim",
    "Minjae KIM",
    "Yumin Cho",
    "Youngwoo Seol",
    "Hanbeom Lee",
    "Taeseok Lee",
    "Myungjae Lee",
    "Jaesung Lee",
    "Inbeom Hwang",
    "Kangin Lee",
    "Foto de equipo",
    "Seungho Paik",
    "Jens Castrop",
    "Donggyeong Lee",
    "Guesung Cho",
    "Heungmin Son",
    "Heechan Hwang",
    "Hyeongyu Oh"
  ],
  "CZE": [
    "Escudo",
    "Matej Kovar",
    "Jindrich Stanek",
    "Ladislav Krejci",
    "Vladimir Coufal",
    "Jaroslav Zeleny",
    "Tomas Holes",
    "David Zima",
    "Michal Sadílek",
    "Lukas Provod",
    "Lukas Cerv",
    "Tomas Soucek",
    "Foto de equipo",
    "Pavel Sulc",
    "Matej Vydra",
    "Vasil Kusej",
    "Tomas Chory",
    "Vaclav Cerny",
    "Adam Hlozek",
    "Patrick Schick"
  ],
MEX: [
  "Escudo",
  "MEX 2",
  "MEX 3",
  "MEX 4",
  "MEX 5",
  "MEX 6",
  "MEX 7",
  "MEX 8",
  "MEX 9",
  "MEX 10",
  "MEX 11",
  "MEX 12",
  "Foto de equipo",
  "MEX 14",
  "MEX 15",
  "MEX 16",
  "MEX 17",
  "MEX 18",
  "MEX 19",
  "MEX 20"
],
RSA: [
  "Escudo",
  "RSA 2",
  "RSA 3",
  "RSA 4",
  "RSA 5",
  "RSA 6",
  "RSA 7",
  "RSA 8",
  "RSA 9",
  "RSA 10",
  "RSA 11",
  "RSA 12",
  "Foto de equipo",
  "RSA 14",
  "RSA 15",
  "RSA 16",
  "RSA 17",
  "RSA 18",
  "RSA 19",
  "RSA 20"
],
KOR: [
  "Escudo",
  "KOR 2",
  "KOR 3",
  "KOR 4",
  "KOR 5",
  "KOR 6",
  "KOR 7",
  "KOR 8",
  "KOR 9",
  "KOR 10",
  "KOR 11",
  "KOR 12",
  "Foto de equipo",
  "KOR 14",
  "KOR 15",
  "KOR 16",
  "KOR 17",
  "KOR 18",
  "KOR 19",
  "KOR 20"
],
CZE: [
  "Escudo",
  "CZE 2",
  "CZE 3",
  "CZE 4",
  "CZE 5",
  "CZE 6",
  "CZE 7",
  "CZE 8",
  "CZE 9",
  "CZE 10",
  "CZE 11",
  "CZE 12",
  "Foto de equipo",
  "CZE 14",
  "CZE 15",
  "CZE 16",
  "CZE 17",
  "CZE 18",
  "CZE 19",
  "CZE 20"
],
BRA: [
  "Escudo",
  "BRA 2",
  "BRA 3",
  "BRA 4",
  "BRA 5",
  "BRA 6",
  "BRA 7",
  "BRA 8",
  "BRA 9",
  "BRA 10",
  "BRA 11",
  "BRA 12",
  "Foto de equipo",
  "BRA 14",
  "BRA 15",
  "BRA 16",
  "BRA 17",
  "BRA 18",
  "BRA 19",
  "BRA 20"
],
MAR: [
  "Escudo",
  "MAR 2",
  "MAR 3",
  "MAR 4",
  "MAR 5",
  "MAR 6",
  "MAR 7",
  "MAR 8",
  "MAR 9",
  "MAR 10",
  "MAR 11",
  "MAR 12",
  "Foto de equipo",
  "MAR 14",
  "MAR 15",
  "MAR 16",
  "MAR 17",
  "MAR 18",
  "MAR 19",
  "MAR 20"
],
HAI: [
  "Escudo",
  "HAI 2",
  "HAI 3",
  "HAI 4",
  "HAI 5",
  "HAI 6",
  "HAI 7",
  "HAI 8",
  "HAI 9",
  "HAI 10",
  "HAI 11",
  "HAI 12",
  "Foto de equipo",
  "HAI 14",
  "HAI 15",
  "HAI 16",
  "HAI 17",
  "HAI 18",
  "HAI 19",
  "HAI 20"
],
SCO: [
  "Escudo",
  "SCO 2",
  "SCO 3",
  "SCO 4",
  "SCO 5",
  "SCO 6",
  "SCO 7",
  "SCO 8",
  "SCO 9",
  "SCO 10",
  "SCO 11",
  "SCO 12",
  "Foto de equipo",
  "SCO 14",
  "SCO 15",
  "SCO 16",
  "SCO 17",
  "SCO 18",
  "SCO 19",
  "SCO 20"
],
USA: [
  "Escudo",
  "USA 2",
  "USA 3",
  "USA 4",
  "USA 5",
  "USA 6",
  "USA 7",
  "USA 8",
  "USA 9",
  "USA 10",
  "USA 11",
  "USA 12",
  "Foto de equipo",
  "USA 14",
  "USA 15",
  "USA 16",
  "USA 17",
  "USA 18",
  "USA 19",
  "USA 20"
],
PAR: [
  "Escudo",
  "PAR 2",
  "PAR 3",
  "PAR 4",
  "PAR 5",
  "PAR 6",
  "PAR 7",
  "PAR 8",
  "PAR 9",
  "PAR 10",
  "PAR 11",
  "PAR 12",
  "Foto de equipo",
  "PAR 14",
  "PAR 15",
  "PAR 16",
  "PAR 17",
  "PAR 18",
  "PAR 19",
  "PAR 20"
],
AUS: [
  "Escudo",
  "AUS 2",
  "AUS 3",
  "AUS 4",
  "AUS 5",
  "AUS 6",
  "AUS 7",
  "AUS 8",
  "AUS 9",
  "AUS 10",
  "AUS 11",
  "AUS 12",
  "Foto de equipo",
  "AUS 14",
  "AUS 15",
  "AUS 16",
  "AUS 17",
  "AUS 18",
  "AUS 19",
  "AUS 20"
],
TUR: [
  "Escudo",
  "TUR 2",
  "TUR 3",
  "TUR 4",
  "TUR 5",
  "TUR 6",
  "TUR 7",
  "TUR 8",
  "TUR 9",
  "TUR 10",
  "TUR 11",
  "TUR 12",
  "Foto de equipo",
  "TUR 14",
  "TUR 15",
  "TUR 16",
  "TUR 17",
  "TUR 18",
  "TUR 19",
  "TUR 20"
],
GER: [
  "Escudo",
  "GER 2",
  "GER 3",
  "GER 4",
  "GER 5",
  "GER 6",
  "GER 7",
  "GER 8",
  "GER 9",
  "GER 10",
  "GER 11",
  "GER 12",
  "Foto de equipo",
  "GER 14",
  "GER 15",
  "GER 16",
  "GER 17",
  "GER 18",
  "GER 19",
  "GER 20"
],
CUW: [
  "Escudo",
  "CUW 2",
  "CUW 3",
  "CUW 4",
  "CUW 5",
  "CUW 6",
  "CUW 7",
  "CUW 8",
  "CUW 9",
  "CUW 10",
  "CUW 11",
  "CUW 12",
  "Foto de equipo",
  "CUW 14",
  "CUW 15",
  "CUW 16",
  "CUW 17",
  "CUW 18",
  "CUW 19",
  "CUW 20"
],
CIV: [
  "Escudo",
  "CIV 2",
  "CIV 3",
  "CIV 4",
  "CIV 5",
  "CIV 6",
  "CIV 7",
  "CIV 8",
  "CIV 9",
  "CIV 10",
  "CIV 11",
  "CIV 12",
  "Foto de equipo",
  "CIV 14",
  "CIV 15",
  "CIV 16",
  "CIV 17",
  "CIV 18",
  "CIV 19",
  "CIV 20"
],
ECU: [
  "Escudo",
  "ECU 2",
  "ECU 3",
  "ECU 4",
  "ECU 5",
  "ECU 6",
  "ECU 7",
  "ECU 8",
  "ECU 9",
  "ECU 10",
  "ECU 11",
  "ECU 12",
  "Foto de equipo",
  "ECU 14",
  "ECU 15",
  "ECU 16",
  "ECU 17",
  "ECU 18",
  "ECU 19",
  "ECU 20"
],
NED: [
  "Escudo",
  "NED 2",
  "NED 3",
  "NED 4",
  "NED 5",
  "NED 6",
  "NED 7",
  "NED 8",
  "NED 9",
  "NED 10",
  "NED 11",
  "NED 12",
  "Foto de equipo",
  "NED 14",
  "NED 15",
  "NED 16",
  "NED 17",
  "NED 18",
  "NED 19",
  "NED 20"
],
JPN: [
  "Escudo",
  "JPN 2",
  "JPN 3",
  "JPN 4",
  "JPN 5",
  "JPN 6",
  "JPN 7",
  "JPN 8",
  "JPN 9",
  "JPN 10",
  "JPN 11",
  "JPN 12",
  "Foto de equipo",
  "JPN 14",
  "JPN 15",
  "JPN 16",
  "JPN 17",
  "JPN 18",
  "JPN 19",
  "JPN 20"
],
SWE: [
  "Escudo",
  "SWE 2",
  "SWE 3",
  "SWE 4",
  "SWE 5",
  "SWE 6",
  "SWE 7",
  "SWE 8",
  "SWE 9",
  "SWE 10",
  "SWE 11",
  "SWE 12",
  "Foto de equipo",
  "SWE 14",
  "SWE 15",
  "SWE 16",
  "SWE 17",
  "SWE 18",
  "SWE 19",
  "SWE 20"
],
TUN: [
  "Escudo",
  "TUN 2",
  "TUN 3",
  "TUN 4",
  "TUN 5",
  "TUN 6",
  "TUN 7",
  "TUN 8",
  "TUN 9",
  "TUN 10",
  "TUN 11",
  "TUN 12",
  "Foto de equipo",
  "TUN 14",
  "TUN 15",
  "TUN 16",
  "TUN 17",
  "TUN 18",
  "TUN 19",
  "TUN 20"
],
BEL: [
  "Escudo",
  "BEL 2",
  "BEL 3",
  "BEL 4",
  "BEL 5",
  "BEL 6",
  "BEL 7",
  "BEL 8",
  "BEL 9",
  "BEL 10",
  "BEL 11",
  "BEL 12",
  "Foto de equipo",
  "BEL 14",
  "BEL 15",
  "BEL 16",
  "BEL 17",
  "BEL 18",
  "BEL 19",
  "BEL 20"
],
EGY: [
  "Escudo",
  "EGY 2",
  "EGY 3",
  "EGY 4",
  "EGY 5",
  "EGY 6",
  "EGY 7",
  "EGY 8",
  "EGY 9",
  "EGY 10",
  "EGY 11",
  "EGY 12",
  "Foto de equipo",
  "EGY 14",
  "EGY 15",
  "EGY 16",
  "EGY 17",
  "EGY 18",
  "EGY 19",
  "EGY 20"
],
IRN: [
  "Escudo",
  "IRN 2",
  "IRN 3",
  "IRN 4",
  "IRN 5",
  "IRN 6",
  "IRN 7",
  "IRN 8",
  "IRN 9",
  "IRN 10",
  "IRN 11",
  "IRN 12",
  "Foto de equipo",
  "IRN 14",
  "IRN 15",
  "IRN 16",
  "IRN 17",
  "IRN 18",
  "IRN 19",
  "IRN 20"
],
NZL: [
  "Escudo",
  "NZL 2",
  "NZL 3",
  "NZL 4",
  "NZL 5",
  "NZL 6",
  "NZL 7",
  "NZL 8",
  "NZL 9",
  "NZL 10",
  "NZL 11",
  "NZL 12",
  "Foto de equipo",
  "NZL 14",
  "NZL 15",
  "NZL 16",
  "NZL 17",
  "NZL 18",
  "NZL 19",
  "NZL 20"
],
ESP: [
  "Escudo",
  "ESP 2",
  "ESP 3",
  "ESP 4",
  "ESP 5",
  "ESP 6",
  "ESP 7",
  "ESP 8",
  "ESP 9",
  "ESP 10",
  "ESP 11",
  "ESP 12",
  "Foto de equipo",
  "ESP 14",
  "ESP 15",
  "ESP 16",
  "ESP 17",
  "ESP 18",
  "ESP 19",
  "ESP 20"
],
CPV: [
  "Escudo",
  "CPV 2",
  "CPV 3",
  "CPV 4",
  "CPV 5",
  "CPV 6",
  "CPV 7",
  "CPV 8",
  "CPV 9",
  "CPV 10",
  "CPV 11",
  "CPV 12",
  "Foto de equipo",
  "CPV 14",
  "CPV 15",
  "CPV 16",
  "CPV 17",
  "CPV 18",
  "CPV 19",
  "CPV 20"
],
KSA: [
  "Escudo",
  "KSA 2",
  "KSA 3",
  "KSA 4",
  "KSA 5",
  "KSA 6",
  "KSA 7",
  "KSA 8",
  "KSA 9",
  "KSA 10",
  "KSA 11",
  "KSA 12",
  "Foto de equipo",
  "KSA 14",
  "KSA 15",
  "KSA 16",
  "KSA 17",
  "KSA 18",
  "KSA 19",
  "KSA 20"
],
URU: [
  "Escudo",
  "URU 2",
  "URU 3",
  "URU 4",
  "URU 5",
  "URU 6",
  "URU 7",
  "URU 8",
  "URU 9",
  "URU 10",
  "URU 11",
  "URU 12",
  "Foto de equipo",
  "URU 14",
  "URU 15",
  "URU 16",
  "URU 17",
  "URU 18",
  "URU 19",
  "URU 20"
],
FRA: [
  "Escudo",
  "FRA 2",
  "FRA 3",
  "FRA 4",
  "FRA 5",
  "FRA 6",
  "FRA 7",
  "FRA 8",
  "FRA 9",
  "FRA 10",
  "FRA 11",
  "FRA 12",
  "Foto de equipo",
  "FRA 14",
  "FRA 15",
  "FRA 16",
  "FRA 17",
  "FRA 18",
  "FRA 19",
  "FRA 20"
],
SEN: [
  "Escudo",
  "SEN 2",
  "SEN 3",
  "SEN 4",
  "SEN 5",
  "SEN 6",
  "SEN 7",
  "SEN 8",
  "SEN 9",
  "SEN 10",
  "SEN 11",
  "SEN 12",
  "Foto de equipo",
  "SEN 14",
  "SEN 15",
  "SEN 16",
  "SEN 17",
  "SEN 18",
  "SEN 19",
  "SEN 20"
],
IRQ: [
  "Escudo",
  "IRQ 2",
  "IRQ 3",
  "IRQ 4",
  "IRQ 5",
  "IRQ 6",
  "IRQ 7",
  "IRQ 8",
  "IRQ 9",
  "IRQ 10",
  "IRQ 11",
  "IRQ 12",
  "Foto de equipo",
  "IRQ 14",
  "IRQ 15",
  "IRQ 16",
  "IRQ 17",
  "IRQ 18",
  "IRQ 19",
  "IRQ 20"
],
NOR: [
  "Escudo",
  "NOR 2",
  "NOR 3",
  "NOR 4",
  "NOR 5",
  "NOR 6",
  "NOR 7",
  "NOR 8",
  "NOR 9",
  "NOR 10",
  "NOR 11",
  "NOR 12",
  "Foto de equipo",
  "NOR 14",
  "NOR 15",
  "NOR 16",
  "NOR 17",
  "NOR 18",
  "NOR 19",
  "NOR 20"
],
ARG: [
  "Escudo",
  "ARG 2",
  "ARG 3",
  "ARG 4",
  "ARG 5",
  "ARG 6",
  "ARG 7",
  "ARG 8",
  "ARG 9",
  "ARG 10",
  "ARG 11",
  "ARG 12",
  "Foto de equipo",
  "ARG 14",
  "ARG 15",
  "ARG 16",
  "ARG 17",
  "ARG 18",
  "ARG 19",
  "ARG 20"
],
ALG: [
  "Escudo",
  "ALG 2",
  "ALG 3",
  "ALG 4",
  "ALG 5",
  "ALG 6",
  "ALG 7",
  "ALG 8",
  "ALG 9",
  "ALG 10",
  "ALG 11",
  "ALG 12",
  "Foto de equipo",
  "ALG 14",
  "ALG 15",
  "ALG 16",
  "ALG 17",
  "ALG 18",
  "ALG 19",
  "ALG 20"
],
AUT: [
  "Escudo",
  "AUT 2",
  "AUT 3",
  "AUT 4",
  "AUT 5",
  "AUT 6",
  "AUT 7",
  "AUT 8",
  "AUT 9",
  "AUT 10",
  "AUT 11",
  "AUT 12",
  "Foto de equipo",
  "AUT 14",
  "AUT 15",
  "AUT 16",
  "AUT 17",
  "AUT 18",
  "AUT 19",
  "AUT 20"
],
JOR: [
  "Escudo",
  "JOR 2",
  "JOR 3",
  "JOR 4",
  "JOR 5",
  "JOR 6",
  "JOR 7",
  "JOR 8",
  "JOR 9",
  "JOR 10",
  "JOR 11",
  "JOR 12",
  "Foto de equipo",
  "JOR 14",
  "JOR 15",
  "JOR 16",
  "JOR 17",
  "JOR 18",
  "JOR 19",
  "JOR 20"
],
POR: [
  "Escudo",
  "POR 2",
  "POR 3",
  "POR 4",
  "POR 5",
  "POR 6",
  "POR 7",
  "POR 8",
  "POR 9",
  "POR 10",
  "POR 11",
  "POR 12",
  "Foto de equipo",
  "POR 14",
  "POR 15",
  "POR 16",
  "POR 17",
  "POR 18",
  "POR 19",
  "POR 20"
],
COD: [
  "Escudo",
  "COD 2",
  "COD 3",
  "COD 4",
  "COD 5",
  "COD 6",
  "COD 7",
  "COD 8",
  "COD 9",
  "COD 10",
  "COD 11",
  "COD 12",
  "Foto de equipo",
  "COD 14",
  "COD 15",
  "COD 16",
  "COD 17",
  "COD 18",
  "COD 19",
  "COD 20"
],
UZB: [
  "Escudo",
  "UZB 2",
  "UZB 3",
  "UZB 4",
  "UZB 5",
  "UZB 6",
  "UZB 7",
  "UZB 8",
  "UZB 9",
  "UZB 10",
  "UZB 11",
  "UZB 12",
  "Foto de equipo",
  "UZB 14",
  "UZB 15",
  "UZB 16",
  "UZB 17",
  "UZB 18",
  "UZB 19",
  "UZB 20"
],
COL: [
  "Escudo",
  "COL 2",
  "COL 3",
  "COL 4",
  "COL 5",
  "COL 6",
  "COL 7",
  "COL 8",
  "COL 9",
  "COL 10",
  "COL 11",
  "COL 12",
  "Foto de equipo",
  "COL 14",
  "COL 15",
  "COL 16",
  "COL 17",
  "COL 18",
  "COL 19",
  "COL 20"
],
ENG: [
  "Escudo",
  "ENG 2",
  "ENG 3",
  "ENG 4",
  "ENG 5",
  "ENG 6",
  "ENG 7",
  "ENG 8",
  "ENG 9",
  "ENG 10",
  "ENG 11",
  "ENG 12",
  "Foto de equipo",
  "ENG 14",
  "ENG 15",
  "ENG 16",
  "ENG 17",
  "ENG 18",
  "ENG 19",
  "ENG 20"
],
CRO: [
  "Escudo",
  "CRO 2",
  "CRO 3",
  "CRO 4",
  "CRO 5",
  "CRO 6",
  "CRO 7",
  "CRO 8",
  "CRO 9",
  "CRO 10",
  "CRO 11",
  "CRO 12",
  "Foto de equipo",
  "CRO 14",
  "CRO 15",
  "CRO 16",
  "CRO 17",
  "CRO 18",
  "CRO 19",
  "CRO 20"
],
GHA: [
  "Escudo",
  "GHA 2",
  "GHA 3",
  "GHA 4",
  "GHA 5",
  "GHA 6",
  "GHA 7",
  "GHA 8",
  "GHA 9",
  "GHA 10",
  "GHA 11",
  "GHA 12",
  "Foto de equipo",
  "GHA 14",
  "GHA 15",
  "GHA 16",
  "GHA 17",
  "GHA 18",
  "GHA 19",
  "GHA 20"
],
PAN: [
  "Escudo",
  "PAN 2",
  "PAN 3",
  "PAN 4",
  "PAN 5",
  "PAN 6",
  "PAN 7",
  "PAN 8",
  "PAN 9",
  "PAN 10",
  "PAN 11",
  "PAN 12",
  "Foto de equipo",
  "PAN 14",
  "PAN 15",
  "PAN 16",
  "PAN 17",
  "PAN 18",
  "PAN 19",
  "PAN 20"
],
  CAN: [
    "Escudo",
    "Dayne ST.Clair",
    "Aphonso Davies",
    "Alistar Johnston",
    "Samuel Adekugbe",
    "Richie Laryea",
    "Derek Cornelius",
    "Moise Bombito",
    "Kamal Miller",
    "Stephen Eustáquio",
    "Ismael Koné",
    "Jonathan Osorio",
    "Foto de equipo",
    "Jacob Shaffelburg",
    "Mathieu Choiniére",
    "Niko Sigur",
    "Tajon Buchanan",
    "Liam Millar",
    "Cyle Larin",
    "Jonathan David"
  ],
  BIH: [
    "Escudo",
    "Nikola Vasilj",
    "Amar Dedic",
    "Sead Kolasinac",
    "Tarik Muharemovic",
    "Nihad Mujakic",
    "Nikola Katic",
    "Amir Hadziadhmetovic",
    "Benjamin Tahirovic",
    "Armin Gigovic",
    "Ivan Sunjic",
    "Ivan Basic",
    "Foto de equipo",
    "Dzenis Burnic",
    "Esmir Bajraktarevic",
    "Amar Memic",
    "Ermedin Demirovic",
    "Edin Dzeko",
    "Samed Bazdar",
    "Haris Tabakovic"
  ],
  QAT: [
    "Escudo",
    "Meshaal Barsham",
    "Sultan Albrake",
    "Lucas Mendes",
    "Homam Ahmed",
    "Boualem Khoukhi",
    "Pedro Miguel",
    "Tarek Salman",
    "Mohammed Mannai",
    "Karim Boudiaf",
    "Assim Madibo",
    "Hamed Fatehi",
    "Foto de equipo",
    "Mohammed Waad",
    "Abdulaziz Hatem",
    "Hassan Al-Haydos",
    "Edmílson Junior",
    "Akram Hassan Afif",
    "Ahmed Al-Ganehi",
    "Almoez Ali"
  ],
  SUI: [
    "Escudo",
    "Gregor Kobel",
    "Yvon Mvogo",
    "Manuel Akanji",
    "Ricardo Rodríguez",
    "Nico Elvedi",
    "Auréle Amenda",
    "Silvan Widmer",
    "Granit Xhaka",
    "Denis Zakaria",
    "Remo Freuler",
    "Fabian Rieder",
    "Foto de equipo",
    "Ardon Jashari",
    "Johan Manzambi",
    "Michel Aebischer",
    "Breel Embolo",
    "Rubén Vargas",
    "Dan Ndoye",
    "Zeki Amdouni"
  ]
};

const FORCED_TEAM_PRESETS = {
  "MEX": [
    "Escudo",
    "Luis Malagón",
    "Johan Vásquez",
    "Jorge Sánchez",
    "César Montes",
    "Jesús Gallardo",
    "Israel Reyes",
    "Diego Lainez",
    "Carlos Rodríguez",
    "Edson Álvarez",
    "Orbelín Pineda",
    "Marcel Ruiz",
    "Foto de equipo",
    "Érick Sánchez",
    "Hirving Lozano",
    "Santiago Giménez",
    "Raúl Jiménez",
    "Alexis Vega",
    "Roberto Alvarado",
    "César Huerta"
  ],
  "RSA": [
    "Escudo",
    "Ronwen Williams",
    "Sipho Chaine",
    "Aubrey Modiba",
    "Samukele Kabini",
    "Mbekezeli Mbokazi",
    "Khulumani Ndamane",
    "Siyabonga Ngezana",
    "Khuliso Mudau",
    "Nkosinathi Sibisi",
    "Teboho Mokoena",
    "Thalente Mbatha",
    "Foto de equipo",
    "Bathusi Aubaas",
    "Yaya Sithole",
    "Sipho Mbule",
    "Lyle Foster",
    "Iqraam Rayners",
    "Mohau Nkota",
    "Oswin Appollis"
  ],
  "KOR": [
    "Escudo",
    "Hyeonwoo Jo",
    "Seunggyu Kim",
    "Minjae KIM",
    "Yumin Cho",
    "Youngwoo Seol",
    "Hanbeom Lee",
    "Taeseok Lee",
    "Myungjae Lee",
    "Jaesung Lee",
    "Inbeom Hwang",
    "Kangin Lee",
    "Foto de equipo",
    "Seungho Paik",
    "Jens Castrop",
    "Donggyeong Lee",
    "Guesung Cho",
    "Heungmin Son",
    "Heechan Hwang",
    "Hyeongyu Oh"
  ],
  "CZE": [
    "Escudo",
    "Matej Kovar",
    "Jindrich Stanek",
    "Ladislav Krejci",
    "Vladimir Coufal",
    "Jaroslav Zeleny",
    "Tomas Holes",
    "David Zima",
    "Michal Sadílek",
    "Lukas Provod",
    "Lukas Cerv",
    "Tomas Soucek",
    "Foto de equipo",
    "Pavel Sulc",
    "Matej Vydra",
    "Vasil Kusej",
    "Tomas Chory",
    "Vaclav Cerny",
    "Adam Hlozek",
    "Patrick Schick"
  ],
  "CAN": [
    "Escudo",
    "Dayne ST.Clair",
    "Aphonso Davies",
    "Alistar Johnston",
    "Samuel Adekugbe",
    "Richie Laryea",
    "Derek Cornelius",
    "Moise Bombito",
    "Kamal Miller",
    "Stephen Eustáquio",
    "Ismael Koné",
    "Jonathan Osorio",
    "Foto de equipo",
    "Jacob Shaffelburg",
    "Mathieu Choiniére",
    "Niko Sigur",
    "Tajon Buchanan",
    "Liam Millar",
    "Cyle Larin",
    "Jonathan David"
  ],
  "BIH": [
    "Escudo",
    "Nikola Vasilj",
    "Amar Dedic",
    "Sead Kolasinac",
    "Tarik Muharemovic",
    "Nihad Mujakic",
    "Nikola Katic",
    "Amir Hadziadhmetovic",
    "Benjamin Tahirovic",
    "Armin Gigovic",
    "Ivan Sunjic",
    "Ivan Basic",
    "Foto de equipo",
    "Dzenis Burnic",
    "Esmir Bajraktarevic",
    "Amar Memic",
    "Ermedin Demirovic",
    "Edin Dzeko",
    "Samed Bazdar",
    "Haris Tabakovic"
  ],
  "QAT": [
    "Escudo",
    "Meshaal Barsham",
    "Sultan Albrake",
    "Lucas Mendes",
    "Homam Ahmed",
    "Boualem Khoukhi",
    "Pedro Miguel",
    "Tarek Salman",
    "Mohammed Mannai",
    "Karim Boudiaf",
    "Assim Madibo",
    "Hamed Fatehi",
    "Foto de equipo",
    "Mohammed Waad",
    "Abdulaziz Hatem",
    "Hassan Al-Haydos",
    "Edmílson Junior",
    "Akram Hassan Afif",
    "Ahmed Al-Ganehi",
    "Almoez Ali"
  ],
  "SUI": [
    "Escudo",
    "Gregor Kobel",
    "Yvon Mvogo",
    "Manuel Akanji",
    "Ricardo Rodríguez",
    "Nico Elvedi",
    "Auréle Amenda",
    "Silvan Widmer",
    "Granit Xhaka",
    "Denis Zakaria",
    "Remo Freuler",
    "Fabian Rieder",
    "Foto de equipo",
    "Ardon Jashari",
    "Johan Manzambi",
    "Michel Aebischer",
    "Breel Embolo",
    "Rubén Vargas",
    "Dan Ndoye",
    "Zeki Amdouni"
  ]
};

const MATCH_SCHEDULE = [
  {
    "phase": "Fase de grupos",
    "date": "Jueves 11 de junio",
    "isoDate": "2026-06-11",
    "day": "Jueves",
    "match": "México vs. Sudáfrica",
    "group": "Grupo A",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Ciudad de México",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 11 de junio",
    "isoDate": "2026-06-11",
    "day": "Jueves",
    "match": "Corea del Sur vs. República Checa",
    "group": "Grupo A",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Guadalajara",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 12 de junio",
    "isoDate": "2026-06-12",
    "day": "Viernes",
    "match": "Canadá vs. Bosnia y Herzegovina",
    "group": "Grupo B",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Toronto",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 12 de junio",
    "isoDate": "2026-06-12",
    "day": "Viernes",
    "match": "Estados Unidos vs. Paraguay",
    "group": "Grupo D",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Los Ángeles",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 13 de junio",
    "isoDate": "2026-06-13",
    "day": "Sábado",
    "match": "Qatar vs. Suiza",
    "group": "Grupo B",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "San Francisco",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 13 de junio",
    "isoDate": "2026-06-13",
    "day": "Sábado",
    "match": "Brasil vs. Marruecos",
    "group": "Grupo C",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Nueva Jersey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 13 de junio",
    "isoDate": "2026-06-13",
    "day": "Sábado",
    "match": "Haití vs. Escocia",
    "group": "Grupo C",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Boston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 13 de junio",
    "isoDate": "2026-06-13",
    "day": "Sábado",
    "match": "Australia vs. Turquía",
    "group": "Grupo D",
    "times": "01:00 (ARG/URU), 00:00 (CHI), 23:00 (COL/ECU/PER), 22:00 (MEX)",
    "venue": "Vancouver",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 14 de junio",
    "isoDate": "2026-06-14",
    "day": "Domingo",
    "match": "Alemania vs. Curazao",
    "group": "Grupo E",
    "times": "14:00 (ARG/URU), 13:00 (CHI), 12:00 (COL/ECU/PER), 11:00 (MEX)",
    "venue": "Houston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 14 de junio",
    "isoDate": "2026-06-14",
    "day": "Domingo",
    "match": "Países Bajos vs. Japón",
    "group": "Grupo F",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Dallas",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 14 de junio",
    "isoDate": "2026-06-14",
    "day": "Domingo",
    "match": "Costa de Marfil vs. Ecuador",
    "group": "Grupo E",
    "times": "20:00 (ARG/URU), 19:00 (CHI), 18:00 (COL/ECU/PER), 17:00 (MEX)",
    "venue": "Philadelphia",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 14 de junio",
    "isoDate": "2026-06-14",
    "day": "Domingo",
    "match": "Suecia vs. Túnez",
    "group": "Grupo F",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Monterrey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 15 de junio",
    "isoDate": "2026-06-15",
    "day": "Lunes",
    "match": "España vs. Cabo Verde",
    "group": "Grupo H",
    "times": "13:00 (ARG/URU), 12:00 (CHI), 11:00 (COL/ECU/PER), 10:00 (MEX)",
    "venue": "Atlanta",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 15 de junio",
    "isoDate": "2026-06-15",
    "day": "Lunes",
    "match": "Bélgica vs. Egipto",
    "group": "Grupo G",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Seattle",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 15 de junio",
    "isoDate": "2026-06-15",
    "day": "Lunes",
    "match": "Arabia Saudita vs. Uruguay",
    "group": "Grupo H",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Miami",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 15 de junio",
    "isoDate": "2026-06-15",
    "day": "Lunes",
    "match": "Irán vs. Nueva Zelanda",
    "group": "Grupo G",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Los Ángeles",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 16 de junio",
    "isoDate": "2026-06-16",
    "day": "Martes",
    "match": "Francia vs. Senegal",
    "group": "Grupo I",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Nueva Jersey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 16 de junio",
    "isoDate": "2026-06-16",
    "day": "Martes",
    "match": "Irak vs. Noruega",
    "group": "Grupo I",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Boston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 16 de junio",
    "isoDate": "2026-06-16",
    "day": "Martes",
    "match": "Argentina vs. Argelia",
    "group": "Grupo J",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Kansas City",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 16 de junio",
    "isoDate": "2026-06-16",
    "day": "Martes",
    "match": "Austria vs. Jordania",
    "group": "Grupo J",
    "times": "01:00 (ARG/URU), 00:00 (CHI), 23:00 (COL/ECU/PER), 22:00 (MEX)",
    "venue": "San Francisco",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 17 de junio",
    "isoDate": "2026-06-17",
    "day": "Miércoles",
    "match": "Portugal vs. RD de Congo",
    "group": "Grupo K",
    "times": "14:00 (ARG/URU), 13:00 (CHI), 12:00 (COL/ECU/PER), 11:00 (MEX)",
    "venue": "Houston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 17 de junio",
    "isoDate": "2026-06-17",
    "day": "Miércoles",
    "match": "Inglaterra vs. Croacia",
    "group": "Grupo L",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Dallas",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 17 de junio",
    "isoDate": "2026-06-17",
    "day": "Miércoles",
    "match": "Ghana vs. Panamá",
    "group": "Grupo L",
    "times": "20:00 (ARG/URU), 19:00 (CHI), 18:00 (COL/ECU/PER), 17:00 (MEX)",
    "venue": "Toronto",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 17 de junio",
    "isoDate": "2026-06-17",
    "day": "Miércoles",
    "match": "Uzbekistán vs. Colombia",
    "group": "Grupo K",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Ciudad de México",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 18 de junio",
    "isoDate": "2026-06-18",
    "day": "Jueves",
    "match": "República Checa vs. Sudáfrica",
    "group": "Grupo A",
    "times": "13:00 (ARG/URU), 12:00 (CHI), 11:00 (COL/ECU/PER), 10:00 (MEX)",
    "venue": "Atlanta",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 18 de junio",
    "isoDate": "2026-06-18",
    "day": "Jueves",
    "match": "Suiza vs. Bosnia y Herzegovina",
    "group": "Grupo B",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Los Ángeles",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 18 de junio",
    "isoDate": "2026-06-18",
    "day": "Jueves",
    "match": "Canadá vs. Qatar",
    "group": "Grupo B",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Vancouver",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 18 de junio",
    "isoDate": "2026-06-18",
    "day": "Jueves",
    "match": "México vs. Corea del Sur",
    "group": "Grupo A",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Guadalajara",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 19 de junio",
    "isoDate": "2026-06-19",
    "day": "Viernes",
    "match": "Estados Unidos vs. Australia",
    "group": "Grupo D",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Seattle",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 19 de junio",
    "isoDate": "2026-06-19",
    "day": "Viernes",
    "match": "Escocia vs. Marruecos",
    "group": "Grupo C",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Boston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 19 de junio",
    "isoDate": "2026-06-19",
    "day": "Viernes",
    "match": "Brasil vs. Haití",
    "group": "Grupo C",
    "times": "21:30 (ARG/URU), 20:30 (CHI), 19:30 (COL/ECU/PER), 18:30 (MEX)",
    "venue": "Philadelphia",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 19 de junio",
    "isoDate": "2026-06-19",
    "day": "Viernes",
    "match": "Turquía vs. Paraguay",
    "group": "",
    "times": "00:00 (ARG/URU), 23:00 (CHI), 22:00 (COL/ECU/PER), 21:00 (MEX)",
    "venue": "San Francisco",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 20 de junio",
    "isoDate": "2026-06-20",
    "day": "Sábado",
    "match": "Países Bajos vs. Suecia",
    "group": "Grupo F",
    "times": "14:00 (ARG/URU), 13:00 (CHI), 12:00 (COL/ECU/PER), 11:00 (MEX)",
    "venue": "Houston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 20 de junio",
    "isoDate": "2026-06-20",
    "day": "Sábado",
    "match": "Alemania vs. Costa de Marfil",
    "group": "Grupo E",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Toronto",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 20 de junio",
    "isoDate": "2026-06-20",
    "day": "Sábado",
    "match": "Ecuador vs. Curazao",
    "group": "Grupo E",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Kansas City",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 20 de junio",
    "isoDate": "2026-06-20",
    "day": "Sábado",
    "match": "Túnez vs. Japón",
    "group": "Grupo F",
    "times": "01:00 (ARG/URU), 00:00 (CHI), 23:00 (COL/ECU/PER), 22:00 (MEX)",
    "venue": "Monterrey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 21 de junio",
    "isoDate": "2026-06-21",
    "day": "Domingo",
    "match": "España vs. Arabia Saudita",
    "group": "Grupo H",
    "times": "13:00 (ARG/URU), 12:00 (CHI), 11:00 (COL/ECU/PER), 10:00 (MEX)",
    "venue": "Atlanta",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 21 de junio",
    "isoDate": "2026-06-21",
    "day": "Domingo",
    "match": "Bélgica vs. Irán",
    "group": "Grupo G",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Los Ángeles",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 21 de junio",
    "isoDate": "2026-06-21",
    "day": "Domingo",
    "match": "Uruguay vs. Cabo Verde",
    "group": "Grupo H",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Miami",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Domingo 21 de junio",
    "isoDate": "2026-06-21",
    "day": "Domingo",
    "match": "Nueva Zelanda vs. Egipto",
    "group": "Grupo G",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Vancouver",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 22 de junio",
    "isoDate": "2026-06-22",
    "day": "Lunes",
    "match": "Argentina vs. Austria",
    "group": "Grupo J",
    "times": "14:00 (ARG/URU), 13:00 (CHI), 12:00 (COL/ECU/PER), 11:00 (MEX)",
    "venue": "Dallas",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 22 de junio",
    "isoDate": "2026-06-22",
    "day": "Lunes",
    "match": "Francia vs. Irak",
    "group": "Grupo I",
    "times": "18:00 (ARG/URU), 17:00 (CHI), 16:00 (COL/ECU/PER), 15:00 (MEX)",
    "venue": "Philadelphia",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 22 de junio",
    "isoDate": "2026-06-22",
    "day": "Lunes",
    "match": "Noruega vs. Senegal",
    "group": "Grupo I",
    "times": "21:00 (ARG/URU), 20:00 (CHI), 19:00 (COL/ECU/PER), 18:00 (MEX)",
    "venue": "Nueva Jersey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Lunes 22 de junio",
    "isoDate": "2026-06-22",
    "day": "Lunes",
    "match": "Jordania vs. Argelia",
    "group": "Grupo J",
    "times": "00:00 (ARG/URU), 23:00 (CHI), 22:00 (COL/ECU/PER), 21:00 (MEX)",
    "venue": "San Francisco",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 23 de junio",
    "isoDate": "2026-06-23",
    "day": "Martes",
    "match": "Portugal vs. Uzbekistán",
    "group": "Grupo K",
    "times": "14:00 (ARG/URU), 13:00 (CHI), 12:00 (COL/ECU/PER), 11:00 (MEX)",
    "venue": "Houston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 23 de junio",
    "isoDate": "2026-06-23",
    "day": "Martes",
    "match": "Inglaterra vs. Ghana",
    "group": "Grupo L",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Boston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 23 de junio",
    "isoDate": "2026-06-23",
    "day": "Martes",
    "match": "Panamá vs. Croacia",
    "group": "Grupo L",
    "times": "20:00 (ARG/URU), 19:00 (CHI), 18:00 (COL/ECU/PER), 17:00 (MEX)",
    "venue": "Toronto",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Martes 23 de junio",
    "isoDate": "2026-06-23",
    "day": "Martes",
    "match": "Colombia vs. RD de Congo",
    "group": "Grupo K",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Guadalajara",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "Suiza vs. Canadá",
    "group": "Grupo B",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Vancouver",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "Bosnia y Herzegovina vs. Qatar",
    "group": "Grupo B",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Lumen Field, Seattle",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "Marruecos vs. Haití",
    "group": "Grupo C",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Atlanta",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "Brasil vs. Escocia",
    "group": "Grupo C",
    "times": "19:00 (ARG/URU), 18:00 (CHI), 17:00 (COL/ECU/PER), 16:00 (MEX)",
    "venue": "Miami",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "Sudáfrica vs. Corea del Sur",
    "group": "Grupo A",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Monterrey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Miércoles 24 de junio",
    "isoDate": "2026-06-24",
    "day": "Miércoles",
    "match": "República Checa vs. México",
    "group": "Grupo A",
    "times": "22:00 (ARG/URU), 21:00 (CHI), 20:00 (COL/ECU/PER), 19:00 (MEX)",
    "venue": "Ciudad de México",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Curazao vs. Costa de Marfil",
    "group": "Grupo E",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Philadelphia",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Ecuador vs. Alemania",
    "group": "Grupo E",
    "times": "17:00 (ARG/URU), 16:00 (CHI), 15:00 (COL/ECU/PER), 14:00 (MEX)",
    "venue": "Nueva Jersey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Japón vs. Suecia",
    "group": "Grupo F",
    "times": "20:00 (ARG/URU), 19:00 (CHI), 18:00 (COL/ECU/PER), 17:00 (MEX)",
    "venue": "Dallas",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Túnez vs. Países Bajos",
    "group": "Grupo F",
    "times": "20:00 (ARG/URU), 19:00 (CHI), 18:00 (COL/ECU/PER), 17:00 (MEX)",
    "venue": "Kansas City",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Paraguay vs. Australia",
    "group": "Grupo D",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "San Francisco",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Jueves 25 de junio",
    "isoDate": "2026-06-25",
    "day": "Jueves",
    "match": "Turquía vs. Estados Unidos",
    "group": "Grupo D",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Los Ángeles",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Noruega vs. Francia",
    "group": "Grupo I",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Boston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Senegal vs. Irak",
    "group": "Grupo I",
    "times": "16:00 (ARG/URU), 15:00 (CHI), 14:00 (COL/ECU/PER), 13:00 (MEX)",
    "venue": "Toronto",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Cabo Verde vs. Arabia Saudita",
    "group": "Grupo H",
    "times": "21:00 (ARG/URU), 20:00 (CHI), 19:00 (COL/ECU/PER), 18:00 (MEX)",
    "venue": "Houston",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Uruguay vs. España",
    "group": "Grupo H",
    "times": "21:00 (ARG/URU), 20:00 (CHI), 19:00 (COL/ECU/PER), 18:00 (MEX)",
    "venue": "Guadalajara",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Egipto vs. Irán",
    "group": "Grupo G",
    "times": "00:00 (ARG/URU), 23:00 (CHI), 22:00 (COL/ECU/PER), 21:00 (MEX)",
    "venue": "Seattle",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Viernes 26 de junio",
    "isoDate": "2026-06-26",
    "day": "Viernes",
    "match": "Nueva Zelanda vs. Bélgica",
    "group": "Grupo G",
    "times": "00:00 (ARG/URU), 23:00 (CHI), 22:00 (COL/ECU/PER), 21:00 (MEX)",
    "venue": "Vancouver",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "Croacia vs. Ghana",
    "group": "Grupo L",
    "times": "18:00 (ARG/URU), 17:00 (CHI), 16:00 (COL/ECU/PER), 15:00 (MEX)",
    "venue": "Philadelphia",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "Panamá vs. Inglaterra",
    "group": "Grupo L",
    "times": "18:00 (ARG/URU), 17:00 (CHI), 16:00 (COL/ECU/PER), 15:00 (MEX)",
    "venue": "Nueva Jersey",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "Colombia vs. Portugal",
    "group": "Grupo K",
    "times": "20:30 (ARG/URU), 19:30 (CHI), 18:30 (COL/ECU/PER), 17:30 (MEX)",
    "venue": "Miami",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "RD de Congo vs. Uzbekistán",
    "group": "Grupo K",
    "times": "20:30 (ARG/URU), 19:30 (CHI), 18:30 (COL/ECU/PER), 17:30 (MEX)",
    "venue": "Atlanta",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "Argelia vs. Austria",
    "group": "Grupo J",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Kansas City",
    "number": ""
  },
  {
    "phase": "Fase de grupos",
    "date": "Sábado 27 de junio",
    "isoDate": "2026-06-27",
    "day": "Sábado",
    "match": "Jordania vs. Argentina",
    "group": "Grupo J",
    "times": "23:00 (ARG/URU), 22:00 (CHI), 21:00 (COL/ECU/PER), 20:00 (MEX)",
    "venue": "Dallas",
    "number": ""
  },
  {
    "phase": "16avos. de final",
    "date": "Domingo 28 de junio",
    "isoDate": "2026-06-28",
    "day": "Domingo",
    "match": "2º Grupo A v 2º Grupo B",
    "group": "",
    "times": "",
    "venue": "Los Ángeles",
    "number": "Partido 73"
  },
  {
    "phase": "16avos. de final",
    "date": "Lunes 29 de junio",
    "isoDate": "2026-06-29",
    "day": "Lunes",
    "match": "1º Grupo E v 3º Grupo A/B/C/D/F",
    "group": "",
    "times": "",
    "venue": "Boston",
    "number": "Partido 74"
  },
  {
    "phase": "16avos. de final",
    "date": "Lunes 29 de junio",
    "isoDate": "2026-06-29",
    "day": "Lunes",
    "match": "1º Grupo F v 2º Grupo C",
    "group": "",
    "times": "",
    "venue": "Monterrey",
    "number": "Partido 75"
  },
  {
    "phase": "16avos. de final",
    "date": "Lunes 29 de junio",
    "isoDate": "2026-06-29",
    "day": "Lunes",
    "match": "1º Grupo E v 2º Grupo F",
    "group": "",
    "times": "",
    "venue": "Houston",
    "number": "Partido 76"
  },
  {
    "phase": "16avos. de final",
    "date": "Martes 30 de junio",
    "isoDate": "2026-06-30",
    "day": "Martes",
    "match": "1º Grupo I v 3º Grupo C/D/F/G/H",
    "group": "",
    "times": "",
    "venue": "Nueva Jersey",
    "number": "Partido 77"
  },
  {
    "phase": "16avos. de final",
    "date": "Martes 30 de junio",
    "isoDate": "2026-06-30",
    "day": "Martes",
    "match": "2º Grupo E v 2º Grupo I",
    "group": "",
    "times": "",
    "venue": "Dallas",
    "number": "Partido 78"
  },
  {
    "phase": "16avos. de final",
    "date": "Martes 30 de junio",
    "isoDate": "2026-06-30",
    "day": "Martes",
    "match": "1º Grupo A v 3º Grupo C/E/F/H/I",
    "group": "",
    "times": "",
    "venue": "Ciudad de México",
    "number": "Partido 79"
  },
  {
    "phase": "16avos. de final",
    "date": "Miércoles 1 de julio",
    "isoDate": "2026-07-01",
    "day": "Miércoles",
    "match": "1º Grupo L v 3º Grupo E/H/I/J/K",
    "group": "",
    "times": "",
    "venue": "Atlanta",
    "number": "Partido 80"
  },
  {
    "phase": "16avos. de final",
    "date": "Miércoles 1 de julio",
    "isoDate": "2026-07-01",
    "day": "Miércoles",
    "match": "1º Grupo D v 3º Grupo B/E/F/I/J",
    "group": "",
    "times": "",
    "venue": "San Francisco",
    "number": "Partido 81"
  },
  {
    "phase": "16avos. de final",
    "date": "Miércoles 1 de julio",
    "isoDate": "2026-07-01",
    "day": "Miércoles",
    "match": "1º Grupo G v 3º Grupo A/E/H/I/J",
    "group": "",
    "times": "",
    "venue": "Seattle",
    "number": "Partido 82"
  },
  {
    "phase": "16avos. de final",
    "date": "Jueves 2 de julio",
    "isoDate": "2026-07-02",
    "day": "Jueves",
    "match": "2º Grupo K v 2º Grupo L",
    "group": "",
    "times": "",
    "venue": "Toronto",
    "number": "Partido 83"
  },
  {
    "phase": "16avos. de final",
    "date": "Jueves 2 de julio",
    "isoDate": "2026-07-02",
    "day": "Jueves",
    "match": "1º Grupo H v 2º Grupo J",
    "group": "",
    "times": "",
    "venue": "Los Ángeles",
    "number": "Partido 84"
  },
  {
    "phase": "16avos. de final",
    "date": "Jueves 2 de julio",
    "isoDate": "2026-07-02",
    "day": "Jueves",
    "match": "1º Grupo B v 3º Grupo E/F/G/I/J",
    "group": "",
    "times": "",
    "venue": "Vancouver",
    "number": "Partido 85"
  },
  {
    "phase": "16avos. de final",
    "date": "Viernes 3 de julio",
    "isoDate": "2026-07-03",
    "day": "Viernes",
    "match": "1º Grupo J v 2º Grupo H",
    "group": "",
    "times": "",
    "venue": "Miami",
    "number": "Partido 86"
  },
  {
    "phase": "16avos. de final",
    "date": "Viernes 3 de julio",
    "isoDate": "2026-07-03",
    "day": "Viernes",
    "match": "1º Grupo K v 3º Grupo D/E/I/J/L",
    "group": "",
    "times": "",
    "venue": "Kansas City",
    "number": "Partido 87"
  },
  {
    "phase": "16avos. de final",
    "date": "Viernes 3 de julio",
    "isoDate": "2026-07-03",
    "day": "Viernes",
    "match": "2º Grupo D v 2º Grupo G",
    "group": "",
    "times": "",
    "venue": "Dallas",
    "number": "Partido 88"
  },
  {
    "phase": "Octavos de final",
    "date": "Sábado 4 de julio",
    "isoDate": "2026-07-04",
    "day": "Sábado",
    "match": "Ganador Partido 74 v Ganador Partido 77",
    "group": "",
    "times": "",
    "venue": "Philadelphia",
    "number": "Partido 89"
  },
  {
    "phase": "Octavos de final",
    "date": "Sábado 4 de julio",
    "isoDate": "2026-07-04",
    "day": "Sábado",
    "match": "Ganador Partido 73 v Ganador Partido 75",
    "group": "",
    "times": "",
    "venue": "Houston",
    "number": "Partido 90"
  },
  {
    "phase": "Octavos de final",
    "date": "Domingo 5 de julio",
    "isoDate": "2026-07-05",
    "day": "Domingo",
    "match": "Ganador Partido 76 v Ganador Partido 78",
    "group": "",
    "times": "",
    "venue": "Nueva Jersey",
    "number": "Partido 91"
  },
  {
    "phase": "Octavos de final",
    "date": "Domingo 5 de julio",
    "isoDate": "2026-07-05",
    "day": "Domingo",
    "match": "Ganador Partido 79 v Ganador Partido 80",
    "group": "",
    "times": "",
    "venue": "Ciudad de México",
    "number": "Partido 92"
  },
  {
    "phase": "Octavos de final",
    "date": "Lunes 6 de julio",
    "isoDate": "2026-07-06",
    "day": "Lunes",
    "match": "Ganador Partido 83 v Ganador Partido 84",
    "group": "",
    "times": "",
    "venue": "Dallas",
    "number": "Partido 93"
  },
  {
    "phase": "Octavos de final",
    "date": "Lunes 6 de julio",
    "isoDate": "2026-07-06",
    "day": "Lunes",
    "match": "Ganador Partido 81 v Ganador Partido 82",
    "group": "",
    "times": "",
    "venue": "Seattle",
    "number": "Partido 94"
  },
  {
    "phase": "Octavos de final",
    "date": "Martes 7 de julio",
    "isoDate": "2026-07-07",
    "day": "Martes",
    "match": "Ganador Partido 86 v Ganador Partido 88",
    "group": "",
    "times": "",
    "venue": "Atlanta",
    "number": "Partido 95"
  },
  {
    "phase": "Octavos de final",
    "date": "Martes 7 de julio",
    "isoDate": "2026-07-07",
    "day": "Martes",
    "match": "Ganador Partido 85 v Ganador Partido 87",
    "group": "",
    "times": "",
    "venue": "Vancouver",
    "number": "Partido 96"
  },
  {
    "phase": "Cuartos de final",
    "date": "Jueves 9 de julio",
    "isoDate": "2026-07-09",
    "day": "Jueves",
    "match": "Ganador Partido 89 v Ganador Partido 90",
    "group": "",
    "times": "",
    "venue": "Boston",
    "number": "Partido 97"
  },
  {
    "phase": "Cuartos de final",
    "date": "Viernes 10 de julio",
    "isoDate": "2026-07-10",
    "day": "Viernes",
    "match": "Ganador Partido 93 v Ganador Partido 94",
    "group": "",
    "times": "",
    "venue": "Los Ángeles",
    "number": "Partido 98"
  },
  {
    "phase": "Cuartos de final",
    "date": "Sábado 11 de julio",
    "isoDate": "2026-07-11",
    "day": "Sábado",
    "match": "Ganador Partido 91 v Ganador Partido 92",
    "group": "",
    "times": "",
    "venue": "Miami",
    "number": "Partido 99"
  },
  {
    "phase": "Cuartos de final",
    "date": "Sábado 11 de julio",
    "isoDate": "2026-07-11",
    "day": "Sábado",
    "match": "Ganador Partido 95 v Ganador Partido 96",
    "group": "",
    "times": "",
    "venue": "Kansas City",
    "number": "Partido 100"
  },
  {
    "phase": "Semifinales",
    "date": "Martes 14 de julio",
    "isoDate": "2026-07-14",
    "day": "Martes",
    "match": "Ganador Partido 97 v Ganador Partido 98",
    "group": "",
    "times": "",
    "venue": "Dallas",
    "number": "Partido 101"
  },
  {
    "phase": "Semifinales",
    "date": "Miércoles 15 de julio",
    "isoDate": "2026-07-15",
    "day": "Miércoles",
    "match": "Ganador Partido 99 v Ganador Partido 100",
    "group": "",
    "times": "",
    "venue": "Atlanta",
    "number": "Partido 102"
  },
  {
    "phase": "Tercer puesto",
    "date": "Sábado 18 de julio",
    "isoDate": "2026-07-18",
    "day": "Sábado",
    "match": "Perdedor Partido 101 v Perdedor Partido 102",
    "group": "",
    "times": "",
    "venue": "Miami",
    "number": "Partido 103"
  },
  {
    "phase": "Final",
    "date": "Domingo 19 de julio",
    "isoDate": "2026-07-19",
    "day": "Domingo",
    "match": "Ganador Partido 101 v Ganador Partido 102",
    "group": "",
    "times": "",
    "venue": "Nueva Jersey",
    "number": "Partido 104"
  }
];

function buildAlbum() {
  const fwc = {
    id: 'FWC',
    code: 'FWC',
    name: 'Especiales / Intro FWC',
    type: 'special',
    group: 'Especiales',
    stickers: Array.from({ length: 19 }, (_, index) => ({
      id: `FWC-${index + 1}`,
      code: `FWC-${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  };

  const cc = {
    id: 'CC',
    code: 'CC',
    name: 'Especiales / Intro CC',
    type: 'special',
    group: 'Especiales',
    stickers: Array.from({ length: 14 }, (_, index) => ({
      id: `CC-${index + 1}`,
      code: `CC-${index + 1}`,
      number: index + 1,
      player: '',
      have: false,
      duplicates: 0
    }))
  };

  const countries = TEAMS.map(team => ({
    ...team,
    id: team.code,
    type: 'team',
    stickers: Array.from({ length: 20 }, (_, index) => ({
      id: `${team.code}-${index + 1}`,
      code: `${team.code} ${index + 1}`,
      number: index + 1,
      player: FORCED_TEAM_PRESETS[team.code]?.[index] || PLAYER_PRESETS[team.code]?.[index] || '',
      have: false,
      duplicates: 0
    }))
  }));

  return {
    version: 3,
    createdWith: 'panini-2026-pro-ui',
    sections: [fwc, cc, ...countries]
  };
}



function shouldReplacePresetPlayer(value, sectionCode, index) {
  const current = String(value || '').trim();
  if (!current) return true;
  if (current === `${sectionCode} ${index + 1}`) return true;
  return false;
}


function applyForcedTeamPresets(album) {
  if (!album || !Array.isArray(album.sections)) return album;

  return {
    ...album,
    sections: album.sections.map(section => {
      const forced = FORCED_TEAM_PRESETS[section.code];
      if (!forced || !Array.isArray(section.stickers)) return section;

      return {
        ...section,
        stickers: section.stickers.map((sticker, index) => ({
          ...sticker,
          player: forced[index] || sticker.player || ''
        }))
      };
    })
  };
}

function mergePlayerPresets(album) {
  if (!album || !Array.isArray(album.sections)) return album;

  return {
    ...album,
    sections: album.sections.map(section => {
      const preset = PLAYER_PRESETS[section.code];
      if (!preset || !Array.isArray(section.stickers)) return section;

      return {
        ...section,
        stickers: section.stickers.map((sticker, index) => ({
          ...sticker,
          player: shouldReplacePresetPlayer(sticker.player, section.code, index) ? (preset[index] || '') : sticker.player
        }))
      };
    })
  };
}

function loadAlbum() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return applyForcedTeamPresets(mergePlayerPresets(buildAlbum()));
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.sections)) return applyForcedTeamPresets(mergePlayerPresets(buildAlbum()));
    return applyForcedTeamPresets(mergePlayerPresets(parsed));
  } catch {
    return buildAlbum();
  }
}

function loadUiPreferences() {
  try {
    const saved = localStorage.getItem(UI_STORAGE_KEY);
    if (!saved) return {};
    return JSON.parse(saved) || {};
  } catch {
    return {};
  }
}


function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function percent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function download(filename, content) {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function getInitials(name) {
  return name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
}

export default function App() {
  const initialUi = loadUiPreferences();
  const [album, setAlbum] = useState(loadAlbum);
  const [search, setSearch] = useState(initialUi.search || '');
  const [filter, setFilter] = useState(initialUi.filter || 'all');
  const [sectionFilter, setSectionFilter] = useState(initialUi.sectionFilter || 'all');
  const [groupFilter, setGroupFilter] = useState(initialUi.groupFilter || 'all');
  const [view, setView] = useState(initialUi.view || 'cards');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const [toast, setToast] = useState('');
  const [activeSection, setActiveSection] = useState(initialUi.activeSection || 'album');
  const [calendarPhase, setCalendarPhase] = useState(initialUi.calendarPhase || 'all');
  const [calendarSearch, setCalendarSearch] = useState(initialUi.calendarSearch || '');

  
// 🔥 FORZADO FINAL (NO SE PUEDE PISAR)
useEffect(() => {
  setAlbum(prev => {
    if (!prev || !Array.isArray(prev.sections)) return prev;

    return {
      ...prev,
      sections: prev.sections.map(section => {
        const forced = FORCED_TEAM_PRESETS[section.code];
        if (!forced) return section;

        return {
          ...section,
          stickers: section.stickers.map((s, i) => ({
            ...s,
            player: forced[i] || s.player || ''
          }))
        };
      })
    };
  });
}, []);

useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(album));
  }, [album]);

  useEffect(() => {
    const preferences = {
      search,
      filter,
      sectionFilter,
      groupFilter,
      view,
      activeSection,
      calendarPhase,
      calendarSearch
    };
    localStorage.setItem(UI_STORAGE_KEY, JSON.stringify(preferences));
  }, [search, filter, sectionFilter, groupFilter, view, activeSection, calendarPhase, calendarSearch]);


  const allStickers = useMemo(() => album.sections.flatMap(section =>
    section.stickers.map(sticker => ({ ...sticker, section }))
  ), [album]);

  const stats = useMemo(() => {
    const total = allStickers.length;
    const have = allStickers.filter(sticker => sticker.have).length;
    const duplicates = allStickers.reduce((sum, sticker) => sum + Number(sticker.duplicates || 0), 0);
    return {
      total,
      have,
      missing: total - have,
      duplicates,
      percent: percent(have, total)
    };
  }, [allStickers]);

  const groupStats = useMemo(() => GROUPS.map(group => {
    const teams = album.sections.filter(section => section.group === group);
    const stickers = teams.flatMap(section => section.stickers);
    const have = stickers.filter(sticker => sticker.have).length;
    return {
      group,
      teams,
      total: stickers.length,
      have,
      percent: percent(have, stickers.length)
    };
  }), [album]);

  const filteredSections = useMemo(() => {
    const q = normalize(search.trim());

    return album.sections
      .filter(section => sectionFilter === 'all' || section.code === sectionFilter)
      .filter(section => groupFilter === 'all' || section.group === groupFilter || (groupFilter === 'Especiales' && section.type === 'special'))
      .map(section => {
        const stickers = section.stickers.filter(sticker => {
          const haystack = normalize(`${section.name} ${section.code} ${section.group} ${sticker.code} ${sticker.player}`);
          const matchesSearch = !q || haystack.includes(q);
          const matchesFilter =
            filter === 'all' ||
            (filter === 'have' && sticker.have) ||
            (filter === 'missing' && !sticker.have) ||
            (filter === 'duplicates' && sticker.duplicates > 0) ||
            (filter === 'withPlayer' && sticker.player.trim()) ||
            (filter === 'withoutPlayer' && section.type === 'team' && !sticker.player.trim());

          return matchesSearch && matchesFilter;
        });
        return { ...section, stickers };
      })
      .filter(section => section.stickers.length > 0);
  }, [album, search, filter, sectionFilter, groupFilter]);

  function updateSticker(sectionCode, stickerId, patch) {
    setAlbum(current => ({
      ...current,
      sections: current.sections.map(section => {
        if (section.code !== sectionCode) return section;
        return {
          ...section,
          stickers: section.stickers.map(sticker =>
            sticker.id === stickerId ? { ...sticker, ...patch } : sticker
          )
        };
      })
    }));
  }

  function toggleHave(section, sticker) {
    updateSticker(section.code, sticker.id, { have: !sticker.have });
  }

  function addDuplicate(section, sticker, delta) {
    const next = Math.max(0, Number(sticker.duplicates || 0) + delta);
    updateSticker(section.code, sticker.id, {
      duplicates: next,
      have: sticker.have || next > 0
    });
  }

  function copyList(kind) {
    const rows = allStickers
      .filter(item => kind === 'missing' ? !item.have : item.duplicates > 0)
      .map(item => {
        const player = item.player ? ` - ${item.player}` : '';
        if (kind === 'missing') return `${item.section.code} ${item.number}${player}`;
        return `${item.section.code} ${item.number} x${item.duplicates}${player}`;
      });

    const title = kind === 'missing' ? 'Figuritas faltantes' : 'Figuritas repetidas';
    const text = `${title}\n${rows.length ? rows.join('\n') : 'No hay figuritas para mostrar.'}`;

    navigator.clipboard?.writeText(text).then(
      () => setToast(`${title} copiadas.`),
      () => setToast(text)
    );
  }

  function exportAlbum() {
    download('panini-2026-coleccion.json', JSON.stringify(album, null, 2));
    setToast('Colección exportada.');
  }

  function importAlbum() {
    try {
      const parsed = JSON.parse(importText);
      if (!parsed || !Array.isArray(parsed.sections)) throw new Error('Formato inválido');
      setAlbum(parsed);
      setImportText('');
      setShowImport(false);
      setToast('Colección importada.');
    } catch {
      setToast('No se pudo importar el JSON.');
    }
  }


  const calendarPhases = useMemo(() => {
    return Array.from(new Set(MATCH_SCHEDULE.map(match => match.phase)));
  }, []);

  const filteredMatches = useMemo(() => {
    const q = normalize(calendarSearch.trim());
    return MATCH_SCHEDULE.filter(match => {
      const byPhase = calendarPhase === 'all' || match.phase === calendarPhase;
      const bySearch = !q || normalize(`${match.phase} ${match.date} ${match.match} ${match.group} ${match.times} ${match.venue} ${match.number}`).includes(q);
      return byPhase && bySearch;
    });
  }, [calendarPhase, calendarSearch]);

  const matchesByDate = useMemo(() => {
    return filteredMatches.reduce((acc, match) => {
      const key = `${match.date}||${match.isoDate}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(match);
      return acc;
    }, {});
  }, [filteredMatches]);

  function resetAlbum() {
    if (!window.confirm('¿Seguro que querés reiniciar toda la colección?')) return;
    setAlbum(buildAlbum());
    setToast('Colección reiniciada.');
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-copy">
          <div className="pill">🏆 Mundial 2026 · Álbum Panini</div>
          <h1>Control de figuritas</h1>
          <p>Gestioná tu colección por grupos, marcá figuritas, cargá jugadores y controlá repetidas.</p>
        </div>

        <div className="hero-panel">
          <div className="big-progress">
            <strong>{stats.percent}%</strong>
            <span>completo</span>
          </div>
          <div className="progress-line"><i style={{ width: `${stats.percent}%` }} /></div>
        </div>
      </header>

      <section className="stats">
        <article><span>Completadas</span><strong>{stats.have}</strong><small>figuritas</small></article>
        <article><span>Faltantes</span><strong>{stats.missing}</strong><small>para conseguir</small></article>
        <article><span>Repetidas</span><strong>{stats.duplicates}</strong><small>para canjear</small></article>
        <article><span>Total</span><strong>{stats.total}</strong><small>19 FWC + 14 CC + selecciones</small></article>
      </section>

      <nav className="section-tabs">
        <button
          className={activeSection === 'album' ? 'active' : ''}
          onClick={() => setActiveSection('album')}
        >
          Álbum de figuritas
        </button>
        <button
          className={activeSection === 'calendar' ? 'active' : ''}
          onClick={() => setActiveSection('calendar')}
        >
          Calendario de partidos
        </button>
      </nav>

      {activeSection === 'album' && (
      <>
      <section className="groups">
        <article className="group-card special-card" onClick={() => setGroupFilter(groupFilter === 'Especiales' ? 'all' : 'Especiales')}>
          <h2>Especiales</h2>
          <p>FWC 19 · CC 14</p>
          <div className="mini-bar"><i style={{ width: `${percent(album.sections.filter(s => s.type === 'special').flatMap(s => s.stickers).filter(s => s.have).length, 33)}%` }} /></div>
        </article>

        {groupStats.map(item => (
          <article className="group-card" key={item.group} onClick={() => setGroupFilter(groupFilter === item.group ? 'all' : item.group)}>
            <h2>Grupo {item.group}</h2>
            <p>{item.teams.map(team => team.name).join(' · ')}</p>
            <div className="mini-bar"><i style={{ width: `${item.percent}%` }} /></div>
          </article>
        ))}
      </section>

      <section className="filters">
        <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Buscar país, grupo, código o jugador..." />
        <select value={groupFilter} onChange={event => setGroupFilter(event.target.value)}>
          <option value="all">Todos los grupos</option>
          <option value="Especiales">Especiales</option>
          {GROUPS.map(group => <option key={group} value={group}>Grupo {group}</option>)}
        </select>
        <select value={sectionFilter} onChange={event => setSectionFilter(event.target.value)}>
          <option value="all">Todas las secciones</option>
          {album.sections.map(section => <option key={section.code} value={section.code}>{section.name}</option>)}
        </select>
        <select value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="all">Todas</option>
          <option value="have">Tengo</option>
          <option value="missing">Faltantes</option>
          <option value="duplicates">Repetidas</option>
          <option value="withPlayer">Con jugador</option>
          <option value="withoutPlayer">Sin jugador</option>
        </select>
        <button onClick={() => setView(view === 'cards' ? 'compact' : 'cards')}>{view === 'cards' ? 'Vista compacta' : 'Vista tarjetas'}</button>
      </section>


      </>
      )}

      {activeSection === 'calendar' && (
      <section className="calendar-section">
        <div className="calendar-header">
          <div>
            <div className="calendar-kicker">Fixture Mundial 2026</div>
            <h2>Calendario de partidos</h2>
            <p>Consultá fechas, horarios por país, grupos, sedes y cruces de eliminación directa.</p>
          </div>
          <div className="calendar-count">
            <strong>{filteredMatches.length}</strong>
            <span>partidos</span>
          </div>
        </div>

        <div className="calendar-filters">
          <input
            value={calendarSearch}
            onChange={event => setCalendarSearch(event.target.value)}
            placeholder="Buscar partido, sede, grupo o fase..."
          />
          <select value={calendarPhase} onChange={event => setCalendarPhase(event.target.value)}>
            <option value="all">Todas las fases</option>
            {calendarPhases.map(phase => (
              <option key={phase} value={phase}>{phase}</option>
            ))}
          </select>
        </div>

        <div className="calendar-list">
          {Object.entries(matchesByDate).map(([key, matches]) => {
            const [dateLabel] = key.split('||');
            return (
              <article className="match-day" key={key}>
                <h3>{dateLabel}</h3>
                <div className="matches-grid">
                  {matches.map((match, index) => (
                    <div className="match-card" key={`${match.date}-${match.match}-${index}`}>
                      <div className="match-meta">
                        <span>{match.phase}</span>
                        {match.group && <b>{match.group}</b>}
                        {match.number && <b>{match.number}</b>}
                      </div>
                      <h4>{match.match}</h4>
                      {match.times && <p className="match-time">{match.times}</p>}
                      <p className="match-venue">📍 {match.venue}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      )}

      {activeSection === 'album' && (
      <main className="album">
        {filteredSections.map(section => {
          const original = album.sections.find(item => item.code === section.code);
          const total = original?.stickers.length || section.stickers.length;
          const have = original?.stickers.filter(sticker => sticker.have).length || 0;
          const p = percent(have, total);

          return (
            <section className="section-card" key={section.code}>
              <header className="section-header">
                <div className="badge">{section.type === 'special' ? section.code : getInitials(section.name)}</div>
                <div>
                  <h2>{section.name} {section.type === 'team' && <span>Grupo {section.group}</span>}</h2>
                  <p>{have}/{total} completas · {total - have} faltantes</p>
                </div>
                <div className="section-progress"><i style={{ width: `${p}%` }} /></div>
              </header>

              <div className={view === 'compact' ? 'stickers compact' : 'stickers'}>
                {section.stickers.map(sticker => (
                  <article className={sticker.have ? 'sticker owned' : 'sticker'} key={sticker.id}>
                    <button className="sticker-top" onClick={() => toggleHave(section, sticker)}>
                      <strong>{sticker.code}</strong>
                      <span>{sticker.have ? 'Tengo' : 'Falta'}</span>
                    </button>

                    {section.type === 'team' && (
                      <label className="player-field">
                        Jugador
                        <input
                          value={sticker.player}
                          onChange={event => updateSticker(section.code, sticker.id, { player: event.target.value })}
                          placeholder="Nombre del jugador"
                        />
                      </label>
                    )}

                    <div className="dupes">
                      <span>Repetidas</span>
                      <button onClick={() => addDuplicate(section, sticker, -1)}>-</button>
                      <b>{sticker.duplicates || 0}</b>
                      <button onClick={() => addDuplicate(section, sticker, 1)}>+</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      )}
    </div>
  );
}
