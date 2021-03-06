import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProject from '../components/postcomponents/EditProject';
import injectProject from '../components/inject-edit';
import url from '../globalVars';

class EditProjectScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            cost: '',
            category: '',
            time: '',
            description: '',
            steps: [],
            materials: [],
            steptitle: '',
            stepdescription: '',
            materialtitle: '',
            materialquantity: '',
            materialasin: '',
            materialSearch: '',
            projectimage: '',
            stepimage: '',
            stepimagevalue: null,
            stepcount: 1,
            modalIsOpen: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.edit !== prevProps.edit) {
            this.setState({title: this.props.edit.project.project_title,
                    projectimage: this.props.edit.project.feature_image_file,
                    cost: this.props.edit.project.cost_range||0,
                    time: this.props.edit.project.time_range||0,
                    description: this.props.edit.project.project_description,
                    steps: this.props.edit.steps,
                    materials: this.props.edit.materials,
                    stepcount: this.props.edit.steps.length + 1
                });
        }
    }

    render() {
        let searchAmazon = (query) => {
            fetch(`${url}/amazon?q=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    openModal();
                    this.props.dispatch({
                        type: 'LOAD_AMAZON',
                        items: data.items
                    })
                } else {
                    this.props.dispatch({
                        type: 'SET_TOAST',
                        toast: {
                            text: 'Problem reaching amazon!',
                            type: 'error'
                        }
                    });
                }
            })
            .catch(error => {
                this.props.dispatch({
                    type: 'SET_TOAST',
                    toast: {
                        text: 'Problem reaching amazon!',
                        type: 'error'
                    }
                });
            })
        }
        let openModal = () => {
            this.setState({modalIsOpen: true});
        }
        let closeModal = () => {
            this.setState({modalIsOpen: false});
        }
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        let saveProject = () => {
            let formData = new FormData();
            formData.append('title', this.state.title);
            formData.append('feature_image', this.state.projectimage);
            formData.append('time', this.state.time);
            formData.append('cost', this.state.cost);
            formData.append('category', this.state.category);
            formData.append('description', this.state.description);

            this.state.steps.forEach(step => {
                formData.append('step_title', step.step_title);
                formData.append('step_text', step.step_text);
                formData.append('step_order', step.step_order);
                formData.append('step_images', step.step_image_file);
            });
            
            this.state.materials.forEach(material => {
                formData.append('material_title', material.title);
                formData.append('material_quantity', material.quantity);
                formData.append('amazon_asin', material.amazon_asin);
            })

            fetch(`${url}/editproject/${this.props.edit.project.id}`, {
                method: "POST",
                headers: {token: localStorage.token},
                body: formData
            })
            .then(response => response.json())
            .then(response => {
                response.status === 'success' ?
                    this.props.dispatch({type: "SET_TOAST", toast: {
                        type: 'info',
                        text: 'Your project has been saved!'
                    }})
                :
                    this.props.dispatch({type: "SET_TOAST", toast: {
                        type: 'error',
                        text: 'Your project has not been saved.'
                    }})
            })
            
        }
        let editStep = (count, title, description, image) => {
            this.setState({stepcount: count,
                            steptitle: title,
                            stepdescription: description,
                            stepimage: image
                        })
        }

        let submitStep = () => {
            let currentStep = {step_title: this.state.steptitle,
                                step_text: this.state.stepdescription,
                                step_order: this.state.stepcount,
                                step_image_file: this.state.stepimage,
                            }

            let newSteps = [...this.state.steps].filter(step => step.step_order != this.state.stepcount).concat(currentStep).sort((a, b) => {
                return a.step_order - b.step_order
            })
            let newCount = newSteps.length + 1;

            this.setState({ stepcount: newCount,
                            steps: newSteps,
                            steptitle: '',
                            stepdescription: '',
                            stepimage: '',});

            this.props.dispatch({type: "SET_TOAST", toast: {
                type: 'info',
                text: 'You added a new step!'
            }})
        }

        let publishProject = () => {
            fetch(`${url}/publishproject/${this.props.edit.project.id}`, {
                method: "GET",
                headers: {token: localStorage.token,
                    "Content-Type": "application/json; charset=utf-8"}
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.status === "success") {
                    this.props.history.push(`/project/${this.props.edit.project.id}`)
                    this.props.dispatch({type: "SET_TOAST", toast: {
                        type: 'info',
                        text: 'You published your project!'
                        }
                    })
                } else {
                    this.props.dispatch({type: "SET_TOAST", toast: {
                        type: 'error',
                        text: 'Your project has not been published.'
                        }
                    })
                }
            })
        }
        
        let submitMaterial = () => {
            let currentMaterial = {title: this.state.materialtitle,
                                    quantity: this.state.materialquantity,
                                    amazon_asin: this.state.materialasin}
            let newMaterial = [...this.state.materials].concat(currentMaterial);
            this.setState({materials: newMaterial,
                            materialtitle: '',
                            materialquantity: '',
                            materialasin: '',})
        }
        return (
            <EditProject
                {...this.state}
                update={updateState}
                save={saveProject}
                submitStep={submitStep}
                submitMat={submitMaterial}
                project={this.props.edit}
                editStep={editStep}
                publish={publishProject}
                amazonSearch={this.props.amazonSearch}
                searchAmazon={searchAmazon}
                openModal={openModal}
                closeModal={closeModal}
            />
        )
    }
}
let mapStateToProps = (state) => ({
    edit: state.edit,
    amazonSearch: state.amazonSearch
})

let EditProjectScreenSmart = connect(mapStateToProps)(injectProject(EditProjectScreen))
export default EditProjectScreenSmart;
