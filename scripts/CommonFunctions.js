var Type;
var Url;
var Data;
var ContentType;
var DataType;
var ProcessData;
var functionToProcess;
var async = false;
var meetingID;
var meetingpw;
var addOtherTextbox = false;
var StudentToEmail = "";
var LogID;
var Name;
var SelectedStudent = "";
var CurrDOB;
var CurrEmail;
var CurrPOLICYHOLDERNUMBER;
var CurrNAME;
var CurrGRADE;
var CurrSCHEMA;
var CurrSURNAME;
var CurrSCHOOL;
var CurrCLIENT;
var CurrSTUDENTID;
var ServerXMLConfig = "";
var StudentInfo = "";


ServerXMLConfig = "<?xml version='1.0' ?>"
+"<config>"
+"    <localeversion suppressWarning='false'>0.8</localeversion>"
+"    <version>4359-2014-07-30</version>"
+"    <help url='http://bbb.openedu.co.za/help.html'/>"
+"    <javaTest url='http://bbb.openedu.co.za/testjava.html'/>"
+"    <porttest host='bbb.openedu.co.za' application='video/portTest' timeout='10000'/>"    
+"    <bwMon server='197.189.232.250' application='video/bwTest'/>"
+"    <application uri='rtmp://bbb.openedu.co.za/bigbluebutton' host='http://bbb.openedu.co.za/bigbluebutton/api/enter' />"
+"    <language userSelectionEnabled='true' />"
+"    <skinning enabled='true' url='http://bbb.openedu.co.za/client/branding/css/BBBDefault.css.swf' />"
+"    <shortcutKeys showButton='true' />"
+"    <layout showLogButton='false' showVideoLayout='false' showResetLayout='true' defaultLayout='Default'"
+"            showToolbar='true' showFooter='true' showMeetingName='true' showHelpButton='true'" 
+"            showLogoutWindow='true' showLayoutTools='true' showNetworkMonitor='false' confirmLogout='true'/>"
            
+"		<modules>"
		 
+"		<module name='ChatModule' url='http://bbb.openedu.co.za/client/ChatModule.swf?v=4359' "
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"			dependsOn='UsersModule'	"
+"			translationOn='false'"
+"			translationEnabled='false'	"
+"			privateEnabled='true'"
+"			position='top-right'"
+"			baseTabIndex='701'"
+"		/>"

+"		<module name='UsersModule' url='http://bbb.openedu.co.za/client/UsersModule.swf?v=4359'" 
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"			allowKickUser='true'"
+"			enableRaiseHand='true'"
+"			enableSettingsButton='true'"
+"			baseTabIndex='301'"
+"		/>"

		
+"		<module name='DeskShareModule' "
+"			url='http://bbb.openedu.co.za/client/DeskShareModule.swf?v=4105' "
+"			uri='rtmp://bbb.openedu.co.za/deskShare'"
+"			showButton='true'"
+"			autoStart='false'"
+"			autoFullScreen='false'"
+"			baseTabIndex='201'"
+"		/>"
		
+"		<module name='PhoneModule' url='http://bbb.openedu.co.za/client/PhoneModule.swf?v=4359' "
+"			uri='rtmp://bbb.openedu.co.za/sip' "
+"			autoJoin='true'"
+"			skipCheck='false'"
+"			showButton='true'"
+"			enabledEchoCancel='true'"
+"			dependsOn='UsersModule'"
+"		/>"

+"		<module name='VideoconfModule' url='http://bbb.openedu.co.za/client/VideoconfModule.swf?v=4359' "
+"			uri='rtmp://bbb.openedu.co.za/video'"
+"			dependson = 'UsersModule'"
+"			videoQuality = '100'"
+"			presenterShareOnly = 'false'"
+"			controlsForPresenter = 'false'"
+"			resolutions = '320x240,640x480,1280x720'"
+"			autoStart = 'false'"
+"			skipCamSettingsCheck='false'"
+ "			showButton = 'false'"
+"			showCloseButton = 'false'"
+"			publishWindowVisible = 'true'"
+"			viewerWindowMaxed = 'false'"
+"			viewerWindowLocation = 'top'"
+"			camKeyFrameInterval = '30'"
+"			camModeFps = '10'"
+"			camQualityBandwidth = '0'"
+"			camQualityPicture = '90'"
+"			smoothVideo='false'"
+"			applyConvolutionFilter='false'"
+"			convolutionFilter='-1, 0, -1, 0, 6, 0, -1, 0, -1'"
+"			filterBias='0'"
+"			filterDivisor='4'"
+"			enableH264 = 'true'"
+"			h264Level = '2.1'"
+"			h264Profile = 'main'"		
+"			displayAvatar = 'false'"
+"			focusTalking = 'false'"
+"			glowColor = '0x4A931D'"
+"			glowBlurSize = '30.0'	"
+"		/>"
		
