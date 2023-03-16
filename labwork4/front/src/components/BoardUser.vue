<template>


  <div v-if="isUser" class="all">

    <div class="container">
      <div class="alert alert-danger admin" role="alert" style="text-align:center">
        User panel
      </div>
    </div>
    <div class="list row">
      <div class="col-md-6">
        <div>
          <label for="xSlider">X = {{ point.x }}</label><br>
          <input type="range" class="bg-danger" id="xSlider" required min="-3" max="3" step="0.5" v-model="point.x" name="x" />
        </div>
        <br>
        <br>
        <div>
          <label for="ySlider">Y = {{ point.y }}</label><br>
          <input type="range" class="bg-danger" id="ySlider" required min="-3" max="3" step="0.5" v-model="point.y" name="y" />
        </div>
        <br>

        <div>
          <label for="rSlider">R = {{ point.r }}</label><br>
          <input type="range" class="bg-danger" id="rSlider" required min="0.5" max="3" step="0.5" v-model="point.r" name="r"
            @input="this.loadGraph(point.r)" />
        </div>
        <button @click="save" class="btn btn-outline-danger" style="margin-top:10px">Submit</button>
      </div>
      <div class="col-md-6">
        <div style="text-align: center; width: 40%;display: flex;">
          <canvas id="graph" height="400px" width="400px" style="background: transparent;" ref="graphic"
            @mousedown="this.clickOnGraph"></canvas>
        </div>
      </div>
    </div>


    <div>

      <div class="table-responsive">
        <table class="table-hover table-bordered">
          <thead>
            <tr style="text-align:center">
              <th>X</th>
              <th>Y</th>
              <th>R</th>
              <th>Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="point in points.slice().reverse()" :key="point" class="res-table-column">
              <td>{{ point.x }}</td>
              <td>{{ point.y }}</td>
              <td>{{ point.r }}</td>
              <td>{{ point.hit }}</td>

            </tr>
          </tbody>
        </table>
      </div>


    </div>


  </div>
  <div v-if="!isUser">No bro you need to log in</div>
</template>

<script>
import PointService from "../services/point.service";

