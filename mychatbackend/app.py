from langchain_google_genai import ChatGoogleGenerativeAI

from flask import Flask, request, jsonify  
from flask_cors import CORS  
from werkzeug.exceptions import BadRequest, InternalServerError
from google.api_core.exceptions import ResourceExhausted


query_processor = Flask(__name__)
CORS(query_processor)

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
 api_key="AIzaSyDnrtxmdIrr1S3QQ_dQ0M3fT0MliMbB9bg"

   #api_key="AIzaSyDH4pqL-724-lFnf_hNDy7wuD2-HvsS40M"
   
)


@query_processor.route('/query', methods=['POST'])
def handle_query():
    try:
   
        print("Query Handled")
        request_data = request.get_json()

        
        if not request_data or 'query' not in request_data:
            raise BadRequest("Invalid request: 'query' field is missing")

        user_query = request_data.get('query')  

        
        
        ai_msg = llm.invoke(user_query)

       
        print("response sent")
        return jsonify({"response": ai_msg.content})
    
    except ResourceExhausted as e:
        print(f"Error invoking LLM due to resource exhaused")
        print(e.message)
        return jsonify({"response": str(e.message)})
            

    except Exception as e:
        
        print(f"Error invoking LLM: {e}")
        return jsonify({"response": str(e.response)}), 500

   

# Start the Flask server


if __name__ == '__main__':
    query_processor.run(debug=True)