+"		<module name='WhiteboardModule' url='http://bbb.openedu.co.za/client/WhiteboardModule.swf?v=4105' "
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"			dependsOn='PresentModule'"
+"			baseTabIndex='601'"
+"			whiteboardAccess='presenter'"
+"			keepToolbarVisible='false'"
+"		/>"

+"<!--"
+"    <module name='PollingModule' url='http://bbb.openedu.co.za/client/PollingModule.swf?v=4359' "
+"      uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"      dependsOn='PresentModule'"
+"    />"
+" -->"
    		
+"		<module name='PresentModule' url='http://bbb.openedu.co.za/client/PresentModule.swf?v=4359' "
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"			host='http://bbb.openedu.co.za' "
+"			showPresentWindow='true'"
+"			showWindowControls='true'"
+"			openExternalFileUploadDialog='false'"
+"			dependsOn='UsersModule'"
+"			baseTabIndex='501'"
+"			maxFileSize='30'"
+"		/>"

+"		<module name='VideodockModule' url='http://bbb.openedu.co.za/client/VideodockModule.swf?v=4359'"
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton' "
+"			dependsOn='VideoconfModule, UsersModule'"
+"			autoDock='true'"
+"			showControls='true'"
+"			maximizeWindow='false'"
+"			position='bottom-right'"
+"			width='172'"
+"			height='179'"
+"			layout='smart'"
+"			oneAlwaysBigger='false'"
+"			baseTabIndex='401'"
+"		/>"
		
+"		<module name='LayoutModule' url='http://bbb.openedu.co.za/client/LayoutModule.swf?v=4359'"
+"			uri='rtmp://bbb.openedu.co.za/bigbluebutton'"
+"			layoutConfig='http://bbb.openedu.co.za/client/conf/layout.xml'"
+"			enableEdit='false'"
+"		/>"

+"<!--"
+"    <module name='NotesModule' url='http://bbb.openedu.co.za/client/NotesModule.swf?v=4359'"
+"      saveURL='http://bbb.openedu.co.za'"
+"      position='top-left'"
+"   />"
    
+"    <module name='BroadcastModule' url='http://bbb.openedu.co.za/client/BroadcastModule.swf?v=4359'"
+"      uri='rtmp://bbb.openedu.co.za/bigbluebutton'"
+"      streamsUri='http://bbb.openedu.co.za/streams.xml'"
+"      position='top-left'"
+"      showStreams='true'"
+"      autoPlay='false'"
+"      dependsOn='UsersModule'"
+"    />"
+"-->"
    		
+"	</modules>"
+"</config>";

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function resetVars() {
    CurrDOB = "";
    CurrEmail = "";
    CurrPOLICYHOLDERNUMBER = "";
    CurrNAME = "";
    CurrGRADE = "";
    CurrSCHEMA = "";
    CurrSURNAME = "";
    CurrSCHOOL = "";
    CurrCLIENT = "";
    CurrSTUDENTID = "";
}
function CallService() {
    $.ajax({
        type: Type, //GET or POST or PUT or DELETE verb
        url: Url, // Location of the service
        data: Data, //Data sent to server
        contentType: ContentType, // content type sent to server
        dataType: DataType, //Expected data format from server
        processdata: ProcessData, //True or False
        success: functionToProcess, // What to call when service is ok
        async: false,
        error: ServiceFailed// When Service call fails
    });
}
function ServiceFailed(result) {
    // alert('Service call failed: ' + result.status + '' + result.statusText);
    alert('Call to URS: ' + result.status + ' ' + result.statusText);
    Type = null; varUrl = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
}

function getSubjects() {
    var Payload = "{}";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/AddStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/ChooseSubject";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = getSubjectsSuccess;
    CallService();

}

function getSubjectsSuccess(Message) {
    var obj = JSON.parse(Message);
    // alert(Message);
    var retArray = obj;
    var htmlReturn = "<select id='lsClient'>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.SubjectName + "</option>"
    });
    htmlReturn += "</select>";
    clients = htmlReturn;
    $.cookie("Subjects", htmlReturn);
    //alert(htmlReturn);
}

function LoginSuccess(message) {
    try {
        var obj = JSON.parse(message);
        if (obj.Token == null || obj.Token === false) {
            showError("Incorrect");
            return false;
        }
        else {
            token = obj.Token;
        }
        showSuccess("Loggin In.");
        $.cookie("Token", token);
        $.cookie("userEmail", $("#uName").val());
        window.location = "index.html";
    }
    catch (e) {
        alert(e)
    };
}
function doAdvancedSearch() {
    token = $.cookie("Token");
    var sUname = $("#txtName").val();
    var sSurname = $("#txtSurName").val();
    if (sSurname == null) {
        sSurname = "";
    }
    var Payload = "{Name : '" + sUname + "', Surname : '" + sSurname + "', Token : '" + token + "' }";
    Type = "POST";
    // Url = "http://europassistance.sapientsa.com//Service.svc/searchStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/searchStudent";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = SearchSuccess;
    CallService();
}

