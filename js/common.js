// function - set iframe height on load
function iframeLoaded(elementId) {
  setTimeout(function () {
    var $iframe = $("#" + elementId).length
      ? $("#" + elementId)
      : window.parent.$("#" + elementId);
    var padding = -12;
    $iframe.css("height", "0px");
    var height =
      $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
    $iframe.css("height", height + "px");
  }, 50);
}
// function - create iframe
function openModal(modalTitle, iframeSrc) {
  $("#cb-modal-title").html(modalTitle);
  $("#cb-modal-error").addClass("d-none");
  $("#cb-modal-body").html(
    '<iframe frameborder="0" scrolling="no" id="cb-modal-frame" src="' +
      iframeSrc +
      '"></iframe>'
  );
  $("#cb-modal-frame").on("load", function () {
    iframeLoaded(this.id);
  });
  $("#cb-modal").modal();
}
// function - get URL Vars
function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    hash[1] = unescape(hash[1]);
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}
var urlVars = getUrlVars();

// hide default submit button row at the bottom of inline forms
document.addEventListener("DataPageReady", function (event) {
  $('.cb-hide-submit input[type="submit"]').closest("tr").remove();
  $(".cb-btn-reset").bind("click", function () {
    $(this).closest("form").find('select, input[type="text"]').val("");
    $(this).closest("form").submit();
  });

  // pivot table text alignment
  $(
    ".STF6ACA166AD994781958BD5E396B90E75 .cbResultSetHeaderCell, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetTableCellNumberDate, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetHeaderCell, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetTotalsLabelCell, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetTableCell, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetTotalsDataCellNumberDate, .STF6ACA166AD994781958BD5E396B90E75 .cbResultSetHeaderCellNumberDate"
  ).css("text-align", "left");

  // --------- Public ---------

  $(".rateit").each(function () {
    $(this).rateit($(this).value);

    // for rating submit
    $(this).on("rated", function () {
      let name = "Rate",
        $rank = $(this).rateit("value"),
        $rankField = $("#InsertRecordRate");
      $rankField.val($rank);
    });
  });

  var $imgContainer = $(".img-container");

  $imgContainer.find("img").each(function (index) {
    $checkSrc = $(this).attr("src");

    if (!$checkSrc) {
      var carousel_item = $(this).closest("div");
      var indicators = $imgContainer.find(".carousel-indicators");

      carousel_item.remove();
      indicators.find('li[data-slide-to="' + index + '"]').remove();
    }
  });

  // --------- Public ---------
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};
function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return monthIndex + 1 + "/" + day + "/" + year;
}

function load_public_navbar(active_nav) {
  $("#site-navbar").html(
    ' \
    <div class="container-fluid cb-container-lg"> \
        <a class= "navbar-brand" href = "./" >\
          <i class="fas fa-home"></i>\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"\
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbar">\
          <ul class="navbar-nav ml-auto">\
            <li class="nav-item" id="nav-dashboard" style="margin-top:10px"> \
            </li> \
            <li class="nav-item dropdown" id="nav-projects"> \
              <a class="nav-link" href="my-cart.html" role="button"> \
                <i class="fas fa-shopping-cart"></i> My Cart \
              </a> \
            </li> \
            <li class="nav-item dropdown" id="nav-projects"> \
              <a class="nav-link" href="order-history.html" role="button"> \
                <i class="fas fa-list"></i> Order History \
              </a> \
            </li> \
            <li class="nav-item">\
              <a id="nav-profile" class="nav-link" href="profile.html?cbResetParam=1">\
                <i class="fas fa-user"></i>\
                Profile\
               </a>\
            </li>\
            <li class="nav-item">\
              <a class="nav-link" href="https://c1hbb533.caspio.com/folderlogout">\
                <i class="fas fa-sign-out-alt"></i>\
                Log Out\
              </a>\
            </li>\
          </ul>\
        </div>\
      </div >\
  '
  );

  $("#nav-" + active_nav).addClass("active");
}

