import { useEffect, useState } from "react";
import { Movie } from "../services/types";
import axios from "axios";
import { Loading } from "components/Loading";

const IndexPage: React.FC = () => {
  const [detailData, setDetail] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  const getList = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=c2a03b09"
      );
      setIsLoading(false);
      setDetail(res?.data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {detailData && !isLoading ? (
        <div className="card bg-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-5">
                <img
                  src={detailData?.Poster}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-sm-7">
                <h4 className="card-title fw-bold text-warning">
                  {detailData?.Title} ({detailData?.Year})
                </h4>
                <p className="card-text text-muted">{detailData?.Plot}</p>

                <div className="card-body bg-warning text-primary d-flex flex-column">
                  <span>
                    <b className="text-secondary">Director:</b>{" "}
                    {detailData.Director}
                  </span>
                  <span>
                    <b className="text-secondary">Time:</b> {detailData.Runtime}
                  </span>
                  <span>
                    <b className="text-secondary">Genre:</b> {detailData.Genre}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default IndexPage;