function doAdvancedSearchSuccess(Message) {
    try {
        var obj = JSON.parse(Message);
        $("#SearchUsers > tbody").html("");
        $("#SearchUsers").find("tr:gt(0)").remove();
        var iCounter = 0;
        var arrayLength = obj.OutSearchStudent_Result.length;
        for (var i = 0; i < arrayLength; i++) {


            if (obj.OutSearchStudent_Result[i].Name != null) {
                var DOB = obj.OutSearchStudent_Result[i].DOB; //Email
                //var c = formatDOB(DOB);
                //var selectedDetailsPayload = '{"FirstName":'+ obj.OutSearchStudent_Result[i].Name+',"LastName":'+obj.OutSearchStudent_Result[i].SurName+'}';
                var selectedDetailsPayload = "'" + obj.OutSearchStudent_Result[i].Name + "," + obj.OutSearchStudent_Result[i].Surname + "," + obj.OutSearchStudent_Result[i].PolicyNumberHolder + "," + obj.OutSearchStudent_Result[i].Email + "," + obj.OutSearchStudent_Result[i].StudentID;
                $('#SearchUsers').append('<tr><td align="center"><input type="checkbox" name="student" value="' + selectedDetailsPayload + '"><br></td><td>' + obj.OutSearchStudent_Result[i].Name + '</td><td>' + obj.OutSearchStudent_Result[i].Surname + '</td><td>' + DOB + '</td></tr>')
                iCounter++;
            }
        }
    }
    catch (e) {
        //showError("Error :(");
        //$('#SearchUsers').dataTable();
        return;
    }
    if (!iCounter > 0) {
        // showSuccess("No Records Found");
        $('#SearchUsers').append('<tr><td colspan="4">No Records Found</td></tr>')
        // $('#SearchUsers').hide();
    }
//    $('#SearchUsers').dataTable({
//        searching: false,
//        ordering: true,
//        paging: false,
//        lengthChange: false

//    });
    $('#SearchUsers').show();

   
}
function SearchSuccess(message) {
//    var divtoinsert = "<div id='SearchOptions'>"
//       + "Name :<input type='text' id='txtName' class='image_box' style='"
//   + "width: 200px; height:30px;'"
//   + " />"
//    + "Surname : <input type='text' id='txtSurName' class='image_box' style='"
//   + " width: 200px; height:30px;'"
//  + " />"
//  + " <button id='btnAvdSearch' onclick='doAdvancedSearch();' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'>    Search     </button>"
//   + "</div><hr>"
//    var datatabe = " <table id='SearchUsers' class='display' >"
//               + " <thead>"
//               + "     <tr>"
//                + "         <th bgcolor='#5D7B9D'>Select</th>"
//                + "         <th bgcolor='#5D7B9D'>Name</th>"
//               + "         <th bgcolor='#5D7B9D'>Surname</th>"
//               + "         <th bgcolor='#5D7B9D'>ID Number</th>"
//               + "     </tr>"
//               + " </thead>"
//              + "  <tbody></tbody>"
//          + " </table><br/><br/><hr>";
    
//   var meetingFields = "<fieldset style='text-align:left'>"
// + "<legend><b>Session Info Detail</b></legend>"
//+ "<table><tr><td>"
//+ "Subject : </td><td>"+ "Cookies Subject " +"</td></tr><tr><td>&nbsp </td><td>&nbsp</td></tr>"
// + "<tr><td valign='top'>Session Comments : </td><td><textarea rows='4' cols=20' id='sessionDetail'></textarea></td></tr>"
//+ "</table></fieldset>";
//    meetingFields += "<button onclick='setupSession()' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover'>Start Session</button>";
//   var totalSearch = divtoinsert + datatabe + meetingFields;
//   $("#dialog-form").html(totalSearch);
      try {
          var obj = JSON.parse(message);
    $("#SearchUsers > tbody").html("");
    $("#SearchUsers").find("tr:gt(0)").remove();
    var iCounter = 0;
    var arrayLength = obj.OutSearchStudent_Result.length;
    for (var i = 0; i < arrayLength; i++) {
     

            if (obj.OutSearchStudent_Result[i].Name != null) {
                var DOB = obj.OutSearchStudent_Result[i].DOB; //Email
                var c = "";
//                if (DOB != null) {
//                      c = formatDOB(DOB);
//                 }
//                 else
//                 {
//                      c = "";
//                  }
//                  CurrNAME = obj.OutStudentDetails_OutStudentDetailsResults[0].Name;
//                  CurrPOLICYHOLDERNUMBER = obj.OutStudentDetails_OutStudentDetailsResults[0].PolicyHolderNumber;
//                  CurrEMAIL = obj.OutStudentDetails_OutStudentDetailsResults[0].Email;
//                  CurrGRADE = obj.OutStudentDetails_OutStudentDetailsResults[0].Grade;
//                  CurrSCHEMA = obj.OutStudentDetails_OutStudentDetailsResults[0].Schema;
//                  CurrSURNAME = obj.OutStudentDetails_OutStudentDetailsResults[0].Surname;
//                  CurrSCHOOL = obj.OutStudentDetails_OutStudentDetailsResults[0].School;
//                  CurrCLIENT = obj.OutStudentDetails_OutStudentDetailsResults[0].Client;
//                  CurrSTUDENTID = obj.OutStudentDetails_OutStudentDetailsResults[0].Client;
//                  CurrDOB = obj.OutStudentDetails_OutStudentDetailsResults[0].StudentID;
                  var selectedDetailsPayload = "'" + obj.OutSearchStudent_Result[i].Name + "," + obj.OutSearchStudent_Result[i].Surname + "," + obj.OutSearchStudent_Result[i].PolicyNumberHolder + "," + obj.OutSearchStudent_Result[i].Email + "," + obj.OutSearchStudent_Result[i].StudentID + "," + obj.OutSearchStudent_Result[i].Client + "," + obj.OutSearchStudent_Result[i].Schema + "," + obj.OutSearchStudent_Result[i].Grade + "," + obj.OutSearchStudent_Result[i].School;
                  $('#SearchUsers').append('<tr><td align="center"><input type="checkbox" name="student" value="' + selectedDetailsPayload + '"><br></td><td>' + obj.OutSearchStudent_Result[i].Name + '</td><td>' + obj.OutSearchStudent_Result[i].Surname + '</td><td>' + DOB + '</td></tr>')
                iCounter++;
            }
          
        }   
    }
   catch (e) {
       showError(e);
            $('#SearchUsers').hide();
            return;
        }
     if (!iCounter > 0)
    {
       // showSuccess("No Records Found");
        $('#SearchUsers').append('<tr><td colspan="3">No Records Found</td></tr>')
       // $('#SearchUsers').hide();
    }
    //$("#u153").html(message);
   // $('#SearchUsers').dataTable();
   // $("#searchResults").bPopup();
   // $("#searchResults").height("800px");
   // $("#searchResults").width("600px")
   // $("#searchResults").show();
}