function load_employee_navbar(active_nav) {
  $("#site-navbar").html(
    ' \
		<div class="container-fluid cb-container-lg"> \
        <a class= "navbar-brand" href = "./home.html?cbResetParam=1" >\
          <h5 class="mb-0"> Customer Portal </h5>\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"\
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbar">\
          <ul class="navbar-nav ml-auto">\
            <li class="nav-item" id="nav-dashboard" style="margin-top:10px"> \
            </li> \
            <li class="nav-item dropdown" id="nav-cart"> \
              <a class="nav-link" href="my-cart.html" role="button"> \
                <i class="fas fa-shopping-cart"></i> My Cart \
              </a> \
            </li> \
            <li class="nav-item dropdown" id="nav-history"> \
              <a class="nav-link" href="order-history.html" role="button"> \
                <i class="fas fa-list"></i> Order History \
              </a> \
            </li> \
            <li class="nav-item" id="nav-profile">\
              <a class="nav-link" href="profile.html?cbResetParam=1">\
                <i class="fas fa-user"></i>\
                Profile\
               </a>\
            </li>\
            <li class="nav-item">\
              <a class="nav-link" href="https://c1hbb533.caspio.com/folderlogout">\
                <i class="fas fa-sign-out-alt"></i>\
                Log Out\
              </a>\
            </li>\
          </ul>\
        </div>\
      </div >\
	'
  );

  $("#nav-" + active_nav).addClass("active");
}

function load_admin_navbar(active_nav) {
  $("#site-navbar").html(
    ' \
  <style>\
    .dropdown-submenu {\
        position: relative;\
    }\
    .dropdown-item:focus,\
    .dropdown-item:hover {\
        color: #000;\
        text-decoration: none;\
        background-color: transparent;\
    }\
    .dropdown-submenu>.dropdown-menu {\
        top: 0;\
        left: 100%;\
        margin-top: 0px;\
        margin-left: 0px;\
    }\
  </style>\
		<div class="container-fluid cb-container-lg"> \
			<a class="navbar-brand" href="./">Admin Portal</a> \
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> \
				<span class="navbar-toggler-icon"></span> \
			</button> \
			<div class="collapse navbar-collapse" id="navbar"> \
				<ul class="navbar-nav ml-auto"> \
					<li class="nav-item dashboard"> \
						<a id="nav-employee" class="nav-link" href="dashboard.html?cbResetParam=1"> <i class="fas fa-chart-line"></i> Dashboard </a> \
          </li> \
					<li class="nav-item dropdown manage-projects"> \
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<i class="fas fa-list"></i> Projects \
						</a> \
						<div class="dropdown-menu" aria-labelledby="navbarDropdown"> \
            <a class="dropdown-item" href="my_projects.html?cbResetParam=1&filter=My Projects">My Projects</a> \
						<a class="dropdown-item" href="add_new_project.html?cbResetParam=1&filter=allprojects">Add New Project</a> \
            <hr>\
            <a class="dropdown-item" href="all_projects.html?filter=allprojects">All Projects</a> \
						</div> \
					</li> \
					<li class="nav-item dropdown manage-tasks"> \
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<i class="fas fa-clipboard-check"></i> Tasks \
						</a> \
						<div class="dropdown-menu" aria-labelledby="navbarDropdown2"> \
            <a class="dropdown-item" href="mytasks.html?cbResetParam=1">My Tasks</a> \
            <a class="dropdown-item" href="add_new_task.html?cbResetParam=1">Add New Task</a> \
            <hr>\
            <a class="dropdown-item" href="manage_tasks.html?cbResetParam=1">All Tasks</a> \
						</div> \
          </li> \
          <li class="nav-item dropdown manage-users"> \
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<i class="fas fa-users"></i> Users \
						</a> \
						<div class="dropdown-menu" aria-labelledby="navbarDropdown2"> \
            <a class="dropdown-item" href="manage_users.html?cbResetParam=1">All Users</a> \
            <a class="dropdown-item" href="add_new_user.html?cbResetParam=1">Add New User</a> \
						</div> \
          </li> \
					<li class="nav-item profile"> \
						<a id="nav-profile" class="nav-link" href="profile.html?cbResetParam=1"> <i class="fas fa-user"></i> Profile </a> \
					</li> \
					<li class="nav-item"> \
						<a class="nav-link" href="https://c1hbb533.caspio.com/folderlogout"> <i class="fas fa-sign-out-alt"></i> Log Out </a> \
					</li> \
				</ul> \
			</div> \
		</div> \
	'
  );

  $(".nav-item." + active_nav).addClass("active");

  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    // clear show first
    $("ul[aria-labelledby='dropdownMenu2'].show").removeClass("show");

    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");

    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });
}

