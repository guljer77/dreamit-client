import React from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../../Components/Container';
import { useAuth } from '../../Hooks/Auth/useAuth';

function CourseDetails() {
  const {user} = useAuth();
  const {id} = useParams();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("https://dream-it-server-five.vercel.app/classes");
      return res.data;
    },
  });
  const findData = classes.find(item=> item?._id === id);
  return (
    <>
      <CommonBanner heading={"Courses Details"} />
      <Container>
        <div className='lg:flex items-start justify-between gap-5 pt-14 pb-10'>
          <div className='lg:w-1/3 w-full lg:mb-0 mb-5'>
            <img src={findData?.image} alt="" className='w-full h-auto' />
          </div>
          <div className='lg:w-2/2 w-full'>
            <h4 className='text-[26px] font-normal pb-5'>{findData?.title}</h4>
            <p className='text-[15px] font-normal'>{findData?.longText}</p>
            <div className='py-3 text-[14px] font-semibold'>
              <span>Course Price: {findData?.price}</span>
            </div>
            <Link className='px-5 py-2 bg-primary text-white rounded mt-3 inline-block'>Enrol Now</Link>
          </div>
        </div>
        <div className='bg-gray-100 p-10 rounded-md'>
          <p dangerouslySetInnerHTML={{ __html: findData?.description }}></p>
        </div>
      </Container>
    </>
  )
}

export default CourseDetails