<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title style="background-color: #eeeeee" class="justify-center"
            ><strong>INFORMES</strong></v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-3">
        <v-card>
          <v-card-title style="background-color: #eeeeee"
            ><strong>Listado de tesis</strong></v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Tesis de posgrado</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.tesisPostgradoCreadas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Tesis agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/tesisDePostgrado/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Tesis de licenciatura</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.tesisLicenciaturaCreadas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Tesis agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/tesisDeLicenciatura/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
        <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Proyecto final</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.proyectosFinalesCreados }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Proyectos agregados</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/proyectosFinales/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
            <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Listado total de tesis</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.totalDeTesis }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Tesis agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/totalTesis/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-3">
        <v-card>
          <v-card-title style="background-color: #eeeeee" class="text-left"
            ><strong>Listado de prácticas</strong></v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Prácticas profesionalizantes</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.practicasProfesionalizantesCreadas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Prácticas agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/practicasProfesionalizantes/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Prácticas supervisadas</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.practicasSupervisadasCreadas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Prácticas agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/practicasSupervisadas/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Ensayos de cátedra</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.ensayosDeCatedraCreadas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Ensayos agregados</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/ensayoDeCatedra/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
            <v-col class="col-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Listado total de practicas</div>
              <v-list-item-title class="headline text-center mb-1">
                {{ this.items.totalDePracticas }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-center"
                >Prácticas agregadas</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary">Detalles</v-btn>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/totalPracticas/csv"
              >Export to CSV
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
var axios = require("axios");
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:8080/reportes/")
      .then((res) => (this.items = res.data))
      .finally((response) => console.log(response));
  },
};
</script>