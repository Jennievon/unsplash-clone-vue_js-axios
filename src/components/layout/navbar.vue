<template>
  <div>
    <div class="topbar-wrap">
      <div class="topbar is-sticky">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="topbar-nav d-lg-none">
            <li class="topbar-nav-item relative">
              <a class="toggle-nav" href="#">
                <div class="toggle-icon">
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                </div>
              </a>
            </li>
            <!-- .topbar-nav-item -->
          </ul>
          <!-- .topbar-nav -->
          <a class="topbar-logo" href="./">
            <img src="assets/images/logo.png" srcset="assets/images/logo.png 2x" alt="logo" />
            <!-- <em class="ti ti-user"></em> Logo -->
          </a>
          <ul class="topbar-nav">
            <li class="topbar-nav-item relative">
              <span class="user-welcome d-none d-lg-inline-block">Welcome! Stefan Harary</span>
              <a class="toggle-tigger user-thumb" href="#">
                <em class="ti ti-user"></em>
              </a>
              <div
                class="toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown"
              >
                <div class="user-status">
                  <h6 class="user-status-title">Token balance</h6>
                  <div class="user-status-balance">
                    12,000,000
                    <small>TWZ</small>
                  </div>
                </div>
                <ul class="user-links">
                  <li>
                    <a href="profile.html">
                      <i class="ti ti-id-badge"></i>My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti ti-infinite"></i>Referral
                    </a>
                  </li>
                  <li>
                    <a href="activity.html">
                      <i class="ti ti-eye"></i>Activity
                    </a>
                  </li>
                </ul>
                <ul class="user-links bg-light">
                  <li>
                    <a href="sign-in.html">
                      <i class="ti ti-power-off"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <!-- .topbar-nav-item -->
          </ul>
          <!-- .topbar-nav -->
        </div>

        <!-- .container -->
      </div>
      <!-- .topbar -->
      <!-- <div class="navbar">
        <div class="container">
          <div class="navbar-innr">
            <ul class="navbar-menu">
              <li>
                <a href="index.html">
                  <em class="ikon ikon-dashboard"></em> Dashboard
                </a>
              </li>
              <li>
                <a href="buy-token.html">
                  <em class="ikon ikon-coins"></em> Buy Tokens
                </a>
              </li>
              <li>
                <a href="ico-distribution.html">
                  <em class="ikon ikon-distribution"></em> ICO Distribution
                </a>
              </li>
              <li>
                <a href="transactions.html">
                  <em class="ikon ikon-transactions"></em> Transactions
                </a>
              </li>
              <li>
                <a href="profile.html">
                  <em class="ikon ikon-user"></em> Profile
                </a>
              </li>
              <li class="has-dropdown page-links-all">
                <a class="drop-toggle" href="#">
                  <em class="ikon ikon-exchange"></em> Pages
                </a>
              </li>
            </ul>
            <ul class="navbar-btns">
              <li>
                <a href="kyc-application.html" class="btn btn-sm btn-outline btn-light">
                  <em class="text-primary ti ti-files"></em>
                  <span>KYC Application</span>
                </a>
              </li>
              <li class="d-none">
                <span class="badge badge-outline badge-success badge-lg">
                  <em class="text-success ti ti-files mgr-1x"></em>
                  <span class="text-success">KYC Approved</span>
                </span>
              </li>
            </ul>
      </div>-->
      <!-- .navbar-innr -->
      <!-- </div> -->
      <!-- .container -->
      <!-- </div> -->
      <!-- .navbar -->
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>