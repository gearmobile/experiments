<template lang="pug">
  
  v-container( fluid )

    h2.display-2.text-xs-center
      | dialogs

    // SIMPLE DIALOG

    h4.headline.text-xs-right
      | #1 simple dialogs

    p.text-xs-right
      | Choosing an option immediately commits the option and closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.

    v-layout( row, justify-center, style="position: relative" )
      v-dialog( lazy, absolute, v-model="dialog" )
        v-btn( dark, primary, slot="activator" )
          | open dialog
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="dialog = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="dialog = false" )
              | agree

    // WITHOUT ACTIVATOR

    h4.headline.text-xs-right
      | #2 without activator

    p.text-xs-right
      | If for some reason you are unable to use the <strong>activator slot</strong>, be sure to add the <code>.stop</code> modifier to the event that triggers the dialog.

    v-layout( row, justify-center )
      v-btn( dark, primary, @click.native.stop="dialog1 = true" )
        | open dialog
      v-dialog( v-model="dialog1" )
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="dialog1 = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="dialog1 = false" )
              | agree

    // MODAL

    h4.headline.text-xs-right
      | #3 modal

    p.text-xs-right
      | Similar to a Simple Dialog, except that it's not dismissed when touching outside.

    v-layout( row, justify-center )
      v-dialog( v-model="modal", persistent )
        v-btn( primary, dark, slot="activator" )
          | open modal
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="modal = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="modal = false" )
              | agree

    // FULLSCREEN

    h4.headline.text-xs-right
      | #4 fullscreen

    p.text-xs-right
      | Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens

    v-layout( row, justify-center )
      v-dialog( v-model="fullscreen", fullscreen, transition="v-dialog-bottom-transition", :overlay=false )
        v-btn( primary, dark, slot="activator" )
          | open fullscreen window
        v-card
          v-toolbar.primary( dark )
            v-btn( dark, icon, @click.native='fullscreen = false' )
              v-icon
                | close
            v-toolbar-title
              | settings
            v-spacer
            v-toolbar-items
              v-btn( dark, flat, @click.native='fullscreen = false' )
                | save
          v-list( three-line, subheader )
            v-subheader
              | user controls
            v-list-tile( avatar )
              v-list-tile-content
                v-list-tile-title
                  | content filtering
                v-list-tile-sub-title
                  | set the content filtering level to restrict appts that can be downloaded
            v-list-tile( avatar )
              v-list-tile-content
                v-list-tile-title
                  | password
                v-list-tile-sub-title
                  | require password for purchase or use password to restrict purchase
          v-divider
          v-list( three-line, subheader )
            v-subheader
              | general
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | notifications
                v-list-tile-sub-title
                  | notify me about updates to apps or games that i downloaded
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | sound
                v-list-tile-sub-title
                  | auto-update apps at any time. data charges may apply
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | auto-add widgets
                v-list-tile-sub-title
                  | automatically add home screen widgets

    // FORM

    h4.headline.text-xs-right
      | #5 form

    p.text-xs-right
      | just a simple example of a form in a dialog

    v-layout( row, justify-center )
      v-dialog( v-model='form', persistent )
        v-btn( primary, dark, slot="activator" )
          | open form dialog
        v-card
          v-card-title
            span.headline
              | user profile
          v-card-text
            v-text-field( label="email", required )
            v-text-field( label='password', required, type='password' )
            v-text-field( label='first name', required )
            v-text-field( label='middle name', required, hint='example of helper text only on focus' )
            v-text-field( label='last name', required, hint='example of persistent helper text', persistent-hint )
            v-select( label='age', required, :items='age' )
            v-select( label='interests', multiple, autocomplete, chips, :items='hobbys' )
            small
              | *indicates required field
          v-card-actions
            v-spacer
            v-btn.blue--text.darken-1( primary, flat, @click.native='form = false' )
              | close
            v-btn.blue--text.darken-1( primary, flat, @click.native='form = false' )
              | save

    // SCROLLABLE

    h4.headline.text-xs-right
      | #6 scrollable

    p.text-xs-right
      | Example of a dialog with scrollable content.

    v-layout( row, justify-center )
      v-dialog( v-model='scrollable', scrollable )
        v-btn( primary, dark, slot='activator' )
          | open scrollable window
        v-card
          v-card-title
            | select country
          v-divider
          v-card-text( style='height: 300px' )
            v-radio( v-for='(item, index) in countries', :key='index', :label='item', :value='item', v-model='country' )
          v-divider
          v-card-actions
            v-btn.green--text.darken-2( flat, @click.native='scrollable = false' )
              | close
            v-btn.green--text.darken-2( flat, @click.native='scrollable = false' )
              | save

    // OVERFLOWED

    h4.headline.text-xs-right
      | #7 overflowed

    p.text-xs-right
      | modals that do not fit within the available window space will scroll the container

    v-layout( row, justify-center )
      v-dialog( v-model='overflowed', width='600px' )
        v-btn( primary, dark, slot='activator' )
          | open overflowed window
        v-card
          v-card-title
            span.headline
              | use google's location service?
          v-card-text
            | {{ text }}
          v-card-actions
            v-spacer
            v-btn.orange--text.darken-2( flat, @click.native='overflowed = false' )
              | disagree
            v-btn.orange--text.darken-2( flat, @click.native='overflowed = false' )
              | agree

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false,
        modal: false,
        fullscreen: false,
        form: false,
        age: ['0-17', '18-29', '30-54', '54+'],
        hobbys: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
        scrollable: false,
        country: null,
        countries: [
          'bahamas',
          'bahrain',
          'bangladesh',
          'barbados',
          'belarus',
          'belgium',
          'belize',
          'benin',
          'bhutan',
          'bolivia',
          'bosnia',
          'botswana',
          'brazil',
          'brunei',
          'bulgaria',
          'burkina',
          'burma',
          'burundi'
        ],
        overflowed: false,
        text: 'Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +'
      }
    }
  }
</script>

