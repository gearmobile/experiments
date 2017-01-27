<template>
    <section class="users">
        <div class="post">
            {{ $route.params.id }}
        </div>
    </section>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        posts: [
          { postID: 10, postTitle: 'Title of Post 10', postAuthor: 'john', postBody: 'Post 10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 11, postTitle: 'Title of Post 11', postAuthor: 'mary', postBody: 'Post 11 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 12, postTitle: 'Title of Post 12', postAuthor: 'joseph', postBody: 'Post 12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 13, postTitle: 'Title of Post 13', postAuthor: 'mike', postBody: 'Post 13 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 14, postTitle: 'Title of Post 14', postAuthor: 'peter', postBody: 'Post 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 15, postTitle: 'Title of Post 15', postAuthor: 'john', postBody: 'Post 15 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 16, postTitle: 'Title of Post 16', postAuthor: 'mike', postBody: 'Post 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 17, postTitle: 'Title of Post 17', postAuthor: 'sarah', postBody: 'Post 17 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 18, postTitle: 'Title of Post 18', postAuthor: 'peter', postBody: 'Post 18 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 19, postTitle: 'Title of Post 19', postAuthor: 'aaron', postBody: 'Post 19 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 20, postTitle: 'Title of Post 20', postAuthor: 'max', postBody: 'Post 20 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' },
          { postID: 21, postTitle: 'Title of Post 21', postAuthor: 'john', postBody: 'Post 21 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?' }
        ]
      }
    }
  }
</script>