function admin_navbar(active_nav) {
  $("#site-navbar").html(
    ' \
  <style>\
    .dropdown-submenu {\
        position: relative;\
    }\
    .dropdown-item:focus,\
    .dropdown-item:hover {\
        color: #000;\
        text-decoration: none;\
        background-color: transparent;\
    }\
    .dropdown-submenu>.dropdown-menu {\
        top: 0;\
        left: 100%;\
        margin-top: 0px;\
        margin-left: 0px;\
    }\
  </style>\
        <div class="container-fluid cb-container-lg admin-navbar"> \
            <a class="navbar-brand" href="./"><h5 class="mb-0">Admin Portal</h5></a> \
            <button class="navbar-toggler mr-admin-3" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> \
                <span class="navbar-toggler-icon"></span> \
            </button> \
            <div class="collapse navbar-collapse" id="navbar"> \
                <ul class="navbar-nav ml-auto"> \
                    <li class="nav-item dropdown manage-orders"> \
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
                        <i class="fas fa-tachometer-alt"></i> Dashboard \
                        </a> \
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown2"> \
                          <a class="dropdown-item" href="manage_orders.html?cbResetParam=1">Process Orders</a> \
                          <a class="dropdown-item" href="manage_sales.html?cbResetParam=1">View Sales</a> \
                        </div> \
          </li> \
          <li class="nav-item dropdown manage-items"> \
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
                        <i class="fas fa-cart-plus"></i> Manage Products \
                        </a> \
                        <ul class="dropdown-menu"> \
                          <a class="dropdown-item" href="manage_items.html?cbResetParam=1">All Products</a> \
                          <a class="dropdown-item" href="add_new_item.html?cbResetParam=1">Add Product</a> \
                          <a href="manage_categories.html?cbResetParam=1" class="dropdown-item">Product Categories</a> \
                      </ul> \
          </li> \
          <li class="nav-item dropdown manage-users"> \
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
                            <i class="fas fa-users"></i> Manage Users \
                        </a> \
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown2"> \
            <a class="dropdown-item" href="manage_users.html?cbResetParam=1">All Users</a> \
            <a class="dropdown-item" href="add_new_user.html?cbResetParam=1">Add New User</a> \
                        </div> \
          </li> \
                    <li class="nav-item profile"> \
                        <a id="nav-profile" class="nav-link" href="profile.html?cbResetParam=1"> <i class="fas fa-user"></i> Profile </a> \
                    </li> \
                    <li class="nav-item"> \
                        <a class="nav-link" href="https://c1hbb533.caspio.com/folderlogout"> <i class="fas fa-sign-out-alt"></i> Log Out </a> \
                    </li> \
                </ul> \
            </div> \
        </div> \
    '
  );

  $(".nav-item." + active_nav).addClass("active");

  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    // clear show first
    $("ul[aria-labelledby='dropdownMenu2'].show").removeClass("show");

    event.preventDefault();
    event.stopPropagation();

    $(this)
      .parents(".dropdown-submenu")
      .siblings()
      .find(".show")
      .removeClass("show");

    $(this).siblings().toggleClass("show");

    //collapse all after nav is closed
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });
}

function public_navbar(active_nav) {
  $("#site-navbar").html(
    ' \
    <div class="container-fluid cb-container-lg"> \
        <a class= "navbar-brand" href = "./" >\
          <h5 class="mb-0">Online Store</h5>\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"\
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbar">\
          <ul class="navbar-nav ml-auto">\
            <li class="nav-item" id="nav-dashboard" style="margin-top:10px"> \
            </li> \
            <li class="nav-item">\
              <a id="nav-login" class="nav-link" href="../user/">\
                <i class="fas fa-user"></i>\
                Login\
               </a>\
            </li>\
            <li class="nav-item">\
              <a id="nav-signup" class="nav-link" href="registration.html">\
                <i class="fas fa-user"></i>\
                Register\
               </a>\
            </li>\
          </ul>\
        </div>\
      </div >\
  '
  );

  $("#nav-" + active_nav).addClass("active");
}
