import styled from 'styled-components';

const LandingCss = styled.div`
  width: 100%;
  position: relative;
  .header {
    padding: 20px;
  }
  .preview {
    width: 400px;
    margin: 20px auto;
    border: 1px solid;
    height: 480px;
    overflow: hidden;
    // background: black;
    // color: white;
  }
  .image{
    width: 100%;
    height: auto;
  }
  .inputBtn{
    display: none;
  }
  .submitBtn {
    padding: 8px 38px;
  }
  .uploadBtn {
    font-size: 18px;
    border: 1px solid;
    padding: 10px;
    background: #3f51b5;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .btnWrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  .faceWrapper{
    display: grid;
    grid-template-columns: 220px 220px 220px;
    column-gap: 20px;
    row-gap: 15px;
  }
  .analysedFace {
    width: 100%;
  }
  .percentText {
    padding: 10px;
    background: #3f51b5;
    color: #ffffff;
    font-size: 15px;
    text-transform: capitalize;
  }
  .percent {
    margin-right: 15px;
  }
  .loaderWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    display: flex;
    background: #ccc7c7;
    opacity: 0.6;
    align-items: center;
  }
  .loader {
    border: 12px solid #f3f3f3;
    border-radius: 50%;
    border-top: 12px solid #3f51b5;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default LandingCss;