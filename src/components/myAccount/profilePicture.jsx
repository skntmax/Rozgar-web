import React, { Component } from 'react'
import swal from 'sweetalert'
import { deleteProfilePic, getProfilePic, uploadProfilePic } from '../../action/CandidateAction'
import constant from '../../constant'
import { capFirstLetterInSentence, getStorage } from '../../utils'
import Pic from "../../assets/images/profilePic/secondary.jfif"
import { border } from '@mui/system'
import { Helmet } from 'react-helmet'
export default class profilePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: getStorage(constant.keys.cd),
            file: {},
            fileChange: undefined,
            getFile: undefined
        }
    }
    componentDidMount() {
        this.onGetFileChange();
    }

    onFileChange = (event) => {
        // const files = event.target.files;
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0])
        // reader.onload=(e)=>{
        //     const {CANDIDATE_ID} = this.state.detail;
        //     const formData = new FormData();
        //     formData.append('CANDIDATE_ID',CANDIDATE_ID);
        //     formData.append('file',e.target.result );
        const files = event.target.files[0];
        const { CANDIDATE_ID } = this.state.detail
        const formData = new FormData();
        formData.append('CANDIDATE_ID', CANDIDATE_ID);
        formData.append('PROFILE_IMAGE', files);
        let model = {
            file: files
        }
        let status = this.validateForm(model)
        if (status) {
            uploadProfilePic(formData).then((res) => {
                this.setState({ fileChange: res.result })
                this.props.closeModal()
                if (res.status) {

                    swal({
                        icon: "success",
                        text: res.messageCode,
                        timer: 1000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                    this.onGetFileChange();
                    window.location.reload()
                } else {
                    swal({
                        icon: "error",
                        text: "Something went wrong!!",
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                }
            })

        }
    }

    //Image Cropper 
    onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    //Image Cropper

    onGetFileChange = () => {
        const { CANDIDATE_ID } = this.state.detail;
        getProfilePic({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            console.warn("response", res.result);
            this.setState({ getFile: res.result })
        })
    }

    deleteProfilePic = () => {
        const { CANDIDATE_ID } = this.state.detail;
        deleteProfilePic({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            this.props.closeModal()
            swal({
                icon: "success",
                text: "Profile picture deleted successfully",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            this.onGetFileChange();
            window.location.reload()
        })

    }

    validateForm = (model) => {
        let data = model
        let error = {}
        let isValid = true
        if (data['file'].size > 1e6) {
            swal({
                icon: "error",
                text: "Please upload a file smaller than 1 MB",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            isValid = false
        }
        if (!data["file"].name.match(/\.(png|jpg|jpeg|jfif|pjpeg|pjp|svg|tiff|)$/)) {
            swal({
                icon: "error",
                text: "Please select PNG/JPG/JPEG?JFIF/PJPEG/PJP/SVG/TIFF file",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            isValid = false
        }
        if (data["file"] && data["file"].name) { }
        else {
            swal({
                icon: "error",
                text: "Please select file",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            isValid = false
        }

        this.setState({
            error: error
        })

        return isValid
    }

    closeModalWindow = () => {
        this.props.closeModal()

    }
    render() {
        const { getFile } = this.state;
        return (
            <React.Fragment>
                          <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
                <p style={{ float: 'right', fontSize: '1.4em', cursor: 'pointer', fontWeight: 'bold' }} onClick={this.closeModalWindow}>X</p>
                <div className='' style={{ margin: '2em', color: '#666', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '2em', color: '#666' }}>Upload Profile Picture</p>
                        <p style={{ fontWeight: 'bold' }}>Profile with photo has higher chances of getting noticed by recruiters</p>
                        <div>
                            {getFile != undefined && getFile.PROFILE_IMAGE ?
                                <img src={`${getFile.PROFILE_IMAGE_PATH}/${getFile.PROFILE_IMAGE}`} style={{ width: '150px', height: '150px' }} /> :
                                <img src={Pic} style={{ width: '150px', height: '150px' }} />
                            }
                        </div>
                        <div className='form-group' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <input type="file" name="file" hidden placeholder='Upload Profile Picture..' accept="image/png, image/jpeg" onChange={this.onFileChange} style={{border:'1px solid grey',width:'30%',height:'2em'}}/> */}
                            {/* <button className='btn btn-primary' onChange={this.onFileChange}>Submit</button> */}

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>By uploading your photograph, you certify that rozgar.com has the right to </div>
                                <div>display this photograph to the recruiters and that the uploaded file does not violate our <a target="_blank" href={constant.component.termsConditions.url} style={{ color: 'blue' }}>Terms of Services.</a></div>
                            </div>
                        </div>
                        <div style={{ width: 'auto' }}>
                            <input type="file" name="file" id="upload" accept="image/png, image/jpeg" hidden onChange={this.onFileChange} />
                            <label className='btncv' htmlFor="upload" style={{ margin: '0em 2em', display: 'inline-block', backgroundColor: '#448ab1', color: 'white', padding: '0.7rem 1.8rem ', fontFamily: 'sans-serif', cursor: 'pointer', marginTop: '1rem' }}>Upload file</label>
                            {getFile != undefined && getFile.PROFILE_IMAGE ?
                                <button className='btncv' style={{ margin: '0em 2em', display: 'smokeWhite', backgroundColor: 'white', border: '1px solid red', color: 'red', padding: '0.7rem 1.8rem', fontFamily: 'sans-serif', cursor: 'pointer', marginTop: '1rem' }} onClick={this.deleteProfilePic}>
                                    Delete File
                                </button> : ""}
                        </div>
                        <p style={{ color: '#e62e2d', marginTop: '10px' }}>Supported file format: png, jpg, jpeg, tiff, pjpeg, pjp, svg, jfif </p>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

