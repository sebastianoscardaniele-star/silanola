import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'panini-2026-pro-ui-v1';

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
      player: '',
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

function loadAlbum() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return buildAlbum();
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.sections)) return buildAlbum();
    return parsed;
  } catch {
    return buildAlbum();
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


function getFlagEmoji(code) {
  const map = {
    MEX:"🇲🇽", RSA:"🇿🇦", KOR:"🇰🇷", CZE:"🇨🇿",
    CAN:"🇨🇦", BIH:"🇧🇦", QAT:"🇶🇦", SUI:"🇨🇭",
    BRA:"🇧🇷", MAR:"🇲🇦", HAI:"🇭🇹", SCO:"🏴",
    USA:"🇺🇸", PAR:"🇵🇾", AUS:"🇦🇺", TUR:"🇹🇷",
    GER:"🇩🇪", CUW:"🇨🇼", CIV:"🇨🇮", ECU:"🇪🇨",
    NED:"🇳🇱", JPN:"🇯🇵", SWE:"🇸🇪", TUN:"🇹🇳",
    BEL:"🇧🇪", EGY:"🇪🇬", IRN:"🇮🇷", NZL:"🇳🇿",
    ESP:"🇪🇸", CPV:"🇨🇻", KSA:"🇸🇦", URU:"🇺🇾",
    FRA:"🇫🇷", SEN:"🇸🇳", IRQ:"🇮🇶", NOR:"🇳🇴",
    ARG:"🇦🇷", ALG:"🇩🇿", AUT:"🇦🇹", JOR:"🇯🇴",
    POR:"🇵🇹", COD:"🇨🇩", UZB:"🇺🇿", COL:"🇨🇴",
    ENG:"🏴", CRO:"🇭🇷", GHA:"🇬🇭", PAN:"🇵🇦"
  };
  return map[code] || "🏳️";
}

function getInitials(name) {
  return name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
}

export default function App() {
  const [album, setAlbum] = useState(loadAlbum);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sectionFilter, setSectionFilter] = useState('all');
  const [groupFilter, setGroupFilter] = useState('all');
  const [view, setView] = useState('cards');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const [toast, setToast] = useState('');
  const [activeSection, setActiveSection] = useState('album');
  const [calendarPhase, setCalendarPhase] = useState('all');
  const [calendarSearch, setCalendarSearch] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(album));
  }, [album]);

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
            <p>{item.teams.map(team => `${getFlagEmoji(team.code)} ${team.name}`).join(' · ')}</p>
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
                <div className="badge">{section.type === 'special' ? section.code : getFlagEmoji(section.code)}</div>
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
