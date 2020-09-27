<template>
    <div>
        <form v-on:submit.prevent>
            <div>
                <!-- Selects country -->
                <select name="country" id="country" v-model="country">
                    <option disabled>Select country/region</option>
                    <option v-for="choice in idTypes" :key="choice" v-bind:value="choice">{{choice.country}}</option>
                </select>
                <!-- Selects form of ID -->
                <select name="type" id="type" v-model="idType">
                    <option disabled>Select your form of ID</option>
                    <option v-for="choice in ids" :key="choice">{{choice.name}}</option>
                </select>
                <!-- Records ID value -->
                <label for="id">{{ idType.name }}</label>
                <input type="text" id="id" v-model.trim="idNum">
            </div>

            <div>
                <label for="countryCode">Phone Number</label>
                <!-- Selects country code -->
                <select name = "countryCode" id = "countryCode" v-model="countryCode">
                    <option disabled>Select country code</option>
                    <option v-for="code in country.num" :key="code" v-bind:value="code">{{code}}</option>
                </select>
                <!-- Records intranational phone number -->
                <input type="text" id="localNum" v-model.number="localNum">
                <!-- Triggers a method which concatenates country code and number -->
                <button v-on:click="phoneNumber">Send</button>
            </div>
        </form>
        <!-- Displays input information -->
        <p v-if="phoneNum !== ''">Your ID is {{idNum}} and your phone number is {{phoneNum}}.</p>

        <!--<b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group></b-form-group>
          <b-form-group></b-form-group>
        </b-form>-->
    </div>
</template>

