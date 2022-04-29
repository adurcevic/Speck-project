import React from "react";
import "./SingleCourse.scss";
import LectureImg1 from "../../assets/images/lecture-1.jpg";

const SingleCourse = () => {
  return (
    <div className="SingleCourse">
      <figure className="SingleCourse-Figure">
        <img
          className="SingleCourse-Image"
          src={LectureImg1}
          alt="lecture-1.jpg"
        />
      </figure>
      <p className="SingleCourse-Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque
        elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat
        volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis.
        Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non
        pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl
        quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent
        at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit
        amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non
        iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada
        commodo dolor. Suspendisse et vulputate libero.
        <br />
        <br />
        Phasellus tincidunt metus id nunc condimentum, et elementum enim
        accumsan. Praesent condimentum urna sapien, ultrices sagittis neque
        efficitur non. Quisque sagittis convallis lectus, id lobortis massa.
        Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu
        nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed
        pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra
        arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi.
        Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero,
        vehicula porta mauris. Quisque volutpat ut nisi ut porta.
        <br />
        <br />
        Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec
        dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque
        viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus
        sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu
        accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae
        metus lacinia luctus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla
        luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur
        elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum
        velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus
        nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt
        imperdiet in eu dolor.
      </p>
    </div>
  );
};

export default SingleCourse;