function loadSchemas() {
    var check = $("#lsClient option:selected").text();
    console.log(check)
    getSchemas(check);
}

function getSchemas(ClientName) {

    var sUname = $.cookie("userEmail");
    token = $.cookie("Token");
    var Payload = "{ClientName : '" + ClientName + "', tk : '" + token + "' }";
    Type = "POST";
    // Url = "http://europassistance.sapientsa.com//Service.svc/getURSListTypes";
    Url = "http://europassistance.sapientsa.com/Service.svc/GetSchemas";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = getSchemasSuccess;
    CallService();
}

function getSchemasSuccess(Message)
{
    var obj = JSON.parse(Message);
    var retArray = obj;
    $("#listSchemas").html("")
    //alert(obj.ScheneName[0]);
    try {
        console.log(obj[0].ScheneName);
    }
    catch (e) { 
    
    }
    var htmlReturn = "<select id='lsSchema'>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.ScheneName + "</option>"
        });
    //htmlReturn += "<option>" + retArray + "</option>"
    htmlReturn += "</select>";
    $("#listSchemas").html(htmlReturn);
   // $.cookie("Schema", htmlReturn);
}
  
function formatDOB(message)
{
    var initString = message;
    var year = message.substr(0, 2);
    var month = message.substr(2, 2);
    var day = message.substr(3, 2);
    //var returnhtml = "19" & year  ;
    var returnhtml =  year + "." + month + "." + day;
    //if (year > 14)
    return returnhtml;
   // else
    //    return "20" + year + "-" + month + "-" + day;
}   

function getClientTypeSuccess(Message)
{
    var obj = JSON.parse(Message);
    // alert(Message);
    var retArray = obj.OutClientResult_OutClientList;
    var htmlReturn = "<select id='lsClient' onchange='loadSchemas()'>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.Name + "</option>"
    });
    htmlReturn += "</select>";
    clients = htmlReturn;
    $.cookie("Clients", clients);


}

function checkOther() {
    var check = $("#lsSchool option:selected").text();
    if (check == "Other") {
        console.log("is true");
        $("tr.other").show();
    }
    else {
        console.log("is false");
        $("tr.other").hide();
    }
   
}

