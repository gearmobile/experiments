<template>
  <section>
    <h2>second page</h2>
    <nav class="nav">
      <router-link to="/second/1" tag="li"><a>uno</a></router-link>
      <router-link to="/second/2" tag="li"><a>duo</a></router-link>
      <router-link to="/second/3" tag="li"><a>tre</a></router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>
