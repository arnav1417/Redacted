import React from "react"
import "./PostDetailsPage.css"

export default function PostDetailsPage() {
    return (
        <div className="pageContainer">
            <div className="postDetailsContainer">
                <div className="postInfo">
                    <img src={require("../../static/sample-image.jpg")} alt="post cover" className="postDetailsCover" />
                    <div className="writerInfo">
                        <h2 className="postDetailsTitle">Sample Post Title</h2>
                        <p>by <strong>Joh Doe</strong></p>
                    </div>
                </div>
                <p className="postDetailsDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At et aut exercitationem nemo, sapiente ullam consequuntur assumenda maiores corrupti odio explicabo sint perferendis optio laboriosam tenetur aspernatur suscipit earum numquam.
                    Nihil mollitia rem maiores, harum voluptate illo, asperiores tenetur inventore saepe nulla ratione sequi, voluptates quia eos maxime? Voluptatem laboriosam ex exercitationem praesentium, totam dolorum reiciendis vero delectus distinctio quod.
                    Tempore expedita dolor, consequatur rem omnis perspiciatis, dolores dolore autem quidem numquam quaerat sint sit consequuntur atque, amet repellat harum earum molestias. Eos expedita quasi tempore non. Asperiores, molestiae distinctio.
                    Aliquam, magni incidunt earum ducimus sequi, perspiciatis consequatur nobis veniam quibusdam atque totam consectetur cum laborum voluptate commodi eius. Laboriosam ipsum eum ratione quod, atque officia. Accusantium quam est excepturi!
                    Vitae recusandae modi magni quam accusamus tempora ipsam dignissimos numquam libero! Fugiat cum aut quis labore expedita quidem vero accusantium animi voluptatum iusto, ad est cumque ex optio reiciendis dolores.
                    Accusamus magni sed maiores. Animi excepturi modi consectetur tenetur cupiditate sapiente reprehenderit, assumenda, porro vel culpa illo aliquam consequatur atque quod officiis! Pariatur voluptatem laudantium minus vel similique, quis saepe?
                    Itaque architecto quos tempore at sit assumenda nulla? Excepturi illum repudiandae dolorum beatae itaque eveniet cumque autem unde vitae, quidem dicta cum, adipisci, quos quae! Iure maxime recusandae sequi omnis.
                    Fugit adipisci labore aliquid, quod odit in tempore maiores non distinctio reprehenderit tenetur officia numquam facere atque, blanditiis quae nam temporibus praesentium, placeat illum dolores? Voluptatem temporibus optio modi iusto.
                    Quos accusantium doloribus eveniet ea optio omnis natus corrupti facere quia, saepe consectetur placeat soluta ut porro nostrum dignissimos? Labore quia corrupti minima quis sit. Ullam cupiditate laborum reiciendis quia?
                    Distinctio ullam provident soluta adipisci ex laboriosam earum natus debitis blanditiis sapiente quaerat officia, reiciendis commodi sequi ipsum similique temporibus ab! Distinctio vel molestiae aut voluptatem facere eaque ipsam debitis.</p>
            </div>
        </div>
    )
}