function getSchoolTypeSuccess(Message) {
    var obj = JSON.parse(Message);
    var retArray = obj.OutClientResult_OutClientList;
    var htmlReturn = "<select id='lsSchool' onchange='checkOther();'>";
      htmlReturn += "<option>Please Select School</option>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.Name + "</option>";
    });
    htmlReturn += "</select>";
    schools = htmlReturn;
    $.cookie("Schools", schools);
}
function getLevelTypeSuccess(Message) {
    var obj = JSON.parse(Message);
    var retArray = obj.OutClientResult_OutClientList;
    var htmlReturn = "<select id='lsLevel'>";
          htmlReturn += "<option>Please Select Level</option>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.Name + "</option>";
    });
    htmlReturn += "</select>";
    $.cookie("Level", htmlReturn);
}
function getSubjectTypeSuccess(Message) {
    var obj = JSON.parse(Message);
    var retArray = obj.OutClientResult_OutClientList;
    var htmlReturn = "<select id='lsSubject'>";
          htmlReturn += "<option>Please Select Subject</option>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.Name + "</option>";
    });
    htmlReturn += "</select>";

    $.cookie("Subject", htmlReturn);
}
function getGradeTypeSuccess(Message) {
    var obj = JSON.parse(Message);
    var retArray = obj.OutClientResult_OutClientList;
    var htmlReturn = "<select id='lsGrades'>";
          htmlReturn += "<option>Please Select Grades</option>";
    $.each(retArray, function (key, v) {
        htmlReturn += "<option>" + v.Name + "</option>"
    });
    htmlReturn += "</select>";
    grades = htmlReturn;
    $.cookie("Grades", grades);
}

var token = "";

function getListType(listType) {
    var sUname = $.cookie("userEmail");
    token = $.cookie("Token");
    var Payload = "{ListType : '" + listType + "', tk : '" + token + "', TeacherEmail : '" + sUname + "' }";
    Type = "POST";
    // Url = "http://europassistance.sapientsa.com//Service.svc/getURSListTypes";
    Url = "http://europassistance.sapientsa.com/Service.svc/getURSListTypes";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;

    if (listType == "Client")
        functionToProcess = getClientTypeSuccess;
    if (listType == "School")
        functionToProcess = getSchoolTypeSuccess;
    if (listType == "Grade")
        functionToProcess = getGradeTypeSuccess;
    if (listType == "Level")
        functionToProcess = getLevelTypeSuccess;
    if (listType == "Subject")
        functionToProcess = getSubjectTypeSuccess;
    CallService();
}

function getListTypeSuccess(Message) {
    var obj = JSON.parse(Message);
}


function addURSStudent() {
    var sUname = $.cookie("userEmail");
    token = $.cookie("Token");
    var ClientScheme = $("#lsSchema :selected").val();
    var StudentName = $("#txtName").val();
    var StudentGrade = $("#lsLevel :selected").val();
    var ClientName = $("#lsClient :selected").val();
    var StudentEmail = $("#txtEmailAddress").val();
    var StudentDOB = $("#txtDateOfBirth").val();
    var School = $("#lsSchool :selected").val();
    var MarketingPermission = "";

    if ($("#Subscribe").is(':checked'))
        MarketingPermission = true;  // checked
    else
        MarketingPermission = false;    // unchecked
    if (MarketingPermission == "") {
        MarketingPermission = false;
    }

    if (School == "Other") {
        School = $("#other").val(); 
    }
    var PolicyHolderNumber = $("#txtPolicyNBR").val();
    if (StudentName == "") {
        $("#txtName").focus();
        showError("No Policy Number Entered");
        return false;
    }
    if (StudentEmail == "") {
        $("#txtEmailAddress").focus();
        showError("No Email Entered");
        return false;
    }
    if (StudentDOB == "") {
        $("#txtDateOfBirth").focus();
        showError("No DOB Entered");
        return false;
    }

    if (ClientScheme == "" ) {
        showError("No Schema Selected");
        return false;
    }
    if (typeof ClientScheme === 'undefined') {
        showError("No Schema Selected");
    };
     var myDates = $("#txtDateOfBirth").val();
   
    var TeacherEmail = sUname;
    var StudentSurname = $("#txtSurName").val();
    var Payload = "{ClientScheme : '" + ClientScheme + "', ClientName : '" + ClientName + "', StudentName : '" + StudentName + "', StudentGrade : '" + StudentGrade + "', tk : '" + token + "', StudentEmail : '" + StudentEmail + "', StudentDOB : '" + myDates + "', School : '" + School + "', TeacherEmail : '" + TeacherEmail + "', StudentSurname : '" + StudentSurname + "', PolicyHolderNumber : '" + PolicyHolderNumber + "' , MarketingPermission : " + MarketingPermission + " }";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/AddStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/AddStudent";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = addURSStudentSuccess;
    CallService();

}

function addURSStudentSuccess(Message) {
    var obj = JSON.parse(Message);
    showSuccess(obj.ResultMessage);
 return false;
}

