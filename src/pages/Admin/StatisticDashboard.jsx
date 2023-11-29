import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

const StatisticDashboard = () => {
  const [userMostPost, setUserMostPost] = useState();
  const [mostLikePost, setMostLikePost] = useState();
  const [mostCmtPost, setMostCmtPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userMostPostResponse = await axios.get(
          "http://localhost:4202/api/users/get-user-has-most-post"
        );
        setUserMostPost(userMostPostResponse.data);

        const mostLikePostResponse = await axios.get(
          "http://localhost:4202/api/posts/get-most-like-post"
        );
        setMostLikePost(mostLikePostResponse.data);

        const mostCmtPostResponse = await axios.get(
          "http://localhost:4202/api/posts/get-most-comment-post"
        );
        setMostCmtPost(mostCmtPostResponse.data);
      } catch (error) {
        console.error("Error call API:", error);
      }
    };

    fetchData();
  }, []);
  const barChartData = {
    labels: userMostPost?.map((item) => item?.userName),
    datasets: [
      {
        label: "User with the most posts",
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 206, 86, 0.4)",
        ],
        hoverBorderColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 206, 86, 0.4)",
        ],
        data: userMostPost?.map((item) => item?.postCount),
      },
    ],
  };

  const lineChartData = {
    labels: mostLikePost?.map((item) => item?.content),
    datasets: [
      {
        label: "Post with most reaction",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
        data: mostLikePost?.map((item) => item?.likeCount),
      },
    ],
  };
  const lineChartData2 = {
    labels: mostCmtPost?.map((item) => item?.content),
    datasets: [
      {
        label: "Post with most comment",
        borderColor: "rgba(75, 192, 192, 0.6)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderWidth: 2,
        data: mostCmtPost?.map((item) => item?.commentCount),
      },
    ],
  };
  return (
    <>
      <div className="grid grid-cols-12 ml-5 gap-5">
        <div className="bg-white shadow-md shadow-gray-300 col-span-6 p-3 rounded-md">
          <Bar
            data={barChartData}
            width={100}
            height={50}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div className="bg-white shadow-md shadow-gray-300 col-span-6 p-3 mr-5 rounded-md">
          <Line
            data={lineChartData}
            width={100}
            height={50}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div className="bg-white shadow-md shadow-gray-300 col-span-6 p-3 mr-5 rounded-md">
          <Line
            data={lineChartData2}
            width={100}
            height={50}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StatisticDashboard;
