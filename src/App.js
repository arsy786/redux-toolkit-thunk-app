import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPhotos } from "./galleryState";

function App() {
	const photos = useSelector((state) => state.gallery.photos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhotos());
	}, [dispatch]);
	console.log(photos);

	return (
		<div className="App">
			<h1>PHOTO GALLERY</h1>
			<p>This is a photo gallery made using Redux Toolkit and Redux Thunk.</p>
			<hr />
			<div className="Gallery">
				{photos.map((photo) => (
					<img
						key={photo.id}
						alt={photo.author}
						src={photo.download_url}
						width="400"
						height="400"
					/>
				))}
			</div>
			<button>VIEW MORE</button>
		</div>
	);
}

export default App;
