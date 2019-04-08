<template>
  <div>
    <TABLE
      class="pic-border"
      border="0"
      cellspacing="0"
      cellpadding="0"
      width="950"
      bgcolor="#000000"
      align="center"
    >
      <TBODY>
        <TR>
          <TD>
            <TABLE border="0" cellspacing="6" cellpadding="0" width="950">
              <TBODY>
                <TR>
                  <good-item
                    v-for="good in goodList"
                    :key="good.id"
                    :content="good"
                    :index="good.id"
                    @detail="detail"
                  ></good-item>
                </TR>
              </TBODY>
            </TABLE>
          </TD>
        </TR>
      </TBODY>
    </TABLE>
    <Page :total="100" show-elevator/>
  </div>
</template>

<script>
import GoodItem from "../../components/GoodItem";
export default {
  components: {
    "good-item": GoodItem
  },
  data() {
    return {
      goodList: []
    };
  },
  mounted() {
    this.getGood();
  },
  methods: {
    getGood() {
      const postData = {
        pageSize: 4,
        pageNum: 1,
        queryTerm: "",
        sortField: "price",
        sortWay: "up"
      };
      this.$http
        .post("http://localhost:8901/goods/fuzzyQuery", postData)
        .then(function(res) {
          this.goodList = res.data.data.data;
          console.log(res.data.data);
        });
    },
    detail() {
      console.log("aaaaa");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