function editURSStudent() {
    var sUname = $.cookie("userEmail");
    token = $.cookie("Token");
    var ClientScheme = $("#lsSchema :selected").val();
    var StudentName = $("#txtName").val();
    var StudentGrade = $("#lsLevel :selected").val();
    var ClientName = $("#lsClient :selected").val();
    var StudentEmail = $("#txtEmailAddress").val();
    var StudentDOB = $("#txtDateOfBirth").val();
    var School = $("#lsSchool :selected").val();
    var MarketingPermission = "";

    if ($("#Subscribe").is(':checked'))
        MarketingPermission = true;  // checked
    else
        MarketingPermission = false;    // unchecked
    if (MarketingPermission == "") {
        MarketingPermission = false;
    }

    if (School == "Other") {
        School = $("#other").val();
    }
    var PolicyHolderNumber = $("#txtPolicyNBR").val();
     if (StudentName == "") {
        $("#txtName").focus();
        showError("No Policy Number Entered");
        return false;
    }
    if (StudentEmail == "") {
        $("#txtEmailAddress").focus();
        showError("No Email Entered");
        return false;
    }
    if (StudentDOB == "") {
        $("#txtDateOfBirth").focus();
        showError("No DOB Entered");
        return false;
    }

    if (ClientScheme == "" ) {
        showError("No Schema Selected");
        return false;
    }
    if (typeof ClientScheme === 'undefined') {
        showError("No Schema Selected");
    };
    var myDates = $("#txtDateOfBirth").val();
    var splitter = StudentToEmail.split(",");
    var TeacherEmail = sUname;
    var StudentSurname = $("#txtSurName").val();
    var Payload = "{ClientScheme : '" + ClientScheme + "', ClientName : '" + ClientName + "', StudentName : '" + StudentName + "', StudentGrade : '" + StudentGrade + "', tk : '" + token + "', StudentEmail : '" + StudentEmail + "', StudentDOB : '" + myDates + "', School : '" + School + "', TeacherEmail : '" + TeacherEmail + "', StudentSurname : '" + StudentSurname + "', PolicyHolderNumber : '" + PolicyHolderNumber + "' , MarketingPermission : " + MarketingPermission + " , OldEmail : '" + splitter[3] + "' }";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/AddStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/EditStudent";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = editURSStudentSuccess;
    CallService();

}

function editURSStudentSuccess(Message) {
    var obj = JSON.parse(Message);
    showSuccess(obj.ResultMessage);
    return false;
}



function LoginTopDog() {

    var Payload = "{uid : '" + 1 + "', pw : '" + 1 + "' }";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/topdogLogin";
    Url = "http://europassistance.sapientsa.com/Service.svc/topdogLogin";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = LoginSuccess;
    CallService();

}


function LoginTopDogSuccess(Message) {
    alert(Message);
}

function getStudentInfo(Email) {
    var splitted = Email.split(",")

    token = $.cookie("Token");
    var sUname = $("#SearchFName").val();
    var Payload = "{Email : '" + splitted[3] + "', Token : '" + token + "' }";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/topdogLogin";
    Url = "http://europassistance.sapientsa.com/Service.svc/GetStudentInfo";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = getStudentInfoSuccess;
    CallService();

}


function getStudentInfoSuccess(Message) {
    var obj = JSON.parse(Message);
    

   
    //showSession(CurrNAME, CurrSURNAME, CurrDOB, CurrPOLICYHOLDERNUMBER, CurrEmail, CurrSTUDENTID);
	 return false;
}


function Login() {

    var userName = $("#uName").val();
    var userPw = $("#uPassword").val();

    if (userName == "" || userPw == "") {
        alert("Credentials invalid.");
        return;
    }
    var Payload = "{uid : '" + userName + "', pw : '" + userPw + "' }";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/doLogin";
    Url = "http://europassistance.sapientsa.com/Service.svc/doLogin";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = LoginSuccess;
    CallService();
}

function doSearch()
{
    token = $.cookie("Token");
    var sUname = $("#SearchFName").val();
    var sSurname = "";
    var Payload = "{Name : '" + sUname + "', Surname : '" + sSurname + "', Token : '" + token + "' }";
    Type = "POST";
    // Url = "http://europassistance.sapientsa.com//Service.svc/searchStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/searchStudent";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = SearchSuccess;
    CallService();
}

function doAdvancedSearch2() {
    // token = $.cookie("Token");
    var sUname = $("#txtName").val();
    var sSurname = $("#txtSurName").val();
    var Payload = "{Name : '" + sUname + "', Surname : '" + sSurname + "', Token : '" + token + "' }";
    Type = "POST";
    // Url = "http://europassistance.sapientsa.com//Service.svc/searchStudent";
    Url = "http://europassistance.sapientsa.com/Service.svc/searchStudent";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = SearchSuccess;
    CallService();
}

function aliveCheck() {
    token = $.cookie("Token");
       if (token == "")
        window.location = "login.html";
}

function showError(message)
{
    iosOverlay({
        text: message,
        duration: 2e3,
        icon: "images/cross.png"
    });
    return false;
}
function showSuccess(message) {
    iosOverlay({
        text: message,
        duration: 2e3,
        icon: "images/check.png"
    });
    return false;
}
function resetPW(username,password,newpassword) {
    token = $.cookie("Token");
    var sUname = username;
    var pw = newpassword;
    var opw = password;
    var Payload = "{uid : '" + sUname + "', pw : '" + pw + "', opw : '" + opw + "', tk : '" + token + "'}";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/resetPassword";
    Url = "http://europassistance.sapientsa.com/Service.svc/resetPassword";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = resetPWSuccess;
    CallService();
}

