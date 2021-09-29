/* eslint-disable react/prop-types */
import React from 'react';
import {Doughnut} from 'react-chartjs-2';
function ReviewChart(props) {
	const {reviewData} = props;

	const data = {
		labels : ['likes', 'dislikes'],
		datasets:[
			{ 
				label : 'reviews',
				data : [reviewData.liked, reviewData.disliked],
				backgroundColor : [
					'#4db8bc',
					'#222222',
				]
			} 
		]
	};
    
	return (
		<Doughnut data={data} />
	);
}

export default ReviewChart;
