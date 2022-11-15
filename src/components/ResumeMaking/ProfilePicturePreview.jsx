import React, { Component } from 'react'

export default class ProfilePicturePreview extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    closeModalWindow = () => {
        this.props.closeModal()

    }


    render() {
        return (
            <>
                <p style={{ float: 'right', fontSize: '1.4em', cursor: 'pointer', fontWeight: 'bold' }} onClick={this.closeModalWindow}>X</p>
                <div className='' style={{ margin: '2em', color: '#666', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '2em', color: '#666' }}>Upload Profile Picture</p>
                        <p style={{ fontWeight: 'bold' }}>Profile with photo has higher chances of getting noticed by recruiters</p>
                        <div>
                            {/* {getFile != undefined && getFile.PROFILE_IMAGE ?
                                <img src={`${getFile.PROFILE_IMAGE_PATH}/${getFile.PROFILE_IMAGE}`} style={{ width: '150px', height: '150px' }} /> :
                                <img src={Pic} style={{ width: '150px', height: '150px' }} />
                            } */}
                        </div>
                        <div className='form-group' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <input type="file" name="file" hidden placeholder='Upload Profile Picture..' accept="image/png, image/jpeg" onChange={this.onFileChange} style={{border:'1px solid grey',width:'30%',height:'2em'}}/> */}
                            {/* <button className='btn btn-primary' onChange={this.onFileChange}>Submit</button> */}
                            <p style={{ color: '#666', fontWeight: 'bold' }}>Supported file format: png,jpg,jpeg </p>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>By uploading your photograph, you certify that rozgar.com has the right to </div>
                                <div>display this photograph to the recruiters and that the uploaded file does not violate our <a href="javascript:void(0)" style={{ color: 'blue' }}>Terms of services.</a></div>
                            </div>
                        </div>
                        <div style={{ width: 'auto' }}>
                            <input type="file" name="file" id="upload" accept="image/png, image/jpeg" hidden onChange={this.onFileChange} />
                            <label className='btncv' htmlFor="upload" style={{ margin: '0em 2em', display: 'inline-block', backgroundColor: '#448ab1', color: 'white', padding: '0.7rem 1.8rem ', fontFamily: 'sans-serif', cursor: 'pointer', marginTop: '1rem' }}>Upload file</label>
                            <button className='btncv' style={{ margin: '0em 2em', display: 'smokeWhite', backgroundColor: 'white', border: '1px solid red', color: 'red', padding: '0.7rem 1.8rem', fontFamily: 'sans-serif', cursor: 'pointer', marginTop: '1rem' }} onClick={this.deleteProfilePic}>
                                Delete File
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
