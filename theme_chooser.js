$(document).ready(function() {
    var wasSelectedID, wasHoveredID, wasSelectedBgID, wasHoveredBgID;
    var allMainMenuClasses="choice-orig-main choice-all-sea-green-main choice-all-orange-main choice-all-blue-main choice-all-red-main choice-all-green-main choice-beveled-green-main choice-beveled-blue-main choice-beveled-red-main default-main-menu choice-beveled-orange-main choice-beveled-purple-main choice-beveled-pink-main choice-beveled-sea-green-main";
    var allSubMenuClasses="choice-orig-blue-sub choice-orig-red-sub choice-orig-sea-green-sub choice-orig-green-sub choice-orig-orange-sub choice-all-sea-green-sub choice-all-orange-sub choice-all-blue-sub choice-all-red-sub choice-all-green-sub choice-beveled-green-sub choice-beveled-blue-sub choice-beveled-red-sub default-sub-menu choice-beveled-orange-sub choice-beveled-purple-sub choice-beveled-pink-sub choice-beveled-sea-green-sub";
    var allBgClasses="default-bg choice-bg-binding-dark choice-bg-binding-light choice-bg-brickwall choice-bg-cream-pixels choice-bg-mooning choice-bg-pw-pattern choice-bg-squairy-light choice-bg-ticks choice-bg-tweed choice-bg-el-chalten-mountains choice-bg-mount-hood choice-bg-hong-kong-skyline choice-bg-atlanta-skyline choice-bg-cannon-beach";


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
	//alert("called clear");
	$('#preview-area').removeClass(allBgClasses);
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
	case "choice-beveled-orange":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-orange-main","choice-beveled-orange-sub");	    
	    break;
	case "choice-beveled-purple":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-purple-main","choice-beveled-purple-sub");	    
	    break;
	case "choice-beveled-pink":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-pink-main","choice-beveled-pink-sub");	    
	    break;
	case "choice-beveled-sea-green":
	    clearPreviewMenu();
	    addClassesToMenu("choice-beveled-sea-green-main","choice-beveled-sea-green-sub");	    
	    break;

   //THE FOLOWING ARE FOR BACKGROUNDS
	case "choice-bg-binding-dark": //NOTE THAT THE CASES ARE IDS, while CLASSes are added
	    clearPreviewBg();
	    addClassToBg('choice-bg-binding-dark');
	    break;
	case "choice-bg-binding-light":
	    clearPreviewBg();
	    addClassToBg('choice-bg-binding-light');
	    break;
	case "choice-bg-cream-pixels":
	    clearPreviewBg();
	    addClassToBg('choice-bg-cream-pixels');
	    break;
	case "choice-bg-mooning":
	    clearPreviewBg();
	    addClassToBg('choice-bg-mooning');
	    break;
	case "choice-bg-brickwall":
	    clearPreviewBg();
	    addClassToBg('choice-bg-brickwall');
	    break;
	case "choice-bg-pw-pattern":
	    clearPreviewBg();
	    addClassToBg('choice-bg-pw-pattern');
	    break;
	case "choice-bg-squairy-light":
	    clearPreviewBg();
	    addClassToBg('choice-bg-squairy-light');
	    break;
	case "choice-bg-ticks":
	    clearPreviewBg();
	    addClassToBg('choice-bg-ticks');
	    break;
	case "choice-bg-tweed":
	    clearPreviewBg();
	    addClassToBg('choice-bg-tweed');
	    break;
 	case "choice-bg-el-chalten-mountains":
	    clearPreviewBg();
	    addClassToBg('choice-bg-el-chalten-mountains');
	    break;
 	case "choice-bg-atlanta-skyline":
	    clearPreviewBg();
	    addClassToBg('choice-bg-atlanta-skyline');
	    break;
 	case "choice-bg-cannon-beach":
	    clearPreviewBg();
	    addClassToBg('choice-bg-cannon-beach');
	    break;
 	case "choice-bg-mount-hood":
	    clearPreviewBg();
	    addClassToBg('choice-bg-mount-hood');
	    break;
 	case "choice-bg-hong-kong-skyline":
	    clearPreviewBg();
	    addClassToBg('choice-bg-hong-kong-skyline');
	    break;
	default:
	}
    };
});
