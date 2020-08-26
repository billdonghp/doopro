<template>
  <div id="lesson">
      <div class="mycontainer">
        <div class="col-label">
          <label for="">new</label>
          <span>java</span>
        </div>
        <div class="col-input"></div>
      </div>
      <ul>
        <li>1</li>
        <li>4</li>
        <li>3</li>
        <li>3</li>
      </ul>
  </div>
</template>
<style scoped>
  .mycontainer{
    width: 400px;
    height: 300px;
    border: 1px solid blue;
    border-radius: 8px;
    margin: 0 auto;
    padding:2px;
  }
  .mycontainer .col-label{
    position: relative;
    width: 40%;
    height: 120px;
    border: 1px solid red;
    background:url(../assets/1.jpg) center no-repeat;
    float: left;
    /* padding: 20px; */
    /* display: inline-block; */
  }
  .mycontainer .col-label label{
    position: absolute;
    display:inline-block;
    top: 8px;
    left: 8px;
    font-size:12px;
    line-height:20px;
    color:#fff;
    background-color: burlywood;
    border:2px solid #fff;
    border-radius:12px;
    padding: 0 8px;
  }
  label:hover:after{
    content: 'lesson';
    margin-left: 5px;
  }
  label:hover:before{
    content:'1-';
  }
  span{
    color:green !important;
  }
  .mycontainer .col-label span{
    position: absolute;
    display:inline-block;
    bottom: 8px;
    left: 8px;
    font-size:12px;
    line-height:20px;
    color:#fff;
    background-color: burlywood;
    border:2px solid #fff;
    border-radius:12px;
    padding: 0 8px;
  }
  .mycontainer .col-input{
    width: 60%;
    height: 120px;
    border: 1px solid green;
    margin-left:40%;
    /* float: left; */
  }
  li{
    width: 80px;
  }
  li:hover{
    width: 160px;
    background:blue;
    transition: width 2s;
    /* -webkit-transition: width 2s; */
  }
</style>
