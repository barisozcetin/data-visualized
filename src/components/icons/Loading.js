import React from 'react';

const Loading = () => {
	return (
		<div className="loading">
			<div className="loading-spinner" />
			<style jsx>
				{`
					.loading {
						height: 100vh;
						width: 100vw;
						display: grid;
					}

					.loading-spinner {
						margin: auto;
						width: 64px;
						height: 64px;
					}
					.loading-spinner:after {
						content: " ";
						display: block;
						width: 46px;
						height: 46px;
						margin: 1px;
						border-radius: 50%;
						border: 5px solid black;
						border-color: black transparent black transparent;
						animation: loading-spinner 1.2s linear infinite;
					}
					@keyframes loading-spinner {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}
				`}
			</style>
		</div>
	);
};

export default Loading;
