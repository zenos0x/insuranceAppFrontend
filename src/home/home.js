$(document).ready(function (){

  $('#home_calculator_btn').on('click', ()=>{
    activateTab('calculator');
  })

  $('#home_admin_btn').on('click', ()=>{
    activateTab('admin');
  })

  if(!isLoggedIn || (isLoggedIn && user_mode==='User')){
    $('#home_admin_btn').hide();
  }
})