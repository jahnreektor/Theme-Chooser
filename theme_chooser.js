$(document).ready(function() {
    var wasSelectedID, wasHoveredID, wasSelectedBgID, wasHoveredBgID;
    var allMainMenuClasses="choice-orig-main choice-all-sea-green-main choice-all-orange-main choice-all-blue-main choice-all-red-main choice-all-green-main choice-beveled-green-main choice-beveled-blue-main choice-beveled-red-main default-main-menu choice-beveled-orange-main choice-beveled-purple-main choice-beveled-pink-main choice-beveled-sea-green-main";
    var allSubMenuClasses="choice-orig-blue-sub choice-orig-red-sub choice-orig-sea-green-sub choice-orig-green-sub choice-orig-orange-sub choice-all-sea-green-sub choice-all-orange-sub choice-all-blue-sub choice-all-red-sub choice-all-green-sub choice-beveled-green-sub choice-beveled-blue-sub choice-beveled-red-sub default-sub-menu choice-beveled-orange-sub choice-beveled-purple-sub choice-beveled-pink-sub choice-beveled-sea-green-sub";
    var allBgClasses="bg-1 bg-2 bg-3 bg-4 bg-5 default-bg";


/*The 'mouse enter' and 'click' events for the menu theme chooser*/
    $(".choice").on('mouseenter', function () {
        $('.choice').removeClass('chosen');
        $(this).addClass('chosen');
        wasHoveredID = $(this).attr("id");
        setPreview(wasHoveredID);
    });
    $(".choice").on('click', function () {
	$('.choice').removeClass('chosen selected');
	wasSelectedID = $(this).attr("id");
	$(this).addClass('selected');
    });
    
/*The preview gets set to whatever the last selected menu theme was (rather than whatever theme the user last hovered over)*/
    $("#theme-chooser").on('mouseleave', function () {
	$('.choice').removeClass('chosen');
	setPreview(wasSelectedID);
    });

/*The preview gets set to whatever the last selected menu theme was (rather than whatever theme the user last hovered over)*/    
    $(".choice-bg").on('mouseenter', function () {
	$('.choice-bg').removeClass('chosen');
	$(this).addClass('chosen');
	    wasHoveredBgID = $(this).attr("id");
	setPreview(wasHoveredBgID);
    });
    
    /*The 'mouse enter' and 'click' events for the bg theme chooser*/    
    $(".choice-bg").on('click', function () {
	$('.choice-bg').removeClass('chosen selected');
	wasSelectedBgID = $(this).attr("id");
	$(this).addClass('selected');
	});
    
    $("#bg-chooser").on('mouseleave', function () {
	$('.choice-bg').removeClass('chosen');
	setPreview(wasSelectedBgID);
    });
    
    var clearPreviewMenu = function () {
	$('#preview-main-menu').removeClass(allMainMenuClasses);
	$('#preview-sub-menu').removeClass(allSubMenuClasses);
    };

    var clearPreviewBg = function () {
	$('preview-main-area').removeClass(allBgClasses);
    };

/*    var addClassToMainMenu = function(theClass) {
	$('#preview-main-menu').addClass(theClass);
    };

    var addClassToSubMenu = function(theClass) {
	$('#preview-sub-menu').addClass(theClass);
    };*/

    var addClassesToMenu = function(theMainMenuClass, theSubMenuClass) {
	$('#preview-main-menu').addClass(theMainMenuClass);
	$('#preview-sub-menu').addClass(theSubMenuClass);
    };

    var addClassToBg = function(theClass) {
	$('#preview-area').addClass(theClass);
    };

    var setPreview = function (theElementID) {
	//alert(theElementID);
	   switch (theElementID)
	{
	    //THE FOLLOWING ARE FOR
	case "choice-orig-blue":
	    clearPreviewMenu();
	    addClassesToMenu("choice-orig-main","choice-orig-blue-sub");
	    break;
	case "choice-orig-red":
	    clearPreviewMenu();
	    addClassesToMenu("choice-orig-main","choice-orig-red-sub");
	    break;
	case "choice-orig-sea-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-orig-main","choice-orig-sea-green-sub");
	    break;
	case "choice-orig-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-orig-main","choice-orig-green-sub");	    
	    break;
	case "choice-orig-orange":
	    clearPreviewMenu();
	    addClassesToMenu("choice-orig-main","choice-orig-orange-sub");	    
	    break;
	case "choice-all-sea-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-all-sea-green-main","choice-all-sea-green-sub");	    
	    break;
	case "choice-all-orange":
	    clearPreviewMenu();
	    addClassesToMenu("choice-all-orange-main","choice-all-orange-sub");	    
	    break;
	case "choice-all-blue":
	    clearPreviewMenu();
	    addClassesToMenu("choice-all-blue-main","choice-all-blue-sub");	    
	    break;
	case "choice-all-red":
	    clearPreviewMenu();
	    addClassesToMenu("choice-all-red-main","choice-all-red-sub");	    
	    break;
	case "choice-all-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-all-green-main","choice-all-green-sub");	    
	    break;
	case "choice-beveled-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-green-main","choice-beveled-green-sub");	    
	    break;
	case "choice-beveled-blue":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-blue-main","choice-beveled-blue-sub");	    
	    break;
	case "choice-beveled-red":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-red-main","choice-beveled-red-sub");	    
	    break;

	    //THE FOLOWING ARE FOR BACKGROUNDS
	case "choice-bg-1":
	    clearPreviewBg();
	    addClassToBg('choice-bg-1-main');
	    break;
	case "choice-bg-2":
	    clearPreviewBg();
	    addClassToBg('choice-bg-2-main');
	    break;
	case "choice-bg-3":
	    clearPreviewBg();
	    addClassToBg('choice-bg-3-main');
	    break;
	case "choice-bg-4":
	    clearPreviewBg();
	    addClassToBg('choice-bg-4-main');
	    break;
	case "choice-bg-5":
	    clearPreviewBg();
	    addClassToBg('choice-bg-5-main');
	    break;
	default:
	}
    };
});
