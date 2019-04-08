<template>
  <TD bgcolor="#000000" width="230" align="center" @click="detail">
    <TABLE
      style="FONT-SIZE: 12px"
      border="0"
      cellspacing="0"
      cellpadding="5"
      width="230"
      bgcolor="#ffffff"
    >
      <TBODY>
        <TR>
          <TD height="230" colspan="2" align="center">
            <a href="http://www.taobao.com" target="_blank">
              <font color="#ffffff" size="3">
                <img
                  border="0"
                  alt
                  align="absMiddle"
                  :src="content.fileEntities[0].fullPath"
                  width="220"
                  height="220"
                >
              </font>
            </a>
          </TD>
        </TR>
        <TR>
          <TD height="30" colspan="2" align="center">
            <span style="COLOR: #000000; FONT-SIZE: 12px">
              <span style="COLOR: #000000; FONT-SIZE: 12px">
                <span style="COLOR: #000000; FONT-SIZE: 12px">{{content.goodName}}
                  <br>
                </span>
              </span>{{content.content}}
            </span>
          </TD>
        </TR>
        <TR>
          <TD height="1" colspan="2" align="center">
            <TABLE border="0" cellspacing="0" cellpadding="0" width="100%">
              <TBODY>
                <TR>
                  <TD width="50%" align="right">
                    <span style="COLOR: #000000; FONT-SIZE: 12px"></span>
                    <span style="COLOR: #000000; FONT-SIZE: 12px"></span>
                    <span style="COLOR: #000000; FONT-SIZE: 12px"></span>
                    <span style="COLOR: #000000; FONT-SIZE: 12px"></span>
                    <font style="FONT-SIZE: 14pt">
                      <strong>优惠价：</strong>
                    </font>
                  </TD>
                  <TD
                    style="FONT-SIZE: 20px; font-weight: 200"
                    valign="middle"
                    width="50%"
                    align="left"
                  >
                    <strong>
                      <span>
                        <font style="COLOR: #c00000; FONT-SIZE: 14pt">{{content.goodPrice}}</font>
                      </span>元
                    </strong>
                  </TD>
                </TR>
              </TBODY>
            </TABLE>
            <A href="../../www.taobao.com" target="_blank">
              <strong>
                <img
                  border="0"
                  alt
                  src="http://img02.taobaocdn.com/imgextra/i2/697510571/T2GMHOXsFaXXXXXXXX-697510571.jpg"
                  width="204"
                  height="65"
                >
              </strong>
            </A>
            <A target="_blank"></A>
            <A target="_blank"></A>
          </TD>
        </TR>
        <TR>
          <TD style="COLOR: #000000" height="15" width="106" align="right">
            <strong></strong>
          </TD>
          <TD style="COLOR: #000000" height="15" width="104" align="left">
            <strong></strong>
          </TD>
        </TR>
      </TBODY>
    </TABLE>
  </TD>
</template>

<script>
export default {
  props: ["content", "index"],
  data() {
  },
  methods: {
    detail() {
      this.$emit('detail', this.index)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