<script>
export default {
    name: 'App',
    data()
    {
      return {
        //Used to narrow down ID types by country
        country: "",
        idTypes:
        [
          {
            /*Albanian IDs*/
            country: "Albania",
            types:
            [
              {
                symbol: "AL",
                name: "Numri i Identitetit"
              }
            ],
            num: ["+355"]
          },
          {
            /*Argentinian IDs*/
            country: "Argentina",
            types:
            [
              {
                symbol: "DN",
                name: "Documento Nacional de Identidad"
              },
              {
                symbol: "CT",
                name: "Código Único de Identificación Tributaria"
              },
              {
                symbol: "CL",
                name: "Código de Identificación Laboral"
              }
            ],
            num: ["+54"]
          },
          {
            /*Austrian IDs*/
            country: "Austria",
            types:
            [
              {
                symbol: "AT",
                name: "Sector-Specific Personal Identifier"
              }
            ],
            num: ["+43"]
          },
          {
            /*Bahrain IDs*/
            country: "Bahrain",
            types:
            [
              {
                symbol: "BH",
                name: "الرقم الشخصي‎"
              }
            ],
            num: ["+973"]
          },
          {
            /*Belgian IDs*/
            name: "Belgium",
            types:
            [
              {
                symbol: "BE",
                name: "National Register Number"
              }
            ],
            num: ["+32"]
          },
          {
            /*Bosnian IDs*/
            country: "Bosnia and Herzegovinia",
            types:
            [
              {
                symbol: "BA",
                name: "Jedinstveni matični broj građana"
              }
            ],
            num: ["+387"]
          },
          {
            /*Brazilian IDs*/
            country: "Brazil",
            types:
            [
              {
                symbol: "RG",
                name: "Registro Geral"
              },
              {
                symbol: "CP",
                name: "Cadastro de Pessoas Físicas"
              },
              {
                symbol: "SI",
                name: "Social Security Number"
              },
              {
                symbol: "EN",
                name: "Election Identification Number"
              }
            ],
            num: ["+55"]
          },
          {
            /*Bulgarian IDs*/
            country: "Bulgaria",
            types:
            [
              {
                symbol: "BG",
                name: "Единен граждански номер"
              }
            ],
            num: ["+359"]
          },
          {
            /*Chinese IDs*/
            country: "China",
            types:
            [
              {
                symbol: "CN",
                name: "Identity card number"
              }
            ],
            num: ["+86"]
          },
          {
            /*Chilean IDs*/
            country: "Chile",
            types:
            [
              {
                symbol: "CL",
                name: "Rol Único Nacional"
              }
            ],
            num: ["+56"]
          },
          {
            /*Colombian IDs*/
            country: "Colombia",
            types:
            [
              {
                symbol: "CC",
                name: "Cédula de ciudadanía",
              },
              {
                symbol: "TI",
                name: "Tarjeta de identidad",
              },
              {
                symbol: "NI",
                name: "Cédula de extranjería",
              },
              {
                symbol: "NU",
                name: "Número único de identificación personal",
              },
              {
                symbol: "RC",
                name: "Registro civil",
              },
              {
                symbol: "PA",
                name: "Pasaporte"
              }
            ],
            num: ["+57"]
          },
          {
            /*Croatian IDs*/
            country: "Croatia",
            types:
            [
              {
                symbol: "HR",
                name: "Osobni identifikacijski broj"
              }
            ],
            num: ["+385"]
          },
          {
            /*Czech IDs*/
            country: "Czechia",
            types:
            [
              {
                symbol: "CZ",
                name: "Rodné číslo"
              }
            ],
            num: ["+420"]
          },
          {
            /*Danish IDs*/
            country: "Denmark",
            types:
            [
              {
                symbol: "DK",
                name: "Centrale Personregister"
              }
            ],
            num: ["+45"]
          },
          {
            /*Estonian IDs*/
            country: "Estonia",
            types:
            [
              {
                symbol: "EE",
                name: "Isikukood"
              }
            ],
            num: ["+372"]
          },
          {
            /*Finnish IDs*/
            country: "Finland",
            types:
            [
              {
                symbol: "FI",
                name: "Henkilötunnus"
              }
            ],
            num: ["+358"]
          },
          {
            /*French IDs*/
            country: "France",
            types:
            [
              {
                symbol: "FR",
                name: "INSEE code"
              }
            ],
            num: ["+33"]
          },
          {
            /*Hong Kong IDs*/
            country: "Hong Kong",
            types:
            [
              {
                symbol: "HK",
                name: "HKID number"
              }
            ],
            num: ["+852"]
          },
          {
            /*Icelandic IDs*/
            country: "Iceland",
            types:
            [
              {
                symbol: "IS",
                name: "Kennitala"
              }
            ],
            num: ["+354"]
          },
          {
            /*Indian IDs*/
            country: "India",
            types:
            [
              {
                symbol: "PN",
                name: "Permanent account number"
              },
              {
                symbol: "AN",
                name: "Aadhaar number"
              }
            ],
            num: ["+91"]
          },
          {
            /*Indonesian IDs*/
            country: "Indonesia",
            types:
            [
              {
                symbol: "ID",
                name: "Nomor Induk Kependudukan"
              }
            ],
            num: ["+62"]
          },
          {
            /*Iranian IDs*/
            country: "Iran",
            types:
            [
              {
                symbol: "IR",
                name: "National Identification Number"
              }
            ],
            num: ["+98"]
          },
          {
            /*Israel IDs*/
            country: "Israel",
            types:
            [
              {
                symbol: "IL",
                name: "מספר זהות"
              }
            ],
            num: ["+972"]
          },
          {
            /*Italian IDs*/
            country: "Italy",
            types:
            [
              {
                symbol: "IT",
                name: "Codice fiscale"
              }
            ],
            num: ["+39"]
          },
          {
            /*Japanese IDs*/
            country: "Japan",
            types:
            [
              {
                symbol: "JP",
                name: "マイナンバー"
              }
            ],
            num: ["+81"]
          },
          {
            /*Lithuanian IDs*/
            country: "Lithuania",
            types:
            [
              {
                symbol: "LT",
                name: "Asmens kodas"
              }
            ],
            num: ["+370"]
          },
          {
            /*Luxembourgish IDs*/
            country: "Luxembourg",
            types:
            [
              {
                symbol: "LU",
                name: "Identification code"
              }
            ],
            num: ["+352"]
          },
          {
            /*Kazakhstani IDs*/
            country: "Kazakhstan",
            types:
            [
              {
                symbol: "KZ",
                name: "Individual Identification Number"
              }
            ],
            num: ["+7", "+997"]
          },
          {
            /*Kuwaiti IDs*/
            country: "Kuwait",
            types:
            [
              {
                symbol: "KW",
                name: "الرقم المدني‎"
              }
            ],
            num: "+965"
          },
          {
            /*Macau IDs*/
            country: "Macau",
            types:
            [
              {
                symbol: "MO",
                name: "BIRP Identification Number"
              }
            ],
            num: ["+853"]
          },
          {
            /*Malaysian IDs*/
            country: "Malaysia",
            types:
            [
              {
                symbol: "MY",
                name: "National Registration Identification Card Number"
              }
            ],
            num: ["+60"]
          },
          {
            /*Mexican IDs*/
            country: "Mexico",
            types:
            [
              {
                symbol: "CU",
                name: "Clave Única de Registro de Población"
              },
              {
                symbol: "RF",
                name: "Registro Federal del Contribuyente"
              }
            ],
            num: ["+52"]
          },
          {
            /*Moldovan IDs*/
            country: "Moldova",
            types:
            [
              {
                symbol: "MD",
                name: "Personal Code"
              }
            ],
            num: ["+373"]
          },
          {
            /*Montenegrin IDs*/
            country: "Montenegro",
            types:
            [
              {
                symbol: "ME",
                name: "Jedinstveni matični broj građana"
              }
            ],
            num: ["+382"]
          },
          {
            /*Dutch IDs*/
            country: "Netherlands",
            types:
            [
              {
                symbol: "NL",
                name: "Burgerservicenummer"
              }
            ],
            num: ["+31"]
          },
          {
            /*Nigerian IDs*/
            country: "Nigeria",
            types:
            [
              {
                symbol: "NG",
                name: "Nationial Identification Number"
              }
            ],
            num: ["+234"]
          },
          {
            /*North Macedonian IDs*/
            country: "North Macedonia",
            types:
            [
              {
                symbol: "MK",
                name: "Единствен матичен број на граѓанинот"
              }
            ],
            num: ["+389"]
          },
          {
            /*Norway IDs*/
            country: "Norway",
            types:
            [
              {
                symbol: "NO",
                name: "Fødselsnummer"
              }
            ],
            num: ["+47"]
          },
          {
            /*Pakistani IDs*/
            country: "Pakistan",
            types:
            [
              {
                symbol: "PK",
                name: "NIC number"
              }
            ],
            num: ["+92"]
          },
          {
            /*Phillipino IDs*/
            country: "The Phillipines",
            types:
            [
              {
                symbol: "PH",
                name: "PhilSys number"
              }
            ],
            num: ["+63"]
          },
          {
            /*Polish IDs*/
            country: "Poland",
            types:
            [
              {
                symbol: "PL",
                name: "PESEL Number"
              }
            ],
            num: ["+48"]
          },
          {
            /*Portuguese IDs*/
            country: "Portugal",
            types:
            [
              {
                symbol: "NC",
                name: "Número de identificação civil"
              },
              {
                symbol: "NF",
                name: "Número de identificação fiscal"
              },
              {
                symbol: "NS",
                name: "Número de Segurança Social"
              },
              {
                symbol: "NA",
                name: "Número de utente da Saúde"
              },
              {
                symbol: "NE",
                name: "Número de eleitor"
              },
              {
                symbol: "ND",
                name: "Número de carta de condução"
              }
            ],
            num: ["+351"]
          },
          {
            /*Romanian IDs*/
            country: "Romania",
            types:
            [
              {
                symbol: "RO",
                name: "Cod Numeric Personal"
              }
            ],
            num: ["+40"]
          },
          {
            /*IDs of San Marino*/
            country: "San Marino",
            types:
            [
              {
                symbol: "SM",
                name: "Codice ISS"
              }
            ],
            num: ["+378"]
          },
          {
            /*Serbian IDs*/
            country: "Serbia",
            types:
            [
              {
                symbol: "RS",
                name: "Јединствени матични број грађана"
              }
            ],
            num: ["+381"]
          },
          {
            /*Singaporean IDs*/
            country: "Singapore",
            types:
            [
              {
                symbol: "NR",
                name: "NRIC number"
              },
              {
                symbol: "FI",
                name: "Foreign Identification Number"
              }
            ],
            num: ["+65"]
          },
          {
            /*Slovak IDs*/
            country: "Slovakia",
            types:
            [
              {
                symbol: "BN",
                name: "Rodné číslo"
              },
              {
                symbol: "AX",
                name: "Číslo občianskeho preukazu"
              }
            ],
            num: ["+421"]
          },
          {
            /*Slovene IDs*/
            country: "Slovenia",
            types:
            [
              {
                symbol: "SI",
                name: "Enotna matična številka občana"
              }
            ],
            num: ["+386"]
          },
          {
            /*South African IDs*/
            country: "South Africa",
            types:
            [
              {
                symbol: "ZA",
                name: "Person Identification Number"
              }
            ],
            num: ["+27"]
          },
          {
            /*South Korean IDs*/
            country: "South Korea",
            types:
            [
              {
                symbol: "KR",
                name: "Resident registration number"
              }
            ],
            num: ["+82"]
          },
          {
            /*Taiwanese IDs*/
            country: "Taiwan",
            types:
            [
              {
                symbol: "TW",
                name: "National Identification number"
              }
            ],
            num: ["+886"]
          },
          {
            /*Thai IDs*/
            country: "Thailand",
            types:
            [
              {
                symbol: "TH",
                name: "Population Identification Code"
              }
            ],
            num: ["+66"]
          },
          {
            /*UAE IDs*/
            country: "United Arab Emirates",
            types:
            [
              {
                symbol: "AE",
                name: "Identification Number"
              }
            ],
            num: ["+971"]
          },
          {
            /*US IDs*/
            country: "United States",
            types:
            [
              {
                symbol: "SS",
                name: "Social Security Number",
              },
              {
                symbol: "TN",
                name: "Tax Identification Number"
              }
            ],
            num: ["+1"]
          },
          {
            /*Vietnamese IDs*/
            country: "Vietnam",
            types:
            [
              {
                symbol: "VN",
                name: "ID card number"
              }
            ],
            num: ["+84"]
          },
          {
            /*Zimbabwe IDs*/
            country: "Zimbabwe",
            types:
            [
              {
                symbol: "ZW",
                name: "National ID Number"
              }
            ],
            num: ["+263"]
          }
        ],

        //Used to record the ID type and value
        idType: "",
        idNum: "",

        //Used to suggest and record country code
        countryCode: "",

        //Used to record phone numbers
        localNum: "", //Intranational number
        phoneNum: "" //International number
      }
    },
    computed:
    {
      //Selects the set of IDs associated with the country you choose
      ids()
      {
        let options = this.country.types;
        return options;
      }
    },
    methods:
    {
      //Records international phone number
      phoneNumber()
      {
        this.phoneNum = this.countryCode + this.localNum.toString();
      }
    }
}
</script>

<style lang = "scss" scoped>

</style>