function resetPWSuccess(Message) {
    var obj = JSON.parse(Message);
    showSuccess(obj.ResultMessage);
}

function CreateBBBMeeting() {
    var meetingID = guid();
    var checksum = "";
    var BBBname = "Teacher";
    var secret = "5f29ba35694dc186fe86eea3ff4c832a";
    var callString = "createname=" + BBBname + "&meetingID=" + meetingID + secret;
    var orgCallString = "name=" + BBBname + "&meetingID=" + meetingID;
    checksum = hex_sha1(callString);
    var url = "http://bbb.openedu.co.za/bigbluebutton/api/create?" + orgCallString + "&checksum=" + checksum; 
    var Payload = "{url : '" + url + "'}";
    Type = "POST";
    //Url = "http://europassistance.sapientsa.com//Service.svc/resetPassword";
    Url = "http://europassistance.sapientsa.com/Service.svc/BBBLogin";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = CreateBBBMeetingSuccess;
    CallService();
}
function CreateBBBMeetingSuccess(Message) {
    var result = replaceInString(Message)
    var result2 = "";
    var obj;
    console.log(Message);
    console.log(result);
    var xmlDoc = $.parseXML(result),
         $xml = $(xmlDoc),
        $title = $xml.find("meetingID"),
        $title2 = $xml.find("attendeePW");
        $title3 = $xml.find("moderatorPW");
    meetingID = $title.text();
    meetingpw = $title2.text();
    adminPW = $title3.text();
    $.cookie("meetid", meetingID);
    $.cookie("meetpw", meetingpw);
    $.cookie("adminPW", adminPW);
    $.cookie("meetid", meetingID);
    $.cookie("meetpw", meetingpw);
    $.cookie("adminPW", adminPW);
}

function JoinBBBMeeting() {
    //var meetingID = guid();
    console.log("Joining Meeting");
    //GetBBBConfig();
    console.log("Got Server Config");
    //SetBBBConfig($.cookie("meetid"));
    console.log("Set Server Config");
    var checksum = "";
    var teacherName = "Teacher";
    var secret = "5f29ba35694dc186fe86eea3ff4c832a";
    var callString = "joinpassword=" + $.cookie("adminPW") + "&meetingID=" + $.cookie("meetid") + "&fullName=" + teacherName+secret;
    var orgCallString = "password=" + $.cookie("adminPW") + "&meetingID=" + $.cookie("meetid") + "&fullName=" + teacherName;

    checksum = hex_sha1(callString);
    var url1 = "http://bbb.openedu.co.za/bigbluebutton/api/join?" + orgCallString + "&checksum=" + checksum;
  
   //window.open(url1);
   sendEmail(url1, $.cookie("userEmail"));
   console.log("Sent userEmail : " + $.cookie("userEmail"));

    checksum = "";
    teacherName = "Student";
    secret = "5f29ba35694dc186fe86eea3ff4c832a";
    callString = "joinpassword=" + $.cookie("meetpw") + "&meetingID=" + $.cookie("meetid") + "&fullName=" + teacherName + secret;
    orgCallString = "password=" + $.cookie("meetpw") + "&meetingID=" + $.cookie("meetid") + "&fullName=" + teacherName ;

   checksum = hex_sha1(callString);
   var url = "http://bbb.openedu.co.za/bigbluebutton/api/join?" + orgCallString + "&checksum=" + checksum;
   var splitted = StudentToEmail.split(",");
   sendEmail(url, splitted[3]);
   console.log("Sent userEmail : " + splitted[3]);
 	$.window({
       showModal: true,
      modalOpacity: 0.5,
       title: "Big Blue Button",
       url: url1,
       width: 1024,           
   	height: 768,          
   	});
}

function JoinBBBMeetingSuccess(Message) {

}

function GetBBBConfig() { 

}

function replaceInString(source) {
    var result = source.replace(/\/\\/g, "/");
    return result;
}

function getXmlString(xml) {
    if (window.ActiveXObject) { return xml.xml; }
    return new XMLSerializer().serializeToString(xml);
}

function sendHelp(Message) {
    sendEmail($("#").val(), "roux.dj@gmail.com");
}

function sendEmail(message,emailto) {
    token = $.cookie("Token");
    var username = $.cookie("userEmail");
    var Payload = "{tk : '" + token + "', StudentEmail : '" + emailto + "', EmailMessage : '" + message + "', TeacherEmail : '" + username + "'}";
    //alert("Message  to send : " + Payload);
    Type = "POST";
    Url = "http://europassistance.sapientsa.com/Service.svc/SendEmail";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = sendEmailSuccess;
    CallService();
}