export default {
  name: "User",
  data() {
    return {
      points: [],
      point: {
        x: 1,
        y: 1,
        r: 1,
        hit: false
      },
      c: null,
      ctx: null,
      radiusOnGraph: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isUser() {
      if (this.currentUser && this.currentUser['roles']) {
        return true;
      }

      return false;
    }
  },
  methods: {
    getPoints() {
      PointService.getAll()
        .then(response => {
          this.points = response.data;
        })
        .catch(err => console.error(err))
    },

    save() {
      var data = {
        x: this.point.x,
        y: this.point.y,
        r: this.point.r,
      };
      PointService.savePoint(data)
        .then(response => {
          this.point.hit = response.data.hit
          this.getPoints();
        })

    },
    startGraph() {
      this.draw();

    },

    draw() {
      this.loadGraph(this.point.r);
    },

    drawArea() {
      let delta = 15
      let r = this.c.width / 2 - delta
      let center = this.c.width / 2

      this.ctx.lineWidth = 0;

      this.ctx.beginPath();
      this.ctx.fillStyle = "#cd071e";
      this.ctx.strokeStyle = "#cd071e";

      this.ctx.moveTo(center, center);
      this.ctx.fillRect(center, center-r, r, r);

      this.ctx.moveTo(center, center);
      this.ctx.lineTo(center, center-r );
      this.ctx.lineTo(center-r, center);
      this.ctx.fill();

      this.ctx.moveTo(center, center)
      this.ctx.arc(center, center, r,  0, Math.PI/2);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
    },


    drawCoordinatePlane(radius) {
      this.ctx.lineWidth = 2;

      this.ctx.beginPath();
      this.ctx.moveTo(0, this.c.height / 2);
      this.ctx.lineTo(this.c.width, this.c.height / 2);

      this.ctx.moveTo(this.c.width - 1, this.c.height / 2);
      this.ctx.lineTo(this.c.width - 4, this.c.height / 2 + 1.5);
      this.ctx.lineTo(this.c.width - 4, this.c.height / 2 - 1.5);

      this.ctx.strokeStyle = 'black';
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(this.c.width / 2, 0);
      this.ctx.lineTo(this.c.width / 2, this.c.height);

      this.ctx.moveTo(this.c.width / 2, 1);
      this.ctx.lineTo(this.c.width / 2 + 1.5, 4);
      this.ctx.lineTo(this.c.width / 2 - 1.5, 4);

      this.ctx.strokeStyle = 'black';
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(15, this.c.height / 2);
      this.ctx.lineTo(15, this.c.height / 2 + 2);
      this.ctx.lineTo(15, this.c.height / 2 - 2);

      this.ctx.moveTo(this.c.width / 4 + 15 / 2, this.c.height / 2);
      this.ctx.lineTo(this.c.width / 4 + 15 / 2, this.c.height / 2 + 2);
      this.ctx.lineTo(this.c.width / 4 + 15 / 2, this.c.height / 2 - 2);

      this.ctx.moveTo(this.c.width / 4 + this.c.width / 2 - 15 / 2, this.c.height / 2);
      this.ctx.lineTo(this.c.width / 4 + this.c.width / 2 - 15 / 2, this.c.height / 2 + 2);
      this.ctx.lineTo(this.c.width / 4 + this.c.width / 2 - 15 / 2, this.c.height / 2 - 2);

      this.ctx.moveTo(this.c.width - 15, this.c.height / 2);
      this.ctx.lineTo(this.c.width - 15, this.c.height / 2 + 2);
      this.ctx.lineTo(this.c.width - 15, this.c.height / 2 - 2);

      this.ctx.strokeStyle = 'black';
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(this.c.width / 2, this.c.height - 15);
      this.ctx.lineTo(this.c.width / 2 + 2, this.c.height - 15);
      this.ctx.lineTo(this.c.width / 2 - 2, this.c.height - 15);

      this.ctx.moveTo(this.c.width / 2, this.c.height * 3 / 4 - 15 / 2);
      this.ctx.lineTo(this.c.width / 2 + 2, this.c.height * 3 / 4 - 15 / 2);
      this.ctx.lineTo(this.c.width / 2 - 2, this.c.height * 3 / 4 - 15 / 2);

      this.ctx.moveTo(this.c.width / 2, this.c.height * 1 / 4 + 15 / 2);
      this.ctx.lineTo(this.c.width / 2 + 2, this.c.height * 1 / 4 + 15 / 2);
      this.ctx.lineTo(this.c.width / 2 - 2, this.c.height * 1 / 4 + 15 / 2);

      this.ctx.moveTo(this.c.width / 2, 15);
      this.ctx.lineTo(this.c.width / 2 + 2, 15);
      this.ctx.lineTo(this.c.width / 2 - 2, 15);

      this.ctx.strokeStyle = 'black';
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.strokeStyle = "black";
      this.ctx.fillStyle = "black";
      this.ctx.font = "12pt monospace";
      this.ctx.lineWidth = 1;
      this.ctx.strokeText(radius, this.c.width - 19, this.c.height / 2 + 17);
      this.ctx.strokeText(radius, this.c.width / 2 + 7, 22);
      this.ctx.strokeText((-1) * radius, 2, this.c.height / 2 + 17);
      this.ctx.strokeText((-1) * radius, this.c.width / 2 + 4, this.c.height - 10);

      this.ctx.strokeText((-1) * (radius / 2), this.c.width / 2 + 2, this.c.height * 3 / 4 - 8 / 2);
      this.ctx.strokeText((radius / 2), this.c.width / 2 + 6, this.c.height * 1 / 4 + 25 / 2);

      this.ctx.strokeText((-1) * (radius / 2), this.c.width / 4 - 13, this.c.height / 2 + 17);
      this.ctx.strokeText((radius / 2), this.c.width / 4 + this.c.width / 2 - 21, this.c.height / 2 + 17);

      this.ctx.fill();
      this.ctx.stroke();
    },


    clickOnGraph(event) {
      let rect = this.c.getBoundingClientRect();
      let x = event.clientX - rect.x;
      let y = event.clientY - rect.y;
      var r = this.point.r

      this.loadGraph(this.point.r);
      let data = {
        x: Math.round(((x - this.c.width / 2) * r / this.radiusOnGraph) * 100000) / 100000,
        y: Math.round(((-1) * (y - this.c.height / 2) * r / this.radiusOnGraph) * 100000) / 100000,
        r: r
      }
      this.point.x = data.x;
      this.point.y = data.y;
      PointService.savePoint(data)
        .then(response => {
          this.point.hit = response.data.hit
          let dataSecond = {
            x: this.point.x,
            y: this.point.y,
            r: this.point.r,
            hit: this.point.hit
          };
          this.drawItemFromTable(dataSecond);
          this.getPoints();
        })

    },

    loadGraph(radius) {
      this.clearCanvas()
      this.drawArea();
      this.drawCoordinatePlane(radius);
      for (var point in this.points) {
        if (this.points[point].r == radius) {
          this.drawItemFromTable(this.points[point]);
        }
      }
    },


    drawItemFromTable(data) {
      let x = parseFloat(data.x);
      let y = parseFloat(data.y);
      let r = parseFloat(data.r);
      let hit = data.hit;
      let color = "black";
      if (hit) {
        color = "gold";
      }
      let xCoord = x * this.radiusOnGraph / r + this.c.width / 2
      let yCoord = this.c.height / 2 - y * this.radiusOnGraph / r

      if (xCoord < 2) {
        xCoord = 2;
        color = "white"
      }
      if (xCoord > this.c.width - 2) {
        xCoord = this.c.width - 2
        color = "white"
      }
      if (yCoord < 2) {
        yCoord = 2;
        color = "white"
      }
      if (yCoord > this.c.height - 2) {
        yCoord = this.c.height - 2
        color = "white"
      }

      this.drawItem(xCoord, yCoord, color);
    },

    drawItem(x, y, color) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, 2 * Math.PI);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
    },

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    }

  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.getPoints();

    this.c = document.getElementById("graph");
    if (this.c) {
      this.c.width = 400;
      this.c.height = 400;
      this.radiusOnGraph = (this.c.width - 30) / 2;
      this.ctx = this.c.getContext("2d");
      this.startGraph();
      this.loadGraph(1);
    }

  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cd071e;
}

.res-table-column {
  text-align: center;

}

td {
  padding: 5px 5px 5px 5px;

}

table {
  margin-top: 30px;
  width: 100%;
}

.admin {
  margin-top: 20px;
}


</style>
