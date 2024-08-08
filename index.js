// alert("hd");

let outputButton = $("#output-button");

outputButton.on("click", function () {
  //   let day = bDate;
  //   let month = bMonth;
  //   let year = bYear;
  let bDate = $(".bDate").val();
  let bMonth = $(".bMonth").val();
  let bYear = $(".bYear").val();

  let date = new Date();
  let cYear = date.getFullYear();
  let cDay = date.getDate();
  let cMonth = date.getMonth();
  cMonth++;
//   console.log(`Day: ${cDay}, Month: ${cMonth}, Year: ${cYear}`);
//   console.log("here");
//   console.log(bDate);
//   console.log(bYear);
//   console.log(bMonth);

    if (bDate < 1 || bDate > 31) {
      console.log("Enter a valid date");
      return;
    } else if (bMonth < 1 || bMonth > 12) {
      console.log("Enter a valid month");
      return;
    } else if (bYear < 1 || bYear > cYear) {
      console.log("Enter a valid year");
      return;
    }

    var D = cDay - bDate;
    if (D < 0) {
      D += 30;
      bMonth++;
    }
    var M = cMonth - bMonth;
    if ( M < 0) {
      M += 12;
      bYear++;
    }
    var Y = cYear - bYear;

    $(".print-years").html("<xy>" +Y+ "</xy>" + " years");
    $(".print-months").html("<xy>" +M+ "</xy>" +" months");
    $(".print-days").html("<xy>" +D+ "</xy>" +" days");
});
