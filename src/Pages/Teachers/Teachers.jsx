import React from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import Container from "../../Components/Container";
import TeacherCard from "./TeacherCard";

function Teachers() {
  return (
    <>
      <CommonBanner heading={"Teachers"} />
      <Container>
        <div className="lg:grid grid-cols-4 gap-5 pt-14">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </Container>
    </>
  );
}

export default Teachers;
