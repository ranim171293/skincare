import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import LandingCss from "./style";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imgData: null,
      data: [],
      isLoading: false,
      error: false,

    };
  }

  setImage = (e) => {
    let img = e.target.files[0];
    // this.setState({
    //   image: img
    // })
    var reader = new FileReader();

    reader.onload = () => {
      this.setState({
        image: reader.result,
        imgData: img,
      });
    };
    reader.readAsDataURL(img);
  };

  uploadImage = () => {
    this.setState({ isLoading: true });
    let img = this.state.imgData;
    let formData = new FormData();
    formData.append("image", img);
    console.log(formData);
    axios({
      url: `https://skincare.orbo.ai/api/media/skinanalysis/upload?clientkey=IOS9B6E7369D7D0CCE2002101AA32CD5EA4078A182CF491C7452487195B801D63E7 `,
      method: "POST",
      data: formData,
    }).then((res) => {
      this.setState({
        data: res.data,
        isLoading: false,
        error: false,
      });
      console.log(this.state.data);
    }).catch(err => {
      this.setState({
        error: true,
        isLoading: false,
        data: err.response.data.error.message,
      });
    });
  };
  getValue = (ele) => {
    const { data } = this.state;
    let keyVal = ele.split("_image")[0].concat(..."_percentage");
    let val = data && data.outputData && data.outputData[keyVal];
    return val || '0';
  };

  render() {
    const { image, data, isLoading, error } = this.state;
    const imageArr = data && data.outputImages && Object.keys(data.outputImages);
    const outputData = data && data.outputData;
    console.log('outputData', outputData);
    return (
      <LandingCss>
        {isLoading ? (
          <div className="loaderWrapper">
            <div className="loader"></div>
          </div>
        ) : null}

        <Typography className="header" variant="h4">
          FACE SKIN ANALYSIS
            </Typography>
        <Grid className="wrapper" container spacing={2}>
          <Grid item md={5} xs={12}>
            <label>Upload Image with front face</label>
            <div className="btnWrapper">
              <label className="uploadBtn">
                Upload Image
                    <input
                  className="inputBtn"
                  type="file"
                  onChange={(e) => this.setImage(e)}
                ></input>
              </label>
              <Button
                variant="outlined"
                disabled={image ? false : true}
                color="primary"
                className="submitBtn"
                onClick={() => this.uploadImage()}
              >
                Submit
                  </Button>
            </div>
            <div className="preview">
              {image ? (
                <img className="image" src={image} alt="" />
              ) : (
                  <div>Preview image</div>
                )}
            </div>
          </Grid>
          {error ? <div className="errorMsg">{data}</div> :
            <Grid className="mobileAlign" item md={7} xs={12}>
              <div className="faceWrapper">
                {outputData ? (
                  <>
                    <div className="percentText">
                      <span className="percent">
                        Smoothness
                      </span>
                      {outputData.Smoothness} %
                    </div>
                    <div className="percentText">
                      <span className="percent">
                        Oxygen Score
                      </span>
                      {outputData.oxygen_score} %
                    </div>
                    <div className="percentText">
                      <span className="percent">
                        Hydration Score
                      </span>
                      {outputData.hydration_score} %
                    </div>
                  </>) : null
                }
                {imageArr &&
                  imageArr.map((ele) => (
                    <div>
                      <img
                        className="analysedFace"
                        src={data.outputImages[ele]}
                        alt=""
                      />
                      <div className="percentText">
                        <span className="percent">
                          {ele.split("_").join(" ")} :{" "}
                        </span>
                        {this.getValue(ele)} %
                        </div>
                    </div>
                  ))}
              </div>
            </Grid>
          }
        </Grid>
      </LandingCss>
    );
  }
}

export default Landing;