function sendEmailSuccess(Message) {
    var obj = JSON.parse(Message);
    showError(obj.ResultMessage);
}
function addSubject(Subject) {

    var Payload = "{Subject : '" + Subject + "'}";
    Type = "POST";
    Url = "http://europassistance.sapientsa.com/Service.svc/AddSubject";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = addSubjectSuccess;
    CallService();

}

function addSubjectSuccess(Message) {
    var obj = JSON.parse(Message);
}

function GetBBBConfig() {

    var secret = "5f29ba35694dc186fe86eea3ff4c832a";
    var callString =  "getDefaultConfigXML" + secret;
    checksum = hex_sha1(callString);
    var url = "http://bbb.openedu.co.za/bigbluebutton/api/getDefaultConfigXML?" + "&checksum=" + checksum;
    var Payload = "{url : '" + url + "'}";
    Type = "POST";
    Url = "http://europassistance.sapientsa.com/Service.svc/GetBBBServerConfig";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = GetBBBConfigSuccess;
    CallService();

}

function GetBBBConfigSuccess(Message) {
    //var obj = JSON.parse(Message);
    //console.log("Object Recieved : " + obj);
}

function SetBBBConfig(meetingID) {

//    var meetingID = guid();
//    var checksum = "";
//    var BBBname = "Teacher";
//    var secret = "5f29ba35694dc186fe86eea3ff4c832a";
//    var callString = "createname=" + BBBname + "&meetingID=" + meetingID + secret;
//    var orgCallString = "name=" + BBBname + "&meetingID=" + meetingID;
//    checksum = hex_sha1(callString);
    var meetingID = $.cookie("meetid")
    var secret = "5f29ba35694dc186fe86eea3ff4c832a";
    var callString = "setDefaultConfigXMLmeetingID=" + meetingID + "&configXML=" + ServerXMLConfig + secret;
    console.log("CallString : " + callString);
    checksum = hex_sha1(callString);
    var orgCallString = "meetingID=" + meetingID + "&configXML=" + ServerXMLConfig;
    var url = "http://bbb.openedu.co.za/bigbluebutton/api/setConfigXML?" + orgCallString + "&checksum=" + checksum;
    var Payload = "{url : '" + url + "'}";
    Type = "POST";
    Url = "http://europassistance.sapientsa.com/Service.svc/SetBBBServerConfig";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = SetBBBConfigSuccess;
    CallService();

}

function SetBBBConfigSuccess(Message) {
//    var obj = JSON.parse(Message);
//    console.log("Object Recieved : " + obj);
    var result = replaceInString(Message)
    var result2 = "";
    var obj;
    console.log(Message);
    console.log(result);
//    var xmlDoc = $.parseXML(result),
//         $xml = $(xmlDoc),
//        $title = $xml.find("token"),
//        tokenID = $title.text();
//    $.cookie("Token", tokenID);
}

function getStudentDetails(Student) {
    var splitted = Student.split(",")
    token = $.cookie("Token");
    var Payload = "{Email : '" + splitted[3] + "', Token : '" + token + "' }";
    Type = "POST";
    Url = "http://europassistance.sapientsa.com/Service.svc/GetStudentInfo";
    Data = JSON.stringify(Payload);
    ContentType = "application/json";
    varProcessData = true;
    functionToProcess = getStudentDetailsSuccess;
    CallService();
}

function getStudentDetailsSuccess(Message) {
    var obj = JSON.parse(Message);
    var vc = false;
        console.log("Object Recieved : " + obj);
        console.log(obj.OutStudentDetails_OutStudentDetailsResults[0].Name);
        CurrNAME = obj.OutStudentDetails_OutStudentDetailsResults[0].Name;
        CurrDOB = obj.OutStudentDetails_OutStudentDetailsResults[0].DOB;
        CurrEmail = obj.OutStudentDetails_OutStudentDetailsResults[0].Email;
        CurrPOLICYHOLDERNUMBER = obj.OutStudentDetails_OutStudentDetailsResults[0].PolicyHolderNumber;
        CurrGRADE = obj.OutStudentDetails_OutStudentDetailsResults[0].Grade;
        CurrSCHEMA = obj.OutStudentDetails_OutStudentDetailsResults[0].Schema;
        CurrSURNAME = obj.OutStudentDetails_OutStudentDetailsResults[0].Surname;
        CurrSCHOOL = obj.OutStudentDetails_OutStudentDetailsResults[0].School;
        CurrCLIENT = obj.OutStudentDetails_OutStudentDetailsResults[0].Client;
        CurrSTUDENTID = obj.OutStudentDetails_OutStudentDetailsResults[0].StudentID;
        vc = obj.OutStudentDetails_OutStudentDetailsResults[0].VC

        if (vc == false) {
            $("#u165").hide();
        }
        else {
            $("#u165").show();
        